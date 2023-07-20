import './About.css'

const About = () => {
    return (
        <div className="root-div-about">
            <h2>About me:</h2>
            <p>Hi, my name is Gerald Augustinepillai.
                <br/>I'm a Software Engineering student at the University of Western Ontario, going into my fourth year.
                <br/></p>
            <p>I've been interested in coding and STEM since I was 12 years old, when I joined a robotics camp 
                hosted at a local highschool. Seeing my inventions crawl <br/>to life brought a level of satisfaction and joy,
                and that's a big part of the reason why I'm still coding to this day.<br/></p>
            <p>This website is one of my first major personal projects. I plan on updating and adding to it for as long as possible,
                until I run out of ideas or move on to a new website. 
                Credit goes to <a href="https://fullstackopen.com/en/" rel="noopener noreferrer" target="_blank">
                    Full Stack Open</a>, as it was
                my main resource for learning how to build this website. 
                <br/></p>
            <p>I am looking for Fall coops/internships to further my experience and skills. I am currently working as a Database Administrator 
                at Southside@Main in Milton, Ontario. I can be reached at a.gerald.2002@gmail.com</p>


            <h2>Future Projects/Goals/Additions:</h2>
            <ul>
                <li>Creating tests for frontend and backend</li>
                <li>Making a mobile-friendly UI</li>
                <li>Remaking this website in TypeScript</li>
                <li>Learning and using React Native</li>
                <li>Using Django/Spring to make an app</li>
            </ul>

            <h2>Technologies I used:</h2>
            <h5><u>Frontend</u></h5>
            <ul>
                <li>ReactJS</li>
                <li>Bootstrap/React-Bootstrap</li>
                <li>Axios</li>
            </ul>
            <h5><u>Backend</u></h5>
            <ul>
                <li>NodeJS</li>
                <li>Express</li>
                <li>MongoDB(no functionality yet)</li>
                <li>Postman(for testing)</li>
            </ul>
            <h5><u>Web hosting</u></h5>
            <ul>
                <li>Images stored on Amazon S3 bucket</li>
                <li>Web app hosted on <a href="https://render.com/" target="_blank" rel="noopener noreferrer">Render</a> at <a href="https://gerald-fullstack-app.onrender.com/" target="_blank" rel="noopener noreferrer">https://gerald-fullstack-app.onrender.com/</a></li>
                <li>Web app also hosted on <a href="https://aws.amazon.com/ec2/" target="_blank" rel="noopener noreferrer">Amazon EC2</a> at <a href="http://ec2-3-131-46-221.us-east-2.compute.amazonaws.com" target="_blank" rel="noopener noreferrer">http://ec2-3-131-46-221.us-east-2.compute.amazonaws.com</a></li>
            </ul>

            <h2>Resources:</h2>
            <ul>
                <li>Weather App data: <a href="https://openweathermap.org/" target="_blank" rel="noopener noreferrer">OpenWeatherMap</a></li>
                <li>Book App data: <a href="https://developers.google.com/books" target="_blank" rel="noopener noreferrer">Google Books API</a></li>
                <li>Learning Material: <a href="https://fullstackopen.com/en/" rel="noopener noreferrer" target="_blank">Full Stack Open</a></li>
            </ul>
        </div>
    )
}

export default About