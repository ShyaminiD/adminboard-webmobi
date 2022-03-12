import EventIcon from "@mui/icons-material/Event";
import GroupsIcon from "@mui/icons-material/Groups";
import TimelineIcon from "@mui/icons-material/Timeline";
import DraftsIcon from "@mui/icons-material/Drafts";
import { Link } from "react-router-dom";
import "./App.css"

const sidebarMenulist = [
  { icon: <EventIcon />, name: "Event", link: "/events" },
  { icon: <GroupsIcon />, name: "Teams", link: "/teams" },
  { icon: <TimelineIcon />, name: "Analytics", link: "/analytics" },
  { icon: <DraftsIcon />, name: "Results", link: "/results" },
];
export function Sidebar() {
  return (
    <div className="sidebar">
      <div className="menu-box">
        <p className="menu-name">logo</p>
      </div>
      {sidebarMenulist.map((m) => (
        <SidebarMenu i={m.icon} n={m.name} l={m.link} />
      ))}
    </div>
  );
}

function SidebarMenu({ i, n, l }) {
  console.log(l);
  return (
    <Link to={l} className="links">
      <div className="menu-box">
        {i}
        <p className="menu-name">{n}</p>
      </div>
    </Link>
  );
}
