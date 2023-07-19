import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {
  BrowserRouter as Router,
  Routes, Route, Link, Navigate
} from 'react-router-dom'

import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects';
import WeatherApp from './pages/WeatherApp/WeatherApp';
import Footer from './components/Footer/Footer';
import BookApp from './pages/BookApp/BookApp';

const App = () => {
  return (
    <Router>
      <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="users">Users</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


        <Routes>
          <Route path="/bookapp" element={<BookApp/>}/>
          <Route path="/weatherapp" element={<WeatherApp/>}/>
          <Route path="/projects" element={<Projects/>} />
          <Route path="/users" element={<h2>hello users</h2>} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to='/' replace />} />
        </Routes>
        <Footer/>
    </Router>
  )
}

export default App