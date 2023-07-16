import BookRow from "./BookRow"

const BookList = ({ data }) => {
    return (
        <table className="table">
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
                    return <BookRow entry={object} />
                })}
            </tbody>
        </table>
    )
}

export default BookList