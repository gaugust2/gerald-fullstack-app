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

export default PlayerAverage