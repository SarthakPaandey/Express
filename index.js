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
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: "Course name is required" });
  }

  const newCourse = {
    id: courses.length + 1, // Generate a new ID based on the array length
    name: name,
  };

  courses.push(newCourse);
  res.status(201).json(newCourse); // Respond with the newly created course
});

// PUT endpoint to update a course by ID
app.put("/courses/:id", (req, res) => {
  const courseId = parseInt(req.params.id);
  const { name } = req.body;

  // Find the course by ID
  const course = courses.find((course) => course.id === courseId);

  // If course not found, return 404 Not Found
  if (!course) {
    return res.status(404).json({ error: "Course not found" });
  }

  // Update the course's name
  course.name = name;

  res.json(course); // Respond with the updated course
});

// DELETE endpoint to delete a course by ID
app.delete("/courses/:id", (req, res) => {
  const courseId = parseInt(req.params.id);

  // Find the index of the course by ID
  const index = courses.findIndex((course) => course.id === courseId);

  // If course not found, return 404 Not Found
  if (index === -1) {
    return res.status(404).json({ error: "Course not found" });
  }

  // Remove the course from the array
  const deletedCourse = courses.splice(index, 1)[0];

  res.json(deletedCourse); // Respond with the deleted course
});

const port = 3001;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
