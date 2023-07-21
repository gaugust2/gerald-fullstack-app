import './BasketballApp.css'
import { useState } from 'react'
import basketballService from '../../services/basketballService'
import ShowPlayers from '../../components/Basketball/ShowPlayers'
import ShowTeams from '../../components/Basketball/ShowTeams'
import PlayerDetails from '../../components/Basketball/PlayerDetails'

const BasketballApp = () => {
    const [playerName, setPlayerName] = useState('')
    //const [teamName, setTeamName] = useState('')
    const [playerList, setPlayerList] = useState('')
    const [teamList, setTeamList] = useState('')
    const [firstSelection, setFirstSelection] = useState(false)
    const [showPlayers, setShowPlayers] = useState(true)
    const [showPlayerInfo, setShowPlayerInfo] = useState(false)
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

            basketballService.getPlayerNames(playerName)
                .then(response => {
                    console.log(response.data)
                    setPlayerList(response.data)
                })
        } else setFirstSelection(false)
    }

    const getTeamNames = (event) => {
        setFirstSelection(true)
        event.preventDefault()
        setShowPlayers(false)

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
        setShowPlayers(false)
    }

    const showTeamData = async(id) => {
        
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

            {firstSelection && (showPlayers ? <ShowPlayers playerList={playerList} showPlayerData={showPlayerData} /> : <ShowTeams teamList={teamList} showTeamData={showTeamData}/>)}

            {showPlayerInfo ? <PlayerDetails data={data} showFunction={getPlayerNames} /> : null}
        </div>
    )
}

export default BasketballApp