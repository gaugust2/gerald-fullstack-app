const ShowTeams = ({teamList}) => {
    return(
        <div>
            {teamList ? teamList.map(team => {
                return(
                    <div>
                        {team.id} {team.name} {team.conference}
                    </div>
                )
            }) : null}
        </div>
    )
}

export default ShowTeams