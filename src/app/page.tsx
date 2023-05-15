import Image from 'next/image'
import Head from 'next/head'
import Header from '@/components/Header/Header'
import Hero from '@/components/Home/Hero/Hero'
import Footer from '@/components/Footer/Footer'
import News from '@/components/Home/News/News'
import Video from '@/components/Home/Video/Video'
export default function Home() {
  return (
    <div>
    <Head>
      <title>SpaceVoyagers | Explore the Universe</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <Hero/>
    <News/>
    <Video/>
    <Footer/>
  </div>

  )
}
