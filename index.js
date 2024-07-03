const express = require("express");
const app = express();
let courses = [
  { id: 1, name: "java" },
  { id: 2, name: "python" },
  { id: 3, name: "javaScript" },
  { id: 4, name: "course4" },
  { id: 5, name: "course5" },
];
app.get("/courses", (req, res) => {
  res.json(courses);
});

port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
