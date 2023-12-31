import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/basketball'

const getPlayerNames = input => {
    return axios.get(`${baseUrl}/names/${input}`)
}

const getTeamNames = () => {
    return axios.get(`${baseUrl}/teams`)
}

const getPlayerData = id => {
    return axios.get(`${baseUrl}/player/${id}`)
}

const getTeamData = id => {
    return axios.get(`${baseUrl}/teams/${id}`)
}

const getPlayerAverage = object => {
    return axios.post(`${baseUrl}/averages`,object)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {getPlayerNames, getTeamNames, getPlayerData, getTeamData, getPlayerAverage}