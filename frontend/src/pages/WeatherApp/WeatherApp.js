import './WeatherApp.css'
import { useState } from 'react'
import weatherService from '../../services/weatherService'

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
            </div>
            <div className="col-sm-5 d-flex align-items-center justify-content-center">
                <img className="weather-img" src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`} alt="icon" />
            </div>
        </div>
    )
}

const WeatherApp = () => {
    const [cityName, setCityName] = useState('')
    const [cityData, setCityData] = useState('')
    const [toggleData, setToggleData] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handleNameChange = (event) => {
        setCityName(event.target.value)
    }

    const showData = (event) => {
        event.preventDefault()

        weatherService.getData(cityName)
            .then(response => {
                setToggleData(true)
                console.log(response.data)
                setCityData(response.data)
            }).catch(error => {
                console.log(error)
                setErrorMessage(`${error.message}. Make you you spell the city name correctly, and that the city is somewhat known.`)
                setToggleData(false)
            })
    }


    return (
        <div className="root-div-weather">
            <form onSubmit={showData}>
                <h1>Welcome to my Weather App</h1><br/>
                <label>Enter a city name:</label>
                <input type="text" onChange={handleNameChange}></input>
                <button type="submit">Submit</button>
            </form><br/>
            {toggleData ? <WeatherData data={cityData} /> : (errorMessage)}

        </div>
    )


}

export default WeatherApp