const PlayerDetails = ({ data,showFunction,showAverage }) => {
    const object = {
        season: 2022,
        id1: data.id,
        name: `${data.first_name} ${data.last_name}`
    }

    return (
        <div className="table-container">
            <button className="btn btn-lg text-center" onClick={showFunction} ><span><i className="arrow left" ></i></span>-Go back</button><br />
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">ID</th>
                        <td>{data.id}</td>
                    </tr>
                    <tr>
                        <th scope="row">First Name</th>
                        <td>{data.first_name}</td>
                    </tr>
                    <tr>
                        <th scope="row">Last Name</th>
                        <td>{data.last_name}</td>
                    </tr>
                    <tr>
                        <th scope="row">Height(feet)</th>
                        <td>{data.height_feet}</td>
                    </tr>
                    <tr>
                        <th scope="row">Height(inches)</th>
                        <td>{data.height_inches}</td>
                    </tr>
                    <tr>
                        <th scope="row">Weight(pounds)</th>
                        <td>{data.weight_pounds}</td>
                    </tr>
                    <tr>
                        <th scope="row">Position</th>
                        <td>{data.position}</td>
                    </tr>
                    <tr>
                        <th scope="row">Team Name</th>
                        <td>{data.team.full_name}</td>
                    </tr>
                    <tr>
                        <th scope="row">Team City</th>
                        <td>{data.team.city}</td>
                    </tr>
                    <tr>
                        <th scope="row">Conference</th>
                        <td>{data.team.conference}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => showAverage(object)}>Click to view Season Averages for 22-23</button>
        </div>
    )
}

export default PlayerDetails