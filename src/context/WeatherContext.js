import { createContext ,useState, useContext, useEffect } from "react";
import { cities } from "../city-list/cities";
import { getCityWeather, getWeather } from "../api/weather";
import { starterWeather } from "../api/starterWeather";

const CityContext = createContext()

export const CityProvider = ({children}) => {

    const [city, setCity] = useState(cities[0])
    const [cityWeather, setCityWeather] = useState([])
    const weekDays = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun","Mon"]
    const day = new Date()
    const today = day.getDay()

    useEffect(() => {
        const getWeatherData = async () => {
            const cityWeather = await getWeather()
            setCityWeather(cityWeather)
            console.log(cityWeather)
        }
        getWeatherData()
    },[])

    useEffect(() => {
        const getWeatherData = async () => {
            const cityWeather = await getCityWeather(city.latitude,city.longitude)
            setCityWeather(cityWeather)
            console.log(cityWeather)
        }
        getWeatherData()
    },[city])


    const values = {
        city,
        setCity,
        cityWeather,
        setCityWeather,
        weekDays,
        today
    }

    return <CityContext.Provider value={values}>{children}</CityContext.Provider>
}

export const useCity = () => useContext(CityContext)