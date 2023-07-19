const fetch = require('node-fetch')
const bookRouter = require('express').Router()
const config = require('../utils/config')

//Give list of names and ids from search parameters
bookRouter.post('/names', async (request, response) => {
    const title = request.body.title
    const author = request.body.author

    const books = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}+inauthor:${author}&printType=books&orderBy=relevance&key=${config.BOOKS_API_KEY}`)
    const bookData = await books.json()

    const parsed = Object.values(bookData.items)

    const objects = parsed.map(object => {
        return {
            id: object.id,
            title: object.volumeInfo.title,
            subTitle: object.volumeInfo.subtitle,
            author: object.volumeInfo.authors
        }
    })
    
    response.json(objects)
})

//Give singular data
bookRouter.get('/:id', async (request, response) => {
    const id = request.params.id

    const books = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}?key=${config.BOOKS_API_KEY}`)
    const bookData = await books.json()

    const object = {
        id: bookData.id,
        title: bookData.volumeInfo.title,
        subTitle: bookData.volumeInfo.subtitle,
        author: bookData.volumeInfo.authors,
        publisher: bookData.volumeInfo.publisher,
        publishedDate: bookData.volumeInfo.publishedDate,
        description: bookData.volumeInfo.description,
        pageCount: bookData.volumeInfo.pageCount,
        genres: bookData.volumeInfo.categories,
        averageRating: bookData.volumeInfo.averageRating,
        ratingsCount: bookData.volumeInfo.ratingsCount,
        maturityRating: bookData.volumeInfo.maturityRating,
        imageLink: bookData.volumeInfo.imageLinks?.thumbnail,
        language: bookData.volumeInfo.language
    }

    response.send(object)
})



module.exports = bookRouter