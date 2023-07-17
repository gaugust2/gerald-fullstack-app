import WeatherIcon from './WeatherIcon'

const WeatherData = ({ data }) => {
    return (
        <div className="weather-div">
            <div className="col-sm-5">
                <table class="table table-striped table-hover table-bg">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">City</th>
                            <td>{data.city}</td>
                        </tr>
                        <tr>
                            <th scope="row">Temperature</th>
                            <td>{data.temperature}&deg;C</td>
                        </tr>
                        <tr>
                            <th scope="row">Feels Like</th>
                            <td>{data.feelsLike}&deg;C</td>
                        </tr>
                        <tr>
                            <th scope="row">Humidity</th>
                            <td>{data.humidity} %</td>
                        </tr>
                        <tr>
                            <th scope="row">Wind Speed</th>
                            <td>{data.windSpeed} km/h</td>
                        </tr>
                    </tbody>
                </table>
                <h6>This data is retrieved from the Open Weather Map API.</h6>
            </div>
            <WeatherIcon link={data.icon}/>
        </div>
    )
}

export default WeatherData