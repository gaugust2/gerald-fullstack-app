const PlayerRow = ({entry}) => {
    return(
        <tr>
            <td>{entry.id}</td>
            <td>{entry.name}</td>
            <td>{entry.team}</td>
        </tr>
    )
}

export default PlayerRow