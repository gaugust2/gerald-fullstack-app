import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {
  BrowserRouter as Router,
  Routes, Route, Link, Navigate
} from 'react-router-dom'

import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import WeatherApp from './pages/WeatherApp/WeatherApp'
import Footer from './components/Footer/Footer'
import BookApp from './pages/BookApp/BookApp'
import About from './pages/About/About'
import BasketballApp from './pages/BasketballApp/BasketballApp';
import './App.css'

const App = () => {
  return (
    <Router>
      <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/"><div className="navbar-text">Home</div></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/projects"><div className="navbar-text">Projects</div></Nav.Link>
            <Nav.Link as={Link} to="/about"><div className="navbar-text">About</div></Nav.Link>
          </Nav>
        </Container>
      </Navbar>


        <Routes>
          <Route path="/bookapp" element={<BookApp/>}/>
          <Route path="/weatherapp" element={<WeatherApp/>}/>
          <Route path="/projects" element={<Projects/>} />
          <Route path="/basketballapp" element={<BasketballApp/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to='/' replace />} />
        </Routes>
        <Footer/>
    </Router>
  )
}

export default App