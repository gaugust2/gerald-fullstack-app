import './BasketballApp.css'
import { useState } from 'react'
import basketballService from '../../services/basketballService'
import ShowPlayers from '../../components/Basketball/ShowPlayers'
import ShowTeams from '../../components/Basketball/ShowTeams'
import PlayerDetails from '../../components/Basketball/PlayerDetails'
import TeamDetails from '../../components/Basketball/TeamDetails'

const BasketballApp = () => {
    const [playerName, setPlayerName] = useState('')
    const [playerList, setPlayerList] = useState('')
    const [teamList, setTeamList] = useState('')
    const [firstSelection, setFirstSelection] = useState(false)
    const [showPlayers, setShowPlayers] = useState(true)
    const [showPlayerInfo, setShowPlayerInfo] = useState(false)
    const [showTeamInfo, setShowTeamInfo] = useState(false)
    const [data, setData] = useState('default')
    const [year, setYear] = useState('')
    const [showAverage, setShowAverage] = useState(false)

    const handleYearChange = (event) => {
        setYear(event.target.value)
    }

    const handlePlayerChange = (event) => {
        setPlayerName(event.target.value)
    }

    const getPlayerNames = (event) => {
        event.preventDefault()

        if (playerName) {
            setFirstSelection(true)
            setShowPlayers(true)
            setShowPlayerInfo(false)
            setShowTeamInfo(false)

            basketballService.getPlayerNames(playerName)
                .then(response => {
                    console.log(response.data)
                    setPlayerList(response.data)
                })
        } else setFirstSelection(false)
    }

    const getTeamNames = (event) => {
        event.preventDefault()

        setFirstSelection(true)
        setShowPlayers(false)
        setShowTeamInfo(false)
        setShowAverage(false)
        setShowPlayerInfo(false)

        basketballService.getTeamNames()
            .then(response => {
                console.log(response.data)
                setTeamList(response.data)
            })
    }

    const showPlayerData = async (id) => {
        const player = await basketballService.getPlayerData(id)
        setData(player.data)
        setFirstSelection(false)
        setShowPlayerInfo(true)

    }

    const showTeamData = async (id) => {
        const team = await basketballService.getTeamData(id)
        setData(team.data)
        setFirstSelection(false)
        setShowTeamInfo(true)
    }

    const showPlayerAverage = async(object) => {
        const average = await basketballService.getPlayerAverage(object)
        setData(average.data)
        setShowAverage(true)
        setShowPlayerInfo(false)
    }

    return (
        <div className="root-div-basketball">
            <h1>Welcome to my Basketball App</h1>
            <label>Search for either a player or get a full list of current NBA teams:</label>
            <form className="basketball-form" onSubmit={getPlayerNames}>
                <input type="text" placeholder="player" onChange={handlePlayerChange} />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <button type="submit" className="btn btn-primary" onClick={getTeamNames}>Get all teams</button>
            <br/><br/>
            {firstSelection && (showPlayers ? <ShowPlayers playerList={playerList} showPlayerData={showPlayerData} /> : <ShowTeams teamList={teamList} showTeamData={showTeamData} />)}

            {showPlayerInfo ? <PlayerDetails data={data} showFunction={getPlayerNames} showAverage={showPlayerAverage}/> : null}
            {showTeamInfo ? <TeamDetails data={data} showFunction={getTeamNames} /> : null}
            {showAverage ? <div>{data.data[0].games_played}</div> : null}
        </div>
    )
}



export default BasketballApp