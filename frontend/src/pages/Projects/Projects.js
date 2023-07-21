import './Projects.css'

const Projects = () => {
    return (
        <div className="root-div-projects">
          <h3>This is a list of all the little backend projects I have worked on so far:</h3>
      
          <div className="projects-table-container">
            <table>
              <tbody>
                <tr className="projects-row">
                  <td>
                    <div className="card mb-5">
                      <a href="/weatherapp">
                        <div className="card-body">
                          <h4 className="card-title">Weather app</h4>
                          <p className="card-text">Enter the name of a city and see up-to-date weather data.
                            The icon is a visual for the weather condition.</p>
                        </div>
                        <img className="card-img-bottom" src="https://sample-fullstack-bucket.s3.us-east-2.amazonaws.com/WeatherApp-Screenshot.png" alt="Card cap" />
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className="projects-row">
                  <td>
                    <div className="card mb-5">
                      <a href="/bookapp">
                        <div className="card-body">
                          <h4 className="card-title">Book app</h4>
                          <p className="card-text">Enter a book title, author, or both, and receive up to 10 relevant results.
                            Click on one of the results to see further details.</p>
                        </div>
                        <img className="card-img-bottom" src="https://sample-fullstack-bucket.s3.us-east-2.amazonaws.com/BookApp-Screenshot.png" alt="Card cap" />
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className="projects-row">
                  <td>
                    <div className="card mb-5">
                      <a href="/basketballapp">
                        <div className="card-body">
                          <h4 className="card-title">Basketball app</h4>
                          <p className="card-text">Enter the name of an NBA player and see relevant results(including retired players), 
                          or see a list of all current NBA teams. Click on players or teams to see additional details, and view a player's 
                          season averages over the years.</p>
                        </div>
                        <img className="card-img-bottom" src="https://sample-fullstack-bucket.s3.us-east-2.amazonaws.com/BasketballApp-Screenshot.png" alt="Card cap"/>
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className="projects-row">
                  <td>
                    <div className="card mb-5">
                      <a href="/carapp">
                        <div className="card-body">
                          <h4 className="card-title">Car app</h4>
                          <p className="card-text">Coming soon</p>
                        </div>
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
      

}

export default Projects