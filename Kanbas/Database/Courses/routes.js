// import Database from "../Kanbas/Database/index.js";
import * as dao from "./dao.js";
import mongoose from "mongoose"; 

export default function CourseRoutes(app) {
  app.get("/api/courses", async (req, res) => {
    const courses = await dao.findAllCourses();
    console.log(courses)
    res.send(courses);
  });

  app.post("/api/courses", async (req, res) => {
    const mongooseId = new mongoose.Types.ObjectId();
    const course = { ...req.body, _id: mongooseId, id: Date.now().toString() };
    const createdCourse = await dao.createCourse(course)
    res.send(createdCourse);
  });
  
  app.get("/api/courses/:courseId", async (req, res) => {
    const courseId = req.params.courseId;
    const course = await dao.findCourseById(courseId); // Database.courses;
    // const course = courses.find((course) => course._id === courseId);
    res.send(course);
  });

  app.delete("/api/courses/:courseId", async (req, res) => {
    const courseId = req.params.courseId;
    const status = await dao.deleteCourse(courseId);
    res.json(status);
  });

  app.put("/api/courses/:courseId", async (req, res) => {
    const courseId = req.params.courseId;
    const course = await dao.updateCourse(courseId, XMLHttpRequest.body);
    res.json(course);
  });
}

