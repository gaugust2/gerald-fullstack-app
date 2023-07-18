import axios from 'axios'
const baseUrl = '/api/books'

const getBooks = object => {
    return axios.post(`${baseUrl}/names`, object)
}

const getData = id => {
    return axios.get(`${baseUrl}/${id}`)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {getBooks, getData}