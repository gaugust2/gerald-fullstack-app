import './WeatherApp.css'
import { useState } from 'react'
import weatherService from '../../services/weatherService'
import axios from 'axios'

const Weather = ({weather}) => <div>{weather.city}{weather.temperature}</div>

const WeatherData = ({dataToShow}) => {
    return(
        <div>
            {dataToShow.temperature}
        </div>
    )
}

const WeatherApp = () => {
    const [cityName, setCityName] = useState('')
    const [cityData, setCityData] = useState('')

    const handleNameChange = (event) => {
        setCityName(event.target.value)
    }

    const showData = (event) => {
        event.preventDefault()
        try {
            weatherService.getData(cityName)
                .then(response => {
                    console.log(response.data)
                    setCityData(response.data)
                })
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="root-div-weather">
            <form onSubmit={showData}>
                <h1>Welcome to my Weather App</h1>
                <label>Enter a city name:</label>
                <input type="text" onChange={handleNameChange}></input>
                <button type="submit">Submit</button>
                <WeatherData dataToShow={cityData}/>
            </form>
        </div>
    )
}

export default WeatherApp