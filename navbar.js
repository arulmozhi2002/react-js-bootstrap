import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar  className="navbar" expand="lg">
      <Container>
        <h4 className='head'>GP</h4>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="header">
            <Nav.Link href="#home"><a>Home</a></Nav.Link>
            <Nav.Link href="#link"><a>About</a></Nav.Link>
            <Nav.Link href="#link"><a>Services</a></Nav.Link>
            <Nav.Link href="#link"><a>Portfolio</a></Nav.Link>
            
            <Nav.Link href="#link"><a>Team</a></Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Drop down</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Drop Down
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Drop Down</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Drop down
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
          <button className='button'>Get Started</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;