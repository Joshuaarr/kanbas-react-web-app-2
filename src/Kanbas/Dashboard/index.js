//import db from "../Database";
import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import "./index.css";
function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  return (
    <div className="ps-3 ">
      <h1>Dashboard</h1>
      <hr />
      <h2 className="ps-3">
        Published Courses ({courses.length})
        <hr />
      </h2>
      <ul className="wd-kanbas card-container">
        <h5>Edit Course:</h5>
      </ul>
      <ul className="wd-kanbas card-container">
        <div className="d-flex">
          <input
            value={course.name}
            className="form-control"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <input
            value={course.number}
            className="form-control ms-3"
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
          />
          <input
            value={course.startDate}
            className="form-control ms-3"
            type="date"
            onChange={(e) =>
              setCourse({ ...course, startDate: e.target.value })
            }
          />
          <input
            value={course.endDate}
            className="form-control ms-3"
            type="date"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
          />
        </div>
        <div className="d-flex float-end">
          <button
            className="btn btn-primary"
            style={{
              backgroundColor: "green",
              border: "none",
              color: "white",
              padding: "5px 10px",
            }}
            onClick={addNewCourse}
          >
            Add
          </button>
          <button
            className="btn btn-primary ms-2"
            style={{
              border: "none",
              color: "white",
              padding: "5px 10px",
            }}
            onClick={updateCourse}
          >
            Update
          </button>
        </div>
      </ul>
      <div className="ps-3 d-flex flex-row">
        <div className="wd-kanbas card-container">
          {courses.map((course) => (
            <div>
              <div>
                <div className="card wd-kanbas card-size">
                  <div
                    className="wd-kanbas square"
                    style={{ backgroundColor: "rgb(55, 55, 169)" }}
                  ></div>
                  <div className="card-body" style={{ color: "gray" }}>
                    <Link
                      key={course._id}
                      to={`/Kanbas/Courses/${course._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <h5>{course.name}</h5>
                      <button
                        className="btn btn-primary"
                        style={{
                          backgroundColor: "orange",
                          border: "none",
                          color: "black",
                          padding: "5px 10px",
                        }}
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                      >
                        Edit
                      </button>

                      <button
                        className="btn btn-primary ms-1"
                        style={{
                          backgroundColor: "red",
                          border: "none",
                          color: "white",
                          padding: "5px 10px",
                        }}
                        onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course);
                        }}
                      >
                        Delete
                      </button>
                    </Link>
                    <div className="card-text">
                      CS4550.12631.202410
                      <div style={{ color: "gray" }}>
                        202410_1 Fall 2023 Semester Full Term
                      </div>
                    </div>
                    <FaEdit />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
