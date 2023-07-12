import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'
import Home from './pages/Home'


const App = () => {

  const padding = {
    padding: 5
  }

  return (
    <Router>
      <div>
        <Link style={padding} to="/">Home</Link>
        <Link style={padding} to="/notes">notes</Link>
        <Link style={padding} to="/users">users</Link>
      </div>

      <Routes>
        <Route path="/notes" element={<h2>hello notes</h2>} />
        <Route path="/users" element={<h2>hello users</h2>} />
        <Route path="/" element={<Home/>} />
      </Routes>

      <div>
        <a href="https://github.com/gaugust2">Github</a>
        <a href="https://www.linkedin.com/in/gerald-augustinepillai-8b3832260">Linkedin</a>
      </div>
    </Router>
  )
}

export default App