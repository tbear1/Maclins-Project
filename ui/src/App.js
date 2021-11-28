import {Navbar, Container, Nav, Offcanvas, Image, Figure} from 'react-bootstrap';
import './App.css';
import {Route} from 'react-router-dom';
import drift from './Drift.jpg';
import Supras from './toyota-supras/Supras';

/* const routes=[
  {
    path:'Toyotas',
    component: Supras
  }
] */

function App() {
  return (
    <div className="App">
      <Figure.Image src={drift}
      width={970}
      height={250}
      />
      <Navbar bg="light" expand={false}>
  <Container fluid>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Cars</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="#action1">Nissan GTRs</Nav.Link>
          <Nav.Link href="/Supras">Toyota Supras</Nav.Link>
          <Route exact path="/Supras" component={Supras} />
          </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
    </div>
  );
}

export default App;
