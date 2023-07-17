import { Modal, Button } from "react-bootstrap"

const BookModal = ({ show, handleClose, data }) => {
    return (
        <div>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{data.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {data.imageLink && <img className="modal-image" alt="Book Cover" src={data.imageLink}></img>}
                    {data.subTitle && <div>{data.subTitle}</div>}
                    <b>Author: </b>{data.author}<br />
                    <b>Publisher: </b>{data.publisher}<br />
                    <b>Published Date: </b>{data.publishedDate}<br />
                    <div className="modal-description"><br /><b>Description:</b><br />{removeHtmlTags(data.description)}<br /></div>
                    <br /><b>Page count: </b>{data.pageCount}
                    {data.genres && <div><b>Genres: </b>{data.genres.map((category, index) => (<div key={index}>{category}</div>))}</div>}<br />
                    <br /><b>Average rating: </b>{data.averageRating}<br />
                    <b>Number of ratings: </b>{data.ratingsCount}<br />
                    <b>Maturity Rating: </b>{data.maturityRating}<br />
                    <b>Language: </b>{data.language}
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

//The descriptions sometimes have HTML tags embedded in the text
//This function will remove those tags
const removeHtmlTags = (string) => {
    const parser = new DOMParser()
    const parsedHtml = parser.parseFromString(string, 'text/html')
    return parsedHtml.body.textContent
};





export default BookModal