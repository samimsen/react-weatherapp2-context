import { useCity } from '../context/WeatherContext'

function Weather() {

    const {cityWeather, weekDays, today } = useCity()
    const array1 = weekDays.slice(today-1,weekDays.length-1)
    const array2 = weekDays.slice(0,today)
    const totalArray = [...array1,...array2]
    
    if (cityWeather.length !== 0) {
        return (
            <ul>
            { 
                totalArray.map((day,index) => (
                    <li key={index}>
                        <div className={index === totalArray.indexOf(`${totalArray[0]}`) ? "current-day": null}>
                            <span className="gray">{day}</span>
                            <img src={`http://openweathermap.org/img/w/${cityWeather.daily[index].weather[0].icon}.png`} alt={cityWeather.daily[index].weather[0].main}/> 
                            <div className="temp-container">
                                <span className="max">{`${parseInt(cityWeather.daily[index].temp.max)}°`}</span>
                                <span className="max">{`${parseInt(cityWeather.daily[index].temp.min)}°`}</span>
                            </div> 
                        </div>
                    </li>  
                ))
            }
            </ul>
        )
    }else {
        return false
    }
    }

export default Weather