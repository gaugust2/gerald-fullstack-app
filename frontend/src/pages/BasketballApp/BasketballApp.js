import './BasketballApp.css'
import { useState } from 'react'
import basketballService from '../../services/basketballService'
import ShowPlayers from '../../components/Basketball/ShowPlayers'
import ShowTeams from '../../components/Basketball/ShowTeams'
import PlayerDetails from '../../components/Basketball/PlayerDetails'
import TeamDetails from '../../components/Basketball/TeamDetails'

const BasketballApp = () => {
    const [playerName, setPlayerName] = useState('')
    //const [teamName, setTeamName] = useState('')
    const [playerList, setPlayerList] = useState('')
    const [teamList, setTeamList] = useState('')
    const [firstSelection, setFirstSelection] = useState(false)
    const [showPlayers, setShowPlayers] = useState(true)
    const [showPlayerInfo, setShowPlayerInfo] = useState(false)
    const [showTeamInfo, setShowTeamInfo] = useState(false)
    const [data, setData] = useState('default')

    const handlePlayerChange = (event) => {
        setPlayerName(event.target.value)
    }

    /*const handleTeamChange = (event) => {
        setTeamName(event.target.value)
    }*/

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
        setShowTeamInfo(false)
        setShowPlayerInfo(true)

    }

    const showTeamData = async (id) => {
        const team = await basketballService.getTeamData(id)
        setData(team.data)
        setShowPlayerInfo(false)
        setFirstSelection(false)
        setShowTeamInfo(true)
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

            {showPlayerInfo ? <PlayerDetails data={data} showFunction={getPlayerNames} /> : null}
            {showTeamInfo ? <TeamDetails data={data} showFunction={getTeamNames} /> : null}
        </div>
    )
}

export default BasketballApp