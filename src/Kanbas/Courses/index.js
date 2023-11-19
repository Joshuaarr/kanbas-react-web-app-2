import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import { FaBars } from "react-icons/fa";
import {
  useParams,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
//import db from "../Database";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";

function Courses() {
  const URL = "http://localhost:4000/api/courses";
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(`${URL}/${courseId}`);
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  const [empty, kanbas, courseName, id, screen] = pathname.split("/");

  return (
    <div className="pt-2 ps-3">
      <h2
        style={{
          color: "red",
        }}
      >
        <FaBars className="pe-2 pb-2" />
        {course.name}{" "}
        <span style={{ color: "gray" }}>
          {">"} {screen}
        </span>
      </h2>
      <hr />
      <CourseNavigation />
      <div>
        <div
          className="pt-5 overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route
              path="Assignments/AssignmentEditor"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;
