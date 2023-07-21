import PlayerRow from "./PlayerRow"

const ShowPlayers = ({ playerList, showPlayerData }) => {
    return (
        <div className="table-container">
            <h5>Click on a row to view that player's information</h5>
            <table className="table table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Player ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Team</th>
                    </tr>
                </thead>
                <tbody>
                    {playerList ? playerList.map(player => {
                        return <PlayerRow entry={player} showPlayerData={showPlayerData}/>
                    }) : null}
                </tbody>
            </table>

        </div>
    )
}

export default ShowPlayers