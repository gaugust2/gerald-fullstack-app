import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/basketball'

const getPlayerNames = input => {
    return axios.get(`${baseUrl}/names/${input}`)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {getPlayerNames}