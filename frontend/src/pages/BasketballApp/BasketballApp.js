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
        setShowPlayerInfo(true)
        setShowPlayers(false)
    }

    const showTeamData = async (id) => {
        const team = await basketballService.getTeamData(id)
        setData(team.data)
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

            {firstSelection && (showPlayers ? <ShowPlayers playerList={playerList} showPlayerData={showPlayerData} /> : <ShowTeams teamList={teamList} showTeamData={showTeamData} />)}

            {showPlayerInfo ? <PlayerDetails data={data} showFunction={getPlayerNames} /> : null}
            {showTeamInfo ? <TeamDetails data={data} showFunction={getTeamNames} /> : null}
        </div>
    )
}

const TeamDetails = ({ data, showFunction }) => {
    return (
        <div className="table-container">
            <button className="btn btn-lg text-center" onClick={showFunction} ><span><i className="arrow left" ></i></span>-Go back</button><br />
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Name</th>
                        <td>{data.full_name}</td>
                    </tr>
                    <tr>
                        <th scope="row">ID</th>
                        <td>{data.id}</td>
                    </tr>
                    <tr>
                        <th scope="row">Abbreviation</th>
                        <td>{data.abbreviation}</td>
                    </tr>
                    <tr>
                        <th scope="row">City</th>
                        <td>{data.city}</td>
                    </tr>
                    <tr>
                        <th scope="row">Conference</th>
                        <td>{data.conference}</td>
                    </tr>
                    <tr>
                        <th scope="row">Division</th>
                        <td>{data.division}</td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}
export default BasketballApp