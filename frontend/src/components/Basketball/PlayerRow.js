const PlayerRow = ({entry, showPlayerData}) => {
    return(
        <tr onClick={() => showPlayerData(entry.id)}>
            <td>{entry.id}</td>
            <td>{entry.name}</td>
            <td>{entry.team}</td>
        </tr>
    )
}

export default PlayerRow