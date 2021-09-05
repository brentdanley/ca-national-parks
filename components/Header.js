import Image from 'next/image'
import styles from '../styles/header.module.scss'
import CA_flag from '../images/ca-flag.jpg'

const Header = () => {

    return (
        <header className={styles.header}>
            <div className={styles.imageWrapper}>
                <Image
                    src={ CA_flag }
                    alt='California State Flag'
                />
            </div>
            <p className={styles.siteName}>National Parks of California</p>
        </header>
    )
}

export default Header