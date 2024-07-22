const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();

app.use(cors());
app.use(express.json());


  const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"",
    database:"db_calculette"
}
)



db.connect((err) => {
    if (err) {
      console.error('Database connection failed:', err.stack);
      return;
    }
    console.log('Connected to database.');
  });
  
  app.get("/offre", (req, res) => {
    const sql = "SELECT * FROM offre";
    db.query(sql, (err, data) => {
      if (err) {
        console.error('Error executing query:', err);
        return res.status(500).json({ error: 'Database query error' });
      }
      return res.json(data);
    });
  });

  app.post("/offre", (req, res) => {
    const sql = "INSERT INTO `offre`( `offrename`, `contenu`, `type_id`, `sans_engagement`, `youtube_inclus`, `tarif_12_mois`, `tarif_plus_12_mois`) VALUES (?,?,?,?,?,?,?)";
    const values = [
        req.body.id,
        req.body.offrename,
        req.body.contenu,
        req.body.type_id,
        req.body.sans_engagement,
        req.body.youtube_inclus,
        req.body.tarif_12_mois,
        req.body.tarif_plus_12_mois,
    ];
    db.query(sql, values, (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
      });

  });

  

app.listen(8086, () => {
    console.log("listening");
})

app.get("/option", (req, res) => {
    const sql = "SELECT * FROM option ";
    db.query(sql, (err, data) => {
      if (err) {
        console.error('Error executing query:', err);
        return res.status(500).json({ error: 'Database query error' });
      }
      return res.json(data);
    });
  });
  // Route pour l'ajout d'une option
  
 
//type offre
// GET endpoint pour récupérer tous les types d'offre
app.get("/typeOffre", (req, res) => {
    const sql = "SELECT * FROM typeoffre";
  
    db.query(sql, (err, data) => {
      if (err) {
        console.error('Erreur lors de l\'exécution de la requête :', err);
        return res.status(500).json({ error: 'Erreur de requête à la base de données' });
      }
      return res.json(data);
    });
  });
  // POST endpoint pour ajouter un nouveau type d'offre

  // Connection 
  app.post('/login', (req, res) => {
    const { logins, motDePasse } = req.body;
  
    // Simulate credential checking
    if (logins === 'khabar.nouhaila@gmail.com' && motDePasse === 'nouhaila123') {
      res.json({ success: true });
    } else {
      res.status(401).json({ success: false });
    }
  });