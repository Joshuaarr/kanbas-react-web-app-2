import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import * as client from "./client";
import { FaBars, FaCheckCircle, FaPlus, FaEllipsisV } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import { findModulesForCourse, createModule } from "./client";
function ModuleList() {
  const { courseId } = useParams();
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  useEffect(() => {
    findModulesForCourse(courseId).then((modules) =>
      dispatch(setModules(modules))
    );
  }, [courseId]);

  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <ul className="list-group pe-5">
      <div className="pb-3">
        <div className="float-end" style={{ display: "inline-flex" }}>
          <button
            className="btn btn-secondary me-1"
            style={{ color: "black", border: "none", fontSize: "small" }}
          >
            Collapse All
          </button>
          <button
            className="btn btn-secondary me-1"
            style={{ color: "black", border: "none", fontSize: "small" }}
          >
            View Progress
          </button>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle me-1"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ color: "black", border: "none", fontSize: "small" }}
            >
              <FaCheckCircle style={{ color: "green" }} /> Publish All
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Publish All
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Publish All
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Publish All
                </a>
              </li>
            </ul>
          </div>
          <button className="btn btn-danger me-1" style={{ fontSize: "small" }}>
            <FaPlus /> Module
          </button>
          <button
            className="btn btn-secondary"
            style={{ fontSize: "small", color: "black", border: "none" }}
          >
            <FaEllipsisV />
          </button>
        </div>
      </div>

      <ul className="list-group">
        <li className="list-group-item">
          <div className="d-flex align-items-center pt-1 pb-1">
            <input
              className="form-control"
              value={module.name}
              style={{
                width: "400px",
              }}
              onChange={(e) =>
                dispatch(setModule({ ...module, name: e.target.value }))
              }
            />
            <div className="ms-auto">
              <button
                className="btn btn-primary"
                style={{
                  border: "none",
                  color: "white",
                  padding: "5px 10px",
                }}
                onClick={handleUpdateModule}
              >
                Update
              </button>
              <button
                className="btn btn-primary ms-2"
                style={{
                  backgroundColor: "green",
                  border: "none",
                  color: "white",
                  padding: "5px 10px",
                }}
                onClick={handleAddModule}
              >
                Add
              </button>
            </div>
          </div>
          <textarea
            value={module.description}
            className="form-control"
            style={{
              width: "400px",
            }}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
          />
        </li>

        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li
              key={index}
              className="list-group-item rounded-0"
              style={{ padding: "0", backgroundColor: "gray" }}
            >
              <div className="d-flex align-items-center ms-2 mt-2">
                <FaBars className="me-2" />
                <h3>{module.name}</h3>
                <div className="ms-auto">
                  <button
                    className="btn btn-primary ms-2"
                    style={{
                      backgroundColor: "red",
                      border: "none",
                      color: "white",
                      padding: "5px 10px",
                    }}
                    onClick={() => handleDeleteModule(module._id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-primary ms-2 me-1"
                    style={{
                      backgroundColor: "green",
                      border: "none",
                      color: "white",
                      padding: "5px 10px",
                    }}
                    onClick={() => dispatch(setModule(module))}
                  >
                    Edit
                  </button>

                  <FaCheckCircle className="me-2 text-success" />
                  <FaPlus className="me-2" />
                  <FaEllipsisV />
                </div>
              </div>
              <p className="ms-4">{module.description}</p>
              {module.lessons && (
                <ul className="list-group">
                  {module.lessons.map((lesson, index) => (
                    <li key={index} className="list-group-item rounded-0">
                      <div className="d-flex align-items-center">
                        <FaBars className="me-2" />
                        <h4>{lesson.name}</h4>
                        <div className="ms-auto">
                          <FaCheckCircle className="me-2 text-success" />
                          <FaEllipsisV />
                        </div>
                      </div>
                      <p className="ms-4">{lesson.description}</p>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </ul>
  );
}
export default ModuleList;
