import { useState, useEffect } from 'react'
import SingleCard from './SingleCard'
import styles from '../styles/parkcards.module.scss'

const ParkCards = () => {
    const [parks, setParks] = useState([])

    useEffect(() => {
        const fetchParks = async () => {
            let response = await fetch('https://developer.nps.gov/api/v1/parks?api_key=9bjggQpKZxv7mPbBpA5GbEa0tz52NxJIp2GdZxiB&stateCode=CA&limit=12')
            response = await response.json()
            setParks(response.data)
        }

        fetchParks()
    }, [])

    return (
        <section className={styles.wrapper}>
            {
                parks.map(park => <SingleCard park={park} key={park.id} /> )
            }
        </section>
    )
}

export default ParkCards