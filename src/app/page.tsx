import Image from 'next/image'
import Head from 'next/head'
import Header from '@/components/Header/Header'
import Hero from '@/components/Home/Hero/Hero'
import Footer from '@/components/Footer/Footer'
export default function Home() {
  return (
    <div>
    <Head>
      <title>SpaceVoyagers | Explore the Universe</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <Hero/>
    <Footer/>
  </div>

  )
}
