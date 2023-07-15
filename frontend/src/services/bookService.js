import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/books'

const getBooks = object => {
    return axios.post(`${baseUrl}/names`, object)
}

export default {getBooks}