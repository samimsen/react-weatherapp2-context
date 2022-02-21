import { useCity } from "../context/WeatherContext"
import { cities } from '../city-list/cities'

function Cities() {

    const { setCity } = useCity()

    const handleChange = (e) => {
        setCity(cities[cities.find(city => city.name === e.target.value).id])
    }

    return (
        <div>
            { <select onChange={handleChange}>
                {cities.map((city) => (
                    <option key={city.id} value={city.name}>{city.name}</option>
                ))}
            </select> }
        </div>
    )
}

export default Cities