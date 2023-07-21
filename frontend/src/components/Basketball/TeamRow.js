const TeamRow = ({ entry }) => {
    return (
        <tr>
            <td>{entry.id}</td>
            <td>{entry.name}</td>
            <td>{entry.conference}</td>
        </tr>
    )
}

export default TeamRow