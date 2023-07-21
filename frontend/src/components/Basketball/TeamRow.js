const TeamRow = ({ entry, showTeamData }) => {
    return (
        <tr onClick={() => showTeamData(entry.id)}>
            <td>{entry.id}</td>
            <td>{entry.name}</td>
            <td>{entry.conference}</td>
        </tr>
    )
}

export default TeamRow