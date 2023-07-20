import './Home.css'
import Dots from '../../components/Animations/Dots'

const Home = () => {
    return (
        <div className="home">
            <h5>Hello,</h5>
            <h4>I'm Gerald</h4>
            <h2>Welcome to the home page<Dots/></h2>
            <p>This project will have various types of interactive pages, fetching data from the backend and displaying it to the user.<br />
                The frontend is made with React and Bootstrap. The backend uses Express and MongoDB.<br />
                Check out the source code for this project <a href="https://github.com/gaugust2/gerald-fullstack-app" target="_blank" rel="noopener noreferrer">here</a>.</p>
        </div>
    )
}

export default Home