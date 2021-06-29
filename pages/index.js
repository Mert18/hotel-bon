import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import classes from '../styles/Home.module.css'

export default function Home() {
  return (
      <div className={classes.container}>
        <Head>
          <title>Otel İsim</title>
          <meta name="description" content="Hotel Bon ayvalik izmir" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={classes.back}>
          <Image src="/images/back.jpg" width="1600px" height="800px" alt="hotel view" />
        </div>
          <div className={classes.left}>
            <div className={classes.text}>
              <h1>Otel İsmi</h1>
              <p>Otel Kısa yazı</p>
            </div>
            <div className={classes.imgs}>
              {/* Images come here. */}
            </div>
          </div>

          <div className={classes.right}>
            <div className={classes.list}>
              <ul>
                <li>Otel özellikleri ile ilgili birkaç cümle buraya gelebilir.</li>
                <li>Otel özellikleri ile ilgili birkaç cümle buraya gelebilir.</li>
                <li>Otel özellikleri ile ilgili birkaç cümle buraya gelebilir.</li>
                <li>Otel özellikleri ile ilgili birkaç cümle buraya gelebilir.</li>
              </ul>
            </div>
          </div>

      </div>
  )
}
