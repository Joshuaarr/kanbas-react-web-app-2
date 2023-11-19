import React from "react";
import "./index.css";
import {
  FaBars,
  FaBan,
  FaCheckCircle,
  FaFileImport,
  FaCircle,
  FaCalendar,
} from "react-icons/fa";

function ClassStatus() {
  return (
    <div class="d-none d-xl-block d-xxl-block">
      <h5>Course Status</h5>
      <div class="d-flex flex-row">
        <button
          className="btn-secondary"
          style={{
            width: "140px",
            height: "40px",
            color: "black",
            border: "none",
          }}
        >
          <FaBan className="me-1" />
          Unpublish
        </button>
        <button
          className="btn-secondary"
          style={{
            width: "140px",
            height: "40px",
            backgroundColor: "green",
            color: "white",
            border: "none",
          }}
        >
          <FaCheckCircle className="me-1" />
          Published
        </button>
      </div>
      <div class="mt-3">
        <button class="btn-secondary wd-kanbas course-status">
          <FaFileImport className="me-1" />
          Import Exisiting Content
        </button>
      </div>
      <div class="mt-2">
        <button class="btn-secondary wd-kanbas course-status">
          <FaFileImport className="me-1" />
          Import From Commons
        </button>
      </div>
      <div class="mt-2">
        <button class="btn-secondary wd-kanbas course-status">
          <FaFileImport className="me-1" />
          Choose Home Page
        </button>
      </div>
      <div class="mt-2">
        <button class="btn-secondary wd-kanbas course-status">
          <FaFileImport className="me-1" />
          View Course Stream
        </button>
      </div>
      <div class="mt-2">
        <button class="btn-secondary wd-kanbas course-status">
          <i class="fa fa-file-import"></i>
          New Announcement
        </button>
      </div>
      <div class="mt-2">
        <button class="btn-secondary wd-kanbas course-status">
          <FaFileImport className="me-1" />
          New Analytics
        </button>
      </div>
      <div class="mt-2">
        <button class="btn-secondary wd-kanbas course-status">
          <FaFileImport className="me-1" />
          View Course Notifications
        </button>
      </div>
      <h5 class="pt-4">To Do</h5>
      <hr />
      <div class="row pt-2">
        <div class="col-1">
          <FaCircle className="me-1" />
        </div>
        <div class="col-8">
          <span
            style={{
              color: "red",
            }}
          >
            Grade A1 - ENV + HTML
          </span>
          <br />
          100 points · Sep 18 at 11:59pm
        </div>
      </div>

      <div class="pt-4">
        <div class="float-end">
          <FaCalendar className="me-1" />
          <span
            style={{
              color: "red",
            }}
          >
            view Calendar
          </span>
        </div>
        <h5>Comming Up</h5>
        <hr />
        <div class="row pt-2">
          <div class="col-1">
            <FaCalendar className="me-1" />
          </div>
          <div class="col-8">
            <span
              style={{
                color: "red",
              }}
            >
              Lecture
            </span>
            <br />
            CS4550.12631.202410 Sep 7 at 11:45am
          </div>
        </div>
        <div class="row pt-2">
          <div class="col-1">
            <FaCalendar className="me-1" />
          </div>
          <div class="col-8">
            <span
              style={{
                color: "red",
              }}
            >
              CS4550.12631.202410 Lecture
            </span>
            <br />
            CS4550.12631.202410 Sep 11 at 11:45am
          </div>
        </div>
        <div class="row pt-2 pb-2">
          <div class="col-1">
            <FaCalendar className="me-1" />
          </div>
          <div class="col-8">
            <span
              style={{
                color: "red",
              }}
            >
              CS5610 06 - Lecture
            </span>
            <br />
            CS5610 06 SP23 Lecture Sep 11 at 6pm
          </div>
        </div>

        <div style={{ color: "red" }}>12 more in the next week...</div>
      </div>
    </div>
  );
}

export default ClassStatus;
