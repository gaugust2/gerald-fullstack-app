import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/books'

const getBooks = object => {
    return axios.post(`${baseUrl}/names`, object)
}

const getData = id => {
    return axios.get(`${baseUrl}/${id}`)
}

export default {getBooks, getData}