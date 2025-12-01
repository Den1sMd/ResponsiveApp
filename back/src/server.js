const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());




function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(401).json({ error: "Token manquant" });

  const token = authHeader.split(" ")[1];
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: "Token invalide" });
    req.user = user;
    next();
  });
}


const JWT_SECRET = process.env.JWT_SECRET;


function generateReferralCode() {
    let code = '';
    for (let i = 0; i < 8; i++) {
        code += Math.floor(Math.random() * 10);
    }
    return code;
}

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query("SELECT * FROM users WHERE username = ?", [username]);
    if (rows.length === 0)
      return res.status(400).json({ error: "Utilisateur introuvable" });

    const valid = await bcrypt.compare(password, rows[0].password);
    if (!valid)
      return res.status(401).json({ error: "Mot de passe incorrect" });

    const token = jwt.sign({ id: rows[0].id, username: rows[0].username }, JWT_SECRET, { expiresIn: "7d" });
    res.json({
    token,
    user: {
      id: rows[0].id,
      username: rows[0].username
    }
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  } finally {
    if (conn) conn.release();
  }
});

app.get("/getparain", verifyToken, async (req, res) => {
  const userId = req.user.id;
  if (!userId) return res.status(400).json({ error: "userId manquant" });

  let conn;

  try {
     conn = await pool.getConnection();
     const rows = await conn.query(
      "SELECT referral_code, money_count, invited_count FROM users WHERE id = ?",
      [userId]
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: "Utilisateur non trouvé" });
    }

    res.json({
      referral_code: rows[0].referral_code,
      money_count: rows[0].money_count,
      invited_count: rows[0].invited_count,
    });

  }
  catch (err)
  {
    res.status(500).json({ error: err.message });
  }
  finally {
    if (conn) conn.release();
  }
})


app.post('/register', async (req, res) => {
    const { username, twitter, password, parrainage } = req.body;

    if (!username || !twitter || !password) {
        return res.status(400).json({ error: 'Champs manquants' });
    }

    let conn; 
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        conn = await pool.getConnection();

        let referralCode;
        let exists = true;
        let maxTries = 80; 
        let attempts = 0;

        let parrainId = null;

        if (parrainage) {
            try {
                const parrainRows = await conn.query(
                "SELECT id, invited_count, money_count FROM users WHERE referral_code = ?",
                [parrainage]
        );

        if (parrainRows.length > 0) {
            const parrainId = parrainRows[0].id;
            let calculmoneyuser = parrainRows[0].calculmoneyuser +1;

            await conn.query(
                "UPDATE users SET invited_count = invited_count + 1 WHERE id = ?",
                [parrainId]
            );

            await conn.query(
                "UPDATE users SET money_count = money_count + 1 WHERE id = ?",
                [parrainId]
            );

            if (calculmoneyuser >= 10) {
                await conn.query(
                    "UPDATE users SET money_count = money_count + 50, calcul_usersmoney = 0 WHERE id = ?",
                    [parrainId]
                );
            }


        }
        } catch (refErr) {
            console.error("Erreur lors du traitement du parrainage:", refErr);
        }

        }

        

        while (exists && attempts < maxTries) {


            referralCode = generateReferralCode();
            
            let rows; 

            try {
                 
                 [rows] = await conn.query(
                    'SELECT id FROM users WHERE referral_code = ?',
                    [referralCode]
                );
            } catch (queryErr) {
                
                console.error("ERREUR DANS LA REQUÊTE SELECT UNIQUE:", queryErr);
                
                throw queryErr; 
            }
            
            
            if (rows && rows.length === 0) {
                exists = false;
            }
            attempts++;
        }

        const result = await conn.query(
        `INSERT INTO users 
          (username, twitter_name, password, referral_code, referral_redeem) 
          VALUES (?, ?, ?, ?, ?)`,
        [username, twitter, hashedPassword, referralCode, parrainage]
        );

        const newUserId = result.insertId;

        const newUser = await conn.query(
        "SELECT id, username FROM users WHERE id = ?",
        [newUserId]
        );

        const token = jwt.sign(
        { id: newUser[0].id, username: newUser[0].username },
        JWT_SECRET,
        { expiresIn: "7d" }
        );

        res.json({
        token,
        user: {
          id: newUser[0].id,
          username: newUser[0].username
        }
        });

    } catch (err) {
        console.error("Erreur détaillée lors de l'enregistrement:", err);

        
        if (err.errno === 1062) {
            return res.status(409).json({ 
                error: 'Ce nom d\'utilisateur, compte twitter existe déjà.'
            });
        }
        
        
        res.status(500).json({
            error: 'Erreur serveur interne lors de l\'enregistrement.'
        });
        
    } finally {
        
        if (conn) conn.release(); 
    }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
