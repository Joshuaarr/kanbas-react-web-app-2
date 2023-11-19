import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { FaInbox } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { BsFillQuestionCircleFill } from "react-icons/bs";

import "./index.css";
function KanbasNavigation() {
  const links = [
    "Account",
    "Dashboard",
    "Courses",
    "Calendar",
    "Inbox",
    "History",
    "Studio",
    "Commons",
    "Help",
  ];

  const linkToIconMap = {
    Account: <BiUserCircle className="wd-icon" />,
    Dashboard: <RiDashboard3Fill className="wd-icon" />,
    Courses: <FaBook className="wd-icon" />,
    Calendar: <BsFillCalendar2WeekFill className="wd-icon" />,
    Inbox: <FaInbox className="wd-icon" />,
    History: <FaHistory className="wd-icon" />,
    Studio: <FaDesktop className="wd-icon" />,
    Commons: <FaSignOutAlt className="wd-icon" />,
    Help: <BsFillQuestionCircleFill className="wd-icon" />,
  };

  const { pathname } = useLocation();
  return (
    <div className="list-group wd-kanbas-navigation" style={{ width: 80 }}>
      <a
        href="https://www.northeastern.edu/"
        className="list-group-item fs-1 text-danger"
      >
        <h2>N</h2>
      </a>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {linkToIconMap[link]}
          <br />
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;
