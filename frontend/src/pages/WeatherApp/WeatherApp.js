import './WeatherApp.css'
import { useState } from 'react'
import weatherService from '../../services/weatherService'
import WeatherData from '../../components/Weather/WeatherData'


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
            <h1>Welcome to my Weather App</h1><br/>
            <form onSubmit={showData}>
                <label>Enter a city name:</label>
                <input type="text" onChange={handleNameChange}></input>
                <button type="submit">Submit</button>
            </form><br/>
            {toggleData ? <WeatherData data={cityData} /> : (errorMessage)}

        </div>
    )


}

export default WeatherApp