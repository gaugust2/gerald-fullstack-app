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
            setShowAverage(false)

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
        setShowAverage(false)

    }

    const showTeamData = async (id) => {
        const team = await basketballService.getTeamData(id)
        setData(team.data)
        setFirstSelection(false)
        setShowTeamInfo(true)
    }

    const showPlayerAverage = async (event,object) => {
        event.preventDefault()
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
            <br /><br />
            {firstSelection && (showPlayers ? <ShowPlayers playerList={playerList} showPlayerData={showPlayerData} /> : <ShowTeams teamList={teamList} showTeamData={showTeamData} />)}

            {showPlayerInfo ? <PlayerDetails data={data} showFunction={getPlayerNames} showAverage={showPlayerAverage} /> : null}
            {showTeamInfo ? <TeamDetails data={data} showFunction={getTeamNames} /> : null}
            {showAverage ? <PlayerAverage data={data.data[0]} showFunction={showPlayerData} handleYearChange={handleYearChange} showPlayerAverage={showPlayerAverage} year={year}/> : null}
        </div>
    )
}
//<PlayerAverage data={data.data[0]}/>
const PlayerAverage = ({ data, showFunction, handleYearChange, showPlayerAverage, year }) => {
    const object = {
        season:parseInt(year),
        id1:data.player_id,
        name:data.name
    }

    return (
        <div className="table-container">
            <button className="btn btn-lg text-center" onClick={() => showFunction(data.player_id)} ><span><i className="arrow left" ></i></span>-Go back</button><br />
            <form className="basketball-form" onSubmit={(event) => showPlayerAverage(event,object)}>
                <label>Enter a year to view those Season Averages</label>
                <input type="text" placeholder="year" onChange={handleYearChange} defaultValue={2022}/>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form><br/>
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
                        <td>{data.name}</td>
                    </tr>
                    <tr>
                        <th scope="row">G</th>
                        <td>{data.games_played}</td>
                    </tr>
                    <tr>
                        <th scope="row">MP</th>
                        <td>{data.min}</td>
                    </tr>
                    <tr>
                        <th scope="row">FGM</th>
                        <td>{data.fgm}</td>
                    </tr>
                    <tr>
                        <th scope="row">FGA</th>
                        <td>{data.fga}</td>
                    </tr>
                    <tr>
                        <th scope="row">FG3N)</th>
                        <td>{data.fg3m}</td>
                    </tr>
                    <tr>
                        <th scope="row">FG3A</th>
                        <td>{data.fg3a}</td>
                    </tr>
                    <tr>
                        <th scope="row">FTM</th>
                        <td>{data.ftm}</td>
                    </tr>
                    <tr>
                        <th scope="row">FTA</th>
                        <td>{data.fta}</td>
                    </tr>
                    <tr>
                        <th scope="row">OREB</th>
                        <td>{data.oreb}</td>
                    </tr>
                    <tr>
                        <th scope="row">DREB</th>
                        <td>{data.dreb}</td>
                    </tr>
                    <tr>
                        <th scope="row">REB</th>
                        <td>{data.reb}</td>
                    </tr>
                    <tr>
                        <th scope="row">AST</th>
                        <td>{data.ast}</td>
                    </tr>
                    <tr>
                        <th scope="row">STL</th>
                        <td>{data.stl}</td>
                    </tr>
                    <tr>
                        <th scope="row">BLK</th>
                        <td>{data.blk}</td>
                    </tr>
                    <tr>
                        <th scope="row">TOV</th>
                        <td>{data.turnover}</td>
                    </tr>
                    <tr>
                        <th scope="row">PF</th>
                        <td>{data.pf}</td>
                    </tr>
                    <tr>
                        <th scope="row">PPG</th>
                        <td>{data.pts}</td>
                    </tr>
                    <tr>
                        <th scope="row">FG%</th>
                        <td>{data.fg_pct}</td>
                    </tr>
                    <tr>
                        <th scope="row">FG3%</th>
                        <td>{data.fg3_pct}</td>
                    </tr>
                    <tr>
                        <th scope="row">FT%</th>
                        <td>{data.ft_pct}</td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}


export default BasketballApp