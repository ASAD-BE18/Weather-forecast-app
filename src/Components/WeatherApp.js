import { Navbar, Nav, Button } from "react-bootstrap";
import { BrowserRouter as Router, Link, Switch, Redirect ,Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Home";
import SignUp from "./RegistrationForm";
import About from "./About";
import "bootstrap/dist/css/bootstrap.min.css";

export default function WeatherApp(props) {
  return (
    <Router>
      <Navbar bg="dark" className="p-2" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/home">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Button className="mr-2" as={Link} to="/signup">
            Sign Up for Newsletter
          </Button>
        </Nav>
      </Navbar>
      <Switch>
        <Redirect from="/react-weather-app" to='/' />
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}
