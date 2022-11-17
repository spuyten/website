import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Spuyten Consulting</title>
        <meta name="description" content="Spuyten Consulting Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
            <a href="/">Spuyten Consulting</a>
        </h1>

        <p>Bridging The Gap Between Data and Strategy</p>

        <h3>What We Do</h3>
        <p>
            We help enterprise businesses create business value from data. Data is the new oil, but it is useless in its native state.

            We consult some of the largest companies in the world to help them in 3 key areas.
        </p>
        <h3>
        Business Intelligence and Analytics
        </h3>
        <p className={styles.ptext}>
        We help clients extract data from a variety of enterprise software systems and file storage formats into tools like PowerBI and Tablau so that your organization can make meaningful business decisions based on the data you currently have.
        </p>

        <h3>
        Data Science and Machine Learning
        </h3>
        <p className={styles.ptext}>
        We help clients explore viability of business opportunities that may exist within current data sets, and we help them prototype and validate models so that performance can be drawn directly back to business value.
        </p>

        <h3>
        Enterprise Data Strategy
        </h3>
        <p className={styles.ptext}>
        We help clients build roadmaps for progress toward a data-driven organization able to quickly refine value from their data.
        </p>

        <h3>
        Production-Grade Software
        </h3>
        <p className={styles.ptext}>
        We help clients build custom software such as integrations, model deployment, and visualization to realize predictable and professsional value across silos of data.
        </p>
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}