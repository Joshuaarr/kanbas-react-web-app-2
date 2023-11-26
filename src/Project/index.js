import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import SignIn from "./users/signin";

function Project() {
  const [key, setKey] = useState("home");

  return (
    <div className="container-fluid">
      <h1>Project</h1>
      <div className="row">
        <div className="col-2">
          <div className="list-group">
            <Link to="/project/" className="list-group-item">
              Home
            </Link>
            <Link to="/project/signin" className="list-group-item">
              Signin
            </Link>
            <Link to="/project/signup" className="list-group-item">
              Signup
            </Link>
            <Link to="/project/account" className="list-group-item">
              Account
            </Link>
            <Link to="/project/search" className="list-group-item">
              Search
            </Link>
            <Link to="/project/users" className="list-group-item">
              Users
            </Link>
          </div>
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Project;
