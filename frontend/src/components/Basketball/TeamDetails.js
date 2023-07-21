const TeamDetails = ({ data, showFunction }) => {
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
                        <th scope="row">Name</th>
                        <td>{data.full_name}</td>
                    </tr>
                    <tr>
                        <th scope="row">ID</th>
                        <td>{data.id}</td>
                    </tr>
                    <tr>
                        <th scope="row">Abbreviation</th>
                        <td>{data.abbreviation}</td>
                    </tr>
                    <tr>
                        <th scope="row">City</th>
                        <td>{data.city}</td>
                    </tr>
                    <tr>
                        <th scope="row">Conference</th>
                        <td>{data.conference}</td>
                    </tr>
                    <tr>
                        <th scope="row">Division</th>
                        <td>{data.division}</td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}

export default TeamDetails