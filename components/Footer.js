import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import styles from '../styles/footer.module.scss'

const Footer = () => {

    const socialLinks = [
        {
            label: 'Facebook',
            url: 'https://facebook.com',
            icon: faFacebook
        },
        {
            label: 'Twitter',
            url: 'https://twitter.com/',
            icon: faTwitter
        },
        {
            label: 'Instagram',
            url: 'https://instagram.com/',
            icon: faInstagram
        },
        {
            label: 'LinkedIn',
            url: 'https://linkedin.com/',
            icon: faLinkedin
        }
    ]

    const legalLinks = [
        {
            label: 'Privacy Policy',
            route: '/privacy-policy'
        },
        {
            label: 'Terms and Conditions',
            route: '/terms-and-conditions'
        }
    ]

    return (
        <footer className={styles.footer}>
            <div className={styles.contentWrapper}>
                <h5 className={styles.pageTitle}>National Parks of California</h5>
                <p className={styles.copyright}>&copy;{ new Date().getFullYear() } Brent Danley</p>
                <section className={styles.legalLinks}>
                    <h4 className={styles.sectionTitle}>Legal</h4>
                    <ul>
                    {
                        legalLinks.map(link => 
                            <li key={link.route}><Link href={link.route}><a>{link.label}</a></Link></li>
                        )
                    }
                    </ul>
                </section>

                <section className={styles.socialLinks}>
                    <h4 className={styles.sectionTitle}>Social</h4>
                    <ul>
                    {
                        socialLinks.map(link => 
                            <li key={link.url}><a href={link.url}><FontAwesomeIcon icon={link.icon} /> {link.label}</a></li>
                        )
                    }
                    </ul>
                </section>
            </div>
        </footer>
    )
}

export default Footer