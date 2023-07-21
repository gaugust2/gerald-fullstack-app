const fetch = require('node-fetch')
const basketballRouter = require('express').Router()
const config = require('../utils/config')
const { response } = require('../app')

basketballRouter.get('/names/:name', async (request, response) => {
    const input = request.params.name
    const players = await fetch(`${config.BASKETBALL_LINK}/players?search=${input}`)
    const playerList = await players.json()

    const names = playerList.data.map(player => {
        return {
            id: player.id,
            name: `${player.first_name} ${player.last_name}`,
            team: player.team.full_name
        }
    })
    response.json(names)
})

basketballRouter.get('/player/:id', async (request, response) => {
    const id = request.params.id
    const data = await fetch(`${config.BASKETBALL_LINK}/players/${id}`)
    const playerData = await data.json()

    response.json(playerData)
})

basketballRouter.get('/teams', async (request, response) => {
    const data = await fetch(`${config.BASKETBALL_LINK}/teams`)
    const teamList = await data.json()

    const teamNames = teamList.data.map(team => {
        return {
            id: team.id,
            name: team.full_name,
            conference: team.conference
        }
    })

    response.json(teamNames)
})

basketballRouter.get('/teams/:id', async (request, response) => {
    const id = request.params.id
    const data = await fetch(`${config.BASKETBALL_LINK}/teams/${id}`)
    const teamData = await data.json()

    response.json(teamData)
})

basketballRouter.post('/averages', async (request, response) => {
    const season = request.body.season ? request.body.season : 2022
    const id1 = request.body.id1
    const name = request.body.name
    const id2 = request.body.id2


    const data = await fetch(`${config.BASKETBALL_LINK}/season_averages?season=${season}&player_ids[]=${id1}&player_ids[]=${id2}`)
    const averageData = await data.json()

    averageData.data[0]['name'] = name
    response.json(averageData)
})


module.exports = basketballRouter
