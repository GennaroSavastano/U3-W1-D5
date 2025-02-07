import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Search, Bell, PersonCircle } from "react-bootstrap-icons";
import logo from "../assets/logo.png";

function TopBar() {
  return (
    <Navbar expand="lg" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home">
          <Image src={logo} style={{ width: "100px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Tv Shows</Nav.Link>
            <Nav.Link href="#link">Movies</Nav.Link>
            <Nav.Link href="#link">Recently Added</Nav.Link>
            <Nav.Link href="#link">My List</Nav.Link>
          </Nav>
          <Nav className="d-flex align-items-center">
            <Search className="icons" />
            <Nav.Link href="#link">KIDS</Nav.Link>
            <Bell className="icons" />
            <PersonCircle className="icons" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopBar;

{
  /* <NavDropdown title="babbonatale" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */
}
