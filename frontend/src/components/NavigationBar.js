import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'

import Home from '../pages/Home/Home'
import MiniProjects from '../pages/MiniProjects/MiniProjects';

const NavigationBar = () => {
  return (
    <Router>
      <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/miniprojects">Mini Projects</Nav.Link>
            <Nav.Link as={Link} to="users">Users</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


        <Routes>
          <Route path="/miniprojects" element={<MiniProjects/>} />
          <Route path="/users" element={<h2>hello users</h2>} />
          <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  )
}

export default NavigationBar