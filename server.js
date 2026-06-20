const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const db = new sqlite3.Database("./database.db");

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS coffees (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    total_rating INTEGER DEFAULT 0,
    rating_count INTEGER DEFAULT 0
)
    `);

    db.get("SELECT COUNT(*) AS count FROM coffees", (err, row) => {
        if (row.count === 0) {
            const stmt = db.prepare(
                "INSERT INTO coffees (name, votes) VALUES (?, ?)"
            );

            stmt.run("Espresso", 0);
            stmt.run("Cappuccino", 0);
            stmt.run("Latte", 0);
            stmt.run("Mocha", 0);

            stmt.finalize();
        }
    });
});

app.get("/api/coffees", (req, res) => {
    db.all("SELECT * FROM coffees", [], (err, rows) => {
        res.json(rows);
    });
});

app.post("/api/rate/:id", (req, res) => {

    const id = req.params.id;
    const rating = req.body.rating;

    db.run(
        `UPDATE coffees
         SET total_rating = total_rating + ?,
             rating_count = rating_count + 1
         WHERE id = ?`,
        [rating, id],
        function(err) {

            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            res.json({
                success: true
            });
        }
    );
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});