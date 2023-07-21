import './BasketballApp.css'
import { useState } from 'react'
import basketballService from '../../services/basketballService'
import ShowPlayers from '../../components/Basketball/ShowPlayers'
import ShowTeams from '../../components/Basketball/ShowTeams'

const BasketballApp = () => {
    const [playerName, setPlayerName] = useState('')
    //const [teamName, setTeamName] = useState('')
    const [playerList, setPlayerList] = useState('')
    const [teamList, setTeamList] = useState('')
    const [firstSelection, setFirstSelection] = useState(false)
    const [showPlayers, setShowPlayers] = useState(true)
    const [data, setData] = useState('')

    const handlePlayerChange = (event) => {
        setPlayerName(event.target.value)
    }

    /*const handleTeamChange = (event) => {
        setTeamName(event.target.value)
    }*/

    const getPlayerNames = (event) => {
        event.preventDefault()
        setFirstSelection(true)
        setShowPlayers(true)

        basketballService.getPlayerNames(playerName)
        .then(response => {
            console.log(response.data)
            setPlayerList(response.data)
        })
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

    const getPlayerData = id => {
        basketballService.getPlayerData(id)
        .then(response => {
            console.log(response.data)
            setData(response.data)
        })
    }

    return (
        <div className="root-div-basketball">
            <h1>Welcome to my Basketball App</h1>
            <button class="btn btn-lg text-center"><span><i class="arrow left" ></i></span>-Go back</button><br/>
            <label>Search for either a player or get a full list of current NBA teams:</label>
            <form className="basketball-form" onSubmit={getPlayerNames}>
                <input type="text" placeholder="player" onChange={handlePlayerChange}/>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <button type="submit" className="btn btn-primary" onClick={getTeamNames}>Get all teams</button>

            {firstSelection && (showPlayers ? <ShowPlayers playerList={playerList}/>: <ShowTeams teamList={teamList}/>)}

        </div>
    )
}

export default BasketballApp