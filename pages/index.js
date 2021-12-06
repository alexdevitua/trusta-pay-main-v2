import Head from 'next/head'
import Layout from '../components/layout'
import Banner from '../components/banner'
import Divider from '../components/Divider'
import HowTo from "../components/howto"
import BriefGoal from '../components/briefGoal'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Головна | Trusta </title>
        <meta name="description" content="Trusta - ПЛАТІЖНИЙ СЕРВІС РОЗШИРЕНИХ МОЖЛИВОСТЕЙ, розірвані платежі, платежі без розкриття номеру карти" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex container mx-auto">
        
        <Banner />

      </section>
      
      <Divider/>

      <section className="flex mx-auto mt-26 text-center">
        
        <HowTo/>

      </section>

      <Divider/>

      <section className="flex container mx-auto mt-26 text-center">
        <BriefGoal/>
      </section>

    </Layout>
  )
}
