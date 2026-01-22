import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

import { pool, initDB } from "./db.js";
import { generateToken, authMiddleware } from "./auth.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

/* ================= INIT DATABASE ================= */
await initDB();

/* ================= REGISTER ================= */
app.post("/api/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hash = await bcrypt.hash(password, 10);

    await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1,$2,$3)",
      [name, email, hash]
    );

    res.json({ message: "Registered successfully" });
  } catch (err) {
    res.status(400).json({ error: "Email already exists" });
  }
});

/* ================= LOGIN ================= */
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  const result = await pool.query(
    "SELECT * FROM users WHERE email=$1",
    [email]
  );

  if (result.rows.length === 0) {
    return res.status(400).json({ error: "Invalid credentials" });
  }

  const user = result.rows[0];
  const ok = await bcrypt.compare(password, user.password);

  if (!ok) {
    return res.status(400).json({ error: "Invalid credentials" });
  }

  res.json({
    token: generateToken(user),
    name: user.name
  });
});

/* ================= SAVE PROJECT ================= */
app.post("/api/projects", authMiddleware, async (req, res) => {
  const { title, type, data } = req.body;

  await pool.query(
    `
    INSERT INTO projects (user_id, title, type, data)
    VALUES ($1,$2,$3,$4)
    `,
    [req.user.id, title, type, data]
  );

  res.json({ message: "Project saved" });
});

/* ================= GET PROJECTS ================= */
app.get("/api/projects", authMiddleware, async (req, res) => {
  const result = await pool.query(
    `
    SELECT id, title, type, created_at
    FROM projects
    WHERE user_id=$1
    ORDER BY created_at DESC
    `,
    [req.user.id]
  );

  res.json(result.rows);
});

/* ================= START ================= */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("🚀 Backend running on port", PORT);
});
