import './BookApp.css'
import { useState } from 'react'
import bookService from '../../services/bookService'
import BookList from '../../components/Book/BookList'
import { Modal, Button } from "react-bootstrap";

const BookApp = () => {
    const [titleName, setTitleName] = useState('')
    const [authorName, setAuthorName] = useState('')
    const [searchData, setSearchData] = useState('')
    const [show, setShow] = useState(false)
    const [data, setData] = useState('default')

    const handleTitleChange = (event) => {
        setTitleName(event.target.value)
    }

    const handleAuthorChange = (event) => {
        setAuthorName(event.target.value)
    }

    const showTitles = (event) => {
        event.preventDefault()

        const query = {
            title: titleName,
            author: authorName
        }

        bookService.getBooks(query)
            .then(response => {
                console.log(response.data)
                setSearchData(response.data)
            })
    }



    const handleShow = (id) => {
        setShow(true)
        bookService.getData(id)
        .then(response => {
            console.log(response.data)
            setData(response.data)
        })
    }

    const handleClose = () => setShow(false)

    return (
        <div className="root-div-books">
            <form onSubmit={showTitles}>
                <h1>Welcome to my Book App</h1>
                <p>Search for a book or an author, or even both!</p>
                <label>Search for books: </label>
                <input type="text" placeholder="title" onChange={handleTitleChange}></input>
                <input type="text" placeholder="author" onChange={handleAuthorChange}></input>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {searchData ? <BookList data={searchData} handleShow={handleShow} /> : null}

            {show && <BookModal show={show} handleClose={handleClose} data={data}/>}
        </div>
    )
}

const BookModal = ({ show, handleClose, data }) => {
    return (
        <div>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{data.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {data.subTitle}<br/>
                    {data.author}<br/>
                    {data.publisher}<br/>
                    Published Date:{data.publishedDate}<br/>
                    <br/>Description:<br/>{data.description}<br/>
                    <br/>Page count: {data.pageCount}<br/>
                    {data.genres}<br/>
                    <br/>Average rating: {data.averageRating}<br/>
                    Number of ratings: {data.ratingsCount}<br/>
                    Maturity Rating: {data.maturityRating}<br/>
                    Language: {data.language}




                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}



export default BookApp