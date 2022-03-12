import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Appbar } from "./Appbar";
import { Sidebar } from "./Sidebar";
import { Events } from "./Events";

export default function App() {
  const [showsidebar, setshowsidebar] = useState(false);
  console.log(showsidebar);
  return (
    <Router>
      <div className="App">
        {showsidebar === false ? (
          ""
        ) : (
          <Sidebar showsidebar={showsidebar} setshowsidebar={setshowsidebar} />
        )}
        <Appbar showsidebar={showsidebar} setshowsidebar={setshowsidebar} />

        <Switch>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/teams"></Route>
        </Switch>
      </div>
    </Router>
  );
}
