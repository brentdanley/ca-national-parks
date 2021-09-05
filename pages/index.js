import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ParkCards from '../components/ParkCards'
import Footer from '../components/Footer'
import styles from '../styles/home.module.scss'

const Home = () => {
  return (
    <main className={styles.main}>
      <Head>
        <title>Interview project - Brent Danley</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <ParkCards />
      <Footer />
    </main>
  )
}

export default Home