import {Navbar, Container, Nav, Offcanvas, Figure} from 'react-bootstrap';
import drift from '../assets/Drift.jpg';

function HomePage() {
    return (
        <div>
        <Figure.Image src={drift}
      width={970}
      height={250}
      />
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Cars</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Nissan GTRs</Nav.Link>
                <Nav.Link href="/Supras">Toyota Supras</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      </div>
    );
}

export default HomePage;