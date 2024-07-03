const express = require("express");
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

let courses = [
  { id: 1, name: "java" },
  { id: 2, name: "python" },
  { id: 3, name: "javaScript" },
  { id: 4, name: "course4" },
  { id: 5, name: "course5" },
];

// GET endpoint to retrieve all courses
app.get("/courses", (req, res) => {
  res.json(courses);
});

// POST endpoint to add a new course
app.post("/courses", (req, res) => {
  const newCourse = {
    id: courses.length + 1, // Generate a new ID based on the array length
    name: req.body.name,
  };

  courses.push(newCourse);
  res.status(201).json(newCourse); // Respond with the newly created course
});

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
