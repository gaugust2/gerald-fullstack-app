import axios from 'axios'
const baseUrl = '/api/weather'

const getData = (name) => {
    return axios.get(`${baseUrl}/${name}`)
  }

// eslint-disable-next-line import/no-anonymous-default-export
export default {getData}