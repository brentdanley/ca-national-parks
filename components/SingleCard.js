import styles from '../styles/singlecard.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const SingleCard = ({ park }) => {

    const formatLatitude = lat => {
        const latNumber = Number(lat).toFixed(3)

        return (
            `${Math.abs(latNumber)} ${latNumber >= 0 ? 'N' : 'S'}`
        )
    }

    const formatLongitude = long => {
        const longNumber = Number(long).toFixed(3)

        return (
            `${Math.abs(longNumber)} ${longNumber >= 0 ? 'E' : 'W'}`
        )
    }

    const activities = []
    for (var i = 0; i < park.activities.length && i < 3; i++) {
        activities.push(park.activities[i].name)
    }
    console.log(activities)

    return (
        <article className={styles.card} style={{backgroundImage: `url(${park.images[0].url})`}}>
            <h3 className={styles.parkName}>{park.name}</h3>
            <div className={styles.contentWrapper}>
                <p className={styles.description}>{park.description}</p>
                <p className={styles.coords}><FontAwesomeIcon icon={faMapMarkedAlt} /> {formatLatitude(park.latitude)} {formatLongitude(park.longitude)}</p>
                <div className={styles.activities}>
                    <h5 className={styles.title}>Activities</h5>
                    <p className={styles.activityList}>{activities.join(', ')}</p>
                </div>
                <a className={styles.npsLink} href={park.url} title={`Read more about ${park.name} on NPS.gov`}>Read more at NPS.gov <FontAwesomeIcon icon={faExternalLinkAlt} /></a>
            </div>
        </article>
    )
}

export default SingleCard