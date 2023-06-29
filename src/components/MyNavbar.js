import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function MyNavbar(props) {
  return (
    <>
      <Navbar bg={props.mode} variant={props.mode} expand="lg">
        <Container fluid>
          <Navbar.Brand to="/">{props.title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{
                maxHeight: "100px",
                display: "flex",
                justifyContent: "center",
                gap: "20px",
              }}
              navbarScroll
            >
              <Link
                to="/"
                className="hoverEffect"
                style={{
                  textDecoration: "none",
                  color: "gray",
                }}
              >
                Home
              </Link>
              <Link
                to="/about"
                style={{
                  textDecoration: "none",
                  color: "gray",
                }}
              >
                {props.aboutText}
              </Link>
            </Nav>
            <div className="d-flex">
              <div
                onClick={() => props.toggleMode("primary")}
                className="bg-primary rounded mx-2"
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
              ></div>
              <div
                onClick={() => props.toggleMode("success")}
                className="bg-success rounded mx-2"
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
              ></div>
              <div
                onClick={() => props.toggleMode("danger")}
                className="bg-danger rounded mx-2"
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
              ></div>
              <div
                onClick={() => props.toggleMode("warning")}
                className="bg-warning rounded mx-2"
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
              ></div>
              <div
                onClick={() => props.toggleMode("light")}
                className="bg-light rounded mx-2"
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
              ></div>
              <div
                onClick={() => props.toggleMode("dark")}
                className="bg-dark rounded mx-2"
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
              ></div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

MyNavbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};
MyNavbar.defaultProps = {
  title: "Title Here",
  aboutText: "About us",
};
