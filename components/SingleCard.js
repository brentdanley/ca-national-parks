import styles from '../styles/singlecard.module.scss'

const SingleCard = ({ park }) => (
    <article className={styles.card} style={{backgroundImage: `url(${park.images[0].url})`}}>
        <h3 className={styles.parkName}>{park.name}</h3>
        <div className={styles.contentWrapper}>
            <p className={styles.description}>{park.description}</p>
        </div>
    </article>
)

export default SingleCard