const BookRow = ({entry}) => {
    return(
        <tr>
            <td>{entry.id}</td>
            <td>{entry.title}</td>
            <td>{entry.subTitle}</td>
            <td>{entry.author}</td>
        </tr>
    )
}

export default BookRow