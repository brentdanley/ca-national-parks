import Link from 'next/link'
import styles from '../styles/footer.module.scss'

const Footer = () => {

    const socialLinks = [
        {
            label: 'Facebook',
            url: 'https://facebook.com'
        },
        {
            label: 'Twitter',
            url: 'https://twitter.com/'
        },
        {
            label: 'Instagram',
            url: 'https://instagram.com/'
        },
        {
            label: 'LinkedIn',
            url: 'https://linkedin.com/'
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
                        <li key={link.url}><a href={link.url}>{link.label}</a></li>
                    )
                }
                </ul>
            </section>
        </footer>
    )
}

export default Footer