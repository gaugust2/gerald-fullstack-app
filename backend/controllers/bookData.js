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
            name: object.volumeInfo.title,
            author: object.volumeInfo.authors[0]
        }
    })
    
    response.json(objects)
})

//Give singular data
bookRouter.get('/:id', async (request, response) => {
    const id = request.params.id

    const books = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}?key=${config.BOOKS_API_KEY}`)
    const bookData = await books.json()

    response.json(bookData)
})



module.exports = bookRouter