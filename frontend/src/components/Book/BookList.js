import BookRow from "./BookRow"

const BookList = ({ data, handleShow }) => {
    return (
        <table className="table table-hover">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Book ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Subtitle</th>
                    <th scope="col">Author</th>
                </tr>
            </thead>
            <tbody>
                {data.map(object => {
                    return <BookRow entry={object} handleShow={handleShow} />
                })}
            </tbody>
        </table>
    )
}

export default BookList