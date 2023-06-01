import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import T from "./T.png";
import "./Header.css";
import { BsCart3 } from "react-icons/bs";
export default function Header() {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <Link to="/">
              <img src={T} style={{ width: "100px" }} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="">Introduce</Nav.Link>
              <NavDropdown title="Colections" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Bouquets</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">Flower Box</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Flower vase</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action3">
                  Basket of Flowers
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Congratulations Flowers
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action2">Abouts</Nav.Link>
              <Nav.Link href="#action2">Contact</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
          <BsCart3 />
        </Container>
      </Navbar>
    </header>
  );
}
