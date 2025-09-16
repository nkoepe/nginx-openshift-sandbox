const express = require("express");
const app = express();
const port = 8080;

// Define a custom endpoint
app.get("/hello", (req, res) => {
  res.send("Hello from my Node.js endpoint on OpenShift!");
});

// Root endpoint (optional)
app.get("/", (req, res) => {
  res.send("Welcome to my Node.js app for IBM Interview!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
