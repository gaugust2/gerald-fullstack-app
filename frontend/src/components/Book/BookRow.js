const BookRow = ({ entry, handleShow }) => {
    return (
        <tr onClick={() => handleShow(entry.id)}>
            <td>{entry.id}</td>
            <td>{entry.title}</td>
            <td>{entry.subTitle}</td>
            <td>{entry.author}</td>
        </tr>
    )
}

export default BookRow