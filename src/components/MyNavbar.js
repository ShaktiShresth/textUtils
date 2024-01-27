import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function MyNavbar(props) {
  return (
    <>
      <Navbar expand="lg">
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
