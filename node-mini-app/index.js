const express = require("express");
const app = express();

// Use the PORT assigned by Vercel or default to 3000 (for local testing)
const PORT = process.env.PORT || 3000;

// Serve static files (optional)
app.use(express.static("public"));

// Home Route
app.get("/", (req, res) => {
  res.send(`
    <h1>Welcome to My Node.js Mini App 🚀</h1>
    <p>This is the home page.</p>
    <a href="/about">About</a> | <a href="/contact">Contact</a>
  `);
});

// About Route
app.get("/about", (req, res) => {
  res.send(`
    <h1>About Us 👋</h1>
    <p>This app is built with Node.js and Express, deployed on Vercel.</p>
    <a href="/">Go Home</a>
  `);
});

// Contact Route
app.get("/contact", (req, res) => {
  res.send(`
    <h1>Contact Page 📬</h1>
    <p>Send us a message at contact@myapp.com</p>
    <a href="/">Go Home</a>
  `);
});

// ✅ Export app for Vercel (don't call app.listen here)
module.exports = app;

// ✅ Local testing (optional)
if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
