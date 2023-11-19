import React, { useState, useEffect } from "react";
import * as client from "./clients";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import {
  addAssignment,
  updateAssignment,
  setAssignment,
} from "./AssignmentReducer";
import { createAssignment } from "./clients";

function AssignmentEditor() {
  const { courseId } = useParams();
  const dispatch = useDispatch();

  const assignment = useSelector((state) => state.AssignmentReducer.assignment);

  const navigate = useNavigate();

  const handleSave = async () => {
    if (!assignment._id) {
      const newAssignment = await createAssignment(courseId, assignment);
      dispatch(addAssignment(newAssignment));
    } else {
      const status = await client.updateAssignment(assignment);
      dispatch(updateAssignment(assignment));
    }

    dispatch(setAssignment({ title: "New Assignment" }));
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div className="pe-5">
      <div className="pb-4">
        <div className="float-end">
          <button
            className="btn"
            style={{ fontSize: "small", color: "green", border: "none" }}
          >
            <FaCheckCircle />
            Published
          </button>

          <button
            className="btn btn-secondary"
            style={{ fontSize: "small", color: "black", border: "none" }}
          >
            <FaEllipsisV />
          </button>
        </div>
      </div>
      <hr />

      <h5>Assignment Name</h5>
      <input
        value={assignment.title}
        className="form-control mb-2"
        onChange={(e) =>
          dispatch(setAssignment({ ...assignment, title: e.target.value }))
        }
      />
      <hr />
      <div class="float-end">
        <Link
          to={`/Kanbas/Courses/${courseId}/Assignments`}
          className="btn btn-secondary"
        >
          Cancel
        </Link>
        <button onClick={handleSave} className="btn btn-danger me-2">
          Save
        </button>
      </div>
    </div>
  );
}

export default AssignmentEditor;
