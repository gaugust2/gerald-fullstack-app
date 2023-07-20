import './BasketballApp.css'
import { useState } from 'react'
import basketballService from '../../services/basketballService'

const BasketballApp = () => {
    const [playerName, setPlayerName] = useState('')
    const [teamName, setTeamName] = useState('')
    const [playerList, setPlayerList] = useState('')

    const handlePlayerChange = (event) => {
        setPlayerName(event.target.value)
    }

    const handleTeamChange = (event) => {
        setTeamName(event.target.value)
    }

    const getPlayerNames = (event) => {
        event.preventDefault()

        basketballService.getPlayerNames(playerName)
        .then(response => {
            console.log(response.data)
            setPlayerList(response.data)
        })
    }

    return (
        <div className="root-div-basketball">
            <h1>Welcome to my Basketball App</h1>
            <button class="btn btn-lg text-center"><span><i class="arrow left" ></i></span>-Go back</button><br/>
            <label>Search for either a player or a team:</label>
            <form className="basketball-form" onSubmit={getPlayerNames}>
                <input type="text" placeholder="player" onChange={handlePlayerChange}/>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <form className="basketball-form">
                <input type="text" placeholder="team" onChange={handleTeamChange}/>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {playerList ? playerList.map(player => {
                return(
                    <div>
                        {player.id} {player.name} {player.team}
                    </div>
                )
                }) : null}
        </div>
    )
}

export default BasketballApp