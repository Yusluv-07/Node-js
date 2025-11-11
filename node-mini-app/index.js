const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(`
    <h1>Welcome to My Node.js Mini App 🚀</h1>
    <p>This is the home page.</p>
    <a href="/about">About</a> | <a href="/contact">Contact</a>
  `);
});

app.get("/about", (req, res) => {
  res.send(`
    <h1>About Us 👋</h1>
    <p>This app is built with Node.js and Express.</p>
    <a href="/">Go Home</a>
  `);
});

app.get("/contact", (req, res) => {
  res.send(`
    <h1>Contact Page 📬</h1>
    <p>Send us a message at contact@myapp.com</p>
    <a href="/">Go Home</a>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
