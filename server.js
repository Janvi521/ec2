import express from "express";

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

app.get("/", (_req, res) => {
  res.status(200).type("text").send("CHALO BHAGWAN");
});

app.get("/api/janvi", (_req, res) => {
  res.status(200).json({
    ok: true,
    message: "Hello Janvi",
    data: {
      name: "Janvi",
      role: "demo",
      timestamp: new Date().toISOString(),
    },
  });
});

app.use((_req, res) => {
  res.status(404).json({ ok: false, error: "Not Found" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
