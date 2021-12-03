
import './App.css';
import { Route, Routes } from 'react-router-dom';
import {Navbar, Container, Nav} from 'react-bootstrap';
import HomePage from './pages/HomePage';
import Supras from './pages/Supras';
import Nissan from './pages/Nissan';

function App() {
  return (
    <div>
      <Navbar bg="light" expand={"lg"} className="navbar">
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/gtrs">Nissan GTRs</Nav.Link>
                <Nav.Link href="/Supras">Toyota Supras</Nav.Link>
                <Nav.Link href="/">Home Page</Nav.Link>
              </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/supras' element={<Supras />} />
        <Route path='/gtrs' element={<Nissan />}/>

      </Routes>
      
    </div>
  );
}

export default App;
