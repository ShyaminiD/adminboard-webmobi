import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
export function Events() {
  return (
    <Router>
    
        <div className="eventContent">
          <Stack direction="row" spacing={2.5}>
            <Button className="buttonmenu"><p className="buttonp">Event Settings</p></Button>
            <Divider orientation="vertical" flexItem />
            <Button className="buttonmenu"><p className="buttonp">Engage and Network</p></Button>
            <Divider orientation="vertical" flexItem />
            <Button className="buttonmenu"><p className="buttonp">Event Marketing</p></Button>
            <Divider orientation="vertical" flexItem />
            <Button className="buttonmenu"><p className="buttonp">Tickets</p></Button>
            <Divider orientation="vertical" flexItem />
            <Button className="buttonmenu"><p className="buttonp">Attendes</p></Button>
            <Divider orientation="vertical" flexItem />
            <Link to="/eventcontent" className="links">
              <Button className="buttonmenu"><p className="buttonp">Event Content</p></Button>
            </Link>
            <Divider orientation="vertical" flexItem />
            <Button className="buttonmenu"><p className="buttonp">Publish</p></Button>
          </Stack>
          <Switch>
            <Route path="/eventcontent">
              <EventContents />
            </Route>
          </Switch>
        </div>
    
    </Router>
  );
}
function EventContents() {
  return (
    <Router>
      <div className="sub-EventContents">
        <h2 className="eventcontent-heading">Event Content</h2>
        <Divider />
        <ul>
          <li>Basics</li>
          <li>Branding</li>
          <Link to="/agenda" className="links"></Link>
          <li>Agenda</li>
          <Link to="/center" className="links">
            <li>Virtual/Hybrid Center</li>
          </Link>
          <li>Speaker Center</li>
          <li>Sponsor Center</li>
        </ul>

        <Switch>
          <Route path="/center">
            <Virtual />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
function Virtual() {
  return (
    <div className="event-Virtual">
      <div className="event-Virtual1">
        <h2 className="virtual-heading">Virtual/Hybrid Center</h2>
        <CancelPresentationIcon className="closeicon" />
      </div>
      <Divider />
    </div>
  );
}
