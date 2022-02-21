import axios from "axios";

const MY_API_KEY = "d8bc34fa87cf571915ad9bd47b356527"

export const getWeather = async () => {
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=37.0000&lon=35.3213&exclude=current,minutely,hourly,alerts&units=metric&appid=${MY_API_KEY}`)
    return data
}

export const getCityWeather = async (lat,lon) => {
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${MY_API_KEY}`)
    return data
}