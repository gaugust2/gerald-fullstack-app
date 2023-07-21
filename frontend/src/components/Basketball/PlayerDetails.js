const PlayerDetails = ({ data }) => {
    return (
        <div className="table-container">
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
        </div>
    )
}

export default PlayerDetails