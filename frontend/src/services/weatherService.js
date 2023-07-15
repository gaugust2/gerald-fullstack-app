import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/weather'

const getData = (name) => {
    return axios.get(`${baseUrl}/${name}`)
  }

export default {getData}