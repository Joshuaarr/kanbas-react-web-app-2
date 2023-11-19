import React, { useState, useEffect } from "react";
import * as client from "./clients";
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { useSelector, useDispatch } from "react-redux";
import { FaBars, FaCheckCircle, FaPlus, FaEllipsisV } from "react-icons/fa";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
  setAssignments,
} from "./AssignmentReducer";
import { findAssignmentsForCourse, createAssignment } from "./clients";

function Assignments() {
  const { courseId } = useParams();
  const handleDeleteAssignment = (assignmentId) => {
    client.deleteAssignment(assignmentId).then((status) => {
      dispatch(deleteAssignment(assignmentId));
    });
  };

  useEffect(() => {
    findAssignmentsForCourse(courseId).then((assignments) =>
      dispatch(setAssignments(assignments))
    );
  }, [courseId]);

  const handleAddAssignment = () => {
    createAssignment(courseId, assignment).then((assignment) => {
      dispatch(addAssignment(assignment));
    });
  };

  const handleUpdateAssignment = async () => {
    const status = await client.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };

  const assignments = useSelector(
    (state) => state.AssignmentReducer.assignments
  );
  const assignment = useSelector((state) => state.AssignmentReducer.assignment);
  const dispatch = useDispatch();
  return (
    <div class="pe-1 ps-1 container-fluid">
      <h2>Assignments for course {courseId}</h2>

      <ul className="list-group pe-5 ">
        <div className="pb-1 ">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <input
                type="email"
                className="form-control"
                id="input1"
                placeholder="Search for Assignments"
              />
            </div>
            <div className="col">
              <div className="float-end">
                <button
                  className="btn btn-secondary me-1"
                  style={{ fontSize: "small" }}
                >
                  <FaPlus /> Group
                </button>

                <Link
                  to={`/Kanbas/Courses/${courseId}/Assignments/AssignmentEditor`}
                >
                  <button
                    className="btn btn-danger me-1"
                    style={{ fontSize: "small" }}
                  >
                    <FaPlus /> Assignment
                  </button>
                  <button
                    className="btn btn-secondary"
                    style={{
                      fontSize: "small",
                      color: "black",
                      border: "none",
                    }}
                  >
                    <FaEllipsisV />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr />

        <ul className="list-group">
          {assignments
            .filter((assignment) => assignment.course === courseId)
            .map((assignment, index) => (
              <div
                className="list-group-item rounded-0"
                style={{ padding: "0" }}
              >
                <div className="d-flex align-items-center ms-2 mt-2">
                  <FaBars className="me-2" />
                  <h3>{assignment.title}</h3>
                  <div className="ms-auto">
                    <button
                      className="btn btn-primary ms-2"
                      style={{
                        backgroundColor: "red",
                        border: "none",
                        color: "white",
                        padding: "5px 10px",
                      }}
                      onClick={() => handleDeleteAssignment(assignment._id)}
                    >
                      Delete
                    </button>
                    <Link
                      key={index}
                      to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                    >
                      <button
                        className="btn btn-primary ms-2 me-1"
                        style={{
                          backgroundColor: "green",
                          border: "none",
                          color: "white",
                          padding: "5px 10px",
                        }}
                        onClick={() => dispatch(setAssignment(assignment))}
                      >
                        Edit
                      </button>
                    </Link>
                    <FaCheckCircle className="me-2 text-success" />
                    <FaPlus className="me-2" />
                    <FaEllipsisV />
                  </div>
                </div>
              </div>
            ))}
        </ul>
      </ul>
    </div>
  );
}
export default Assignments;
