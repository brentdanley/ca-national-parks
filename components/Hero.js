import Image from 'next/image'
import YosemitePic from '../images/yosemite.jpg'
import styles from '../styles/hero.module.scss'

const Hero = () => (
    <div className={styles.hero}>
        <Image 
            src={ YosemitePic }
            alt='Yosemite by Aniket Deole'
            className={styles.background}
            layout='responsive'
            priority='true'
            placeholder='blur'
            objectFit='cover'
        />
        <h2 className={styles.title}>Welcome to California's National Parks</h2>
    </div>
)

export default Hero