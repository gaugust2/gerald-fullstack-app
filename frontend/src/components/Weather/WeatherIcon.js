const WeatherIcon = ({link}) => {
    return(
        <div className="col-sm-5 d-flex align-items-center justify-content-center">
                <img className="weather-img" src={`https://openweathermap.org/img/wn/${link}@2x.png`} alt="icon" />
        </div>
    )
}

export default WeatherIcon