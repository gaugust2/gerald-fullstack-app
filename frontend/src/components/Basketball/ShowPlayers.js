const ShowPlayers = ({playerList}) => {
    return(
        <div>
            {playerList ? playerList.map(player => {
                return(
                    <div>
                        {player.id} {player.name} {player.team}
                    </div>
                )
                }) : null}
        </div>
    )
}

export default ShowPlayers