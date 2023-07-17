import BookRow from "./BookRow"

const BookList = ({ data, handleShow }) => {
    return (
        <div className="table-container">
            <br/>
            <h5>Click on a row to view additional contents</h5>
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
            <h6>This data is retrieved from the Google Books API.</h6><p> Note that some of the data may be missing
                 or in an irregular format, and that only 10 relevant results are returned for each search.</p>
        </div>

    )
}

export default BookList