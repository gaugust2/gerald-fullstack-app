const bookRouter = require('express').Router()
const config = require('../utils/config')

bookRouter.post('/all', async (request, response) => {
    const title = request.body.title
    const author = request.body.author

    const books = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}+inauthor:${author}&printType=books&orderBy=relevance&key=${config.BOOKS_API_KEY}`)
    const bookData = await books.json()

    response.json(bookData)
})

bookRouter.post('/names', async (request, response) => {
    const title = request.body.title
    const author = request.body.author

    const books = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}+inauthor:${author}&printType=books&orderBy=relevance&key=${config.BOOKS_API_KEY}`)
    const bookData = await books.json()

    const parsed = Object.values(bookData.items)
    //const names = parsed.map(object => object.volumeInfo.title)
    //const ids = parsed.map(object => object.id)

    const objects = parsed.map(object => {
        return {
            id: object.id,
            name: object.volumeInfo.title
        }
    })
    response.json(objects)
})

bookRouter.get('/:id', async (request, response) => {
    const id = request.params.id

    const books = await fetch(`https://www.googleapis.com/books/v1/volumes/JHEkAQAAMAAJ?key=${config.BOOKS_API_KEY}`)

})



module.exports = bookRouter