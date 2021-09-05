import Image from 'next/image'
import YosemitePic from '../images/yosemite.jpg'
import styles from '../styles/hero.module.scss'

const Hero = () => (
    <section className={styles.hero}>
        <Image 
            src={ YosemitePic }
            alt='Yosemite by Aniket Deole'
            layout='responsive'
            priority='true'
            placeholder='blur'
            objectFit='cover'
        />
        <h2 className={styles.title}>Welcome to California&apos;s National Parks</h2>
    </section>
)

export default Hero