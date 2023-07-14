import './MiniProjects.css'

const MiniProjects = () => {
    return (
        <div className="root-div">
            <h3>This is a list of all the little backend projects I have worked on so far:</h3>

            <div class="row justify-content-around">
                <div class="col-sm-5">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Weather app</h4>
                            <p class="card-text">Weather body</p>
                        </div>
                        <img class="card-img-bottom" src="https://sample-fullstack-bucket.s3.us-east-2.amazonaws.com/242277.jpg" alt="Card cap"></img>
                    </div>
                </div>
                <div class="col-sm-5">
                    <div class="card">
                        <div class="card-body">

                            <h5 class="card-title">Book app</h5>
                            <h4>Book body</h4>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MiniProjects