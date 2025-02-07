import { Container, Dropdown } from "react-bootstrap";
import { Grid, Grid3x3 } from "react-bootstrap-icons";

const GenreBar = function (props) {
  return (
    <Container fluid className="d-flex px-4 justify-content-between align-items-center" data-bs-theme="dark">
      <div className="d-flex">
        <p className="mb-4 text h2">{props.title}</p>
        <Dropdown className="dropdown ms-4">
          <Dropdown.Toggle variant="" id="dropdown-genres">
            Genres
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Comedy</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Drama</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="d-flex align-items-center">
        <Grid className="icons" />
        <Grid3x3 className="icons" />
      </div>
    </Container>
  );
};

export default GenreBar;
