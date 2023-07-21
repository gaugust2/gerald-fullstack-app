import TeamRow from "./TeamRow"

const ShowTeams = ({ teamList, showTeamData }) => {
    return (
        <div className="table-container">
            <h5>Click on a row to view that team's information</h5>
            <table className="table table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Team ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Division</th>
                    </tr>
                </thead>
                <tbody>
                    {teamList ? teamList.map(team => {
                        return <TeamRow entry={team} showTeamData={showTeamData}/>
                    }) : null}
                </tbody>
            </table>

        </div>
    )
}

export default ShowTeams