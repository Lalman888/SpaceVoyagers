import Image from 'next/image'
import Head from 'next/head'
export default function Home() {
  return (
    <div>
    <Head>
      <title>SpaceVoyagers | Explore the Universe</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <header className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">SpaceVoyagers</h1>
        <nav>
          <a className="mr-4 hover:text-gray-300" href="#">Home</a>
          <a className="mr-4 hover:text-gray-300" href="#">About</a>
          <a className="hover:text-gray-300" href="#">Contact</a>
        </nav>
      </div>
    </header>

    <main className="bg-gray-100">
      <div className="container mx-auto py-12">
        <h2 className="text-4xl font-bold mb-8">Explore the Universe with SpaceVoyagers</h2>
        <p className="text-lg mb-8">Discover the wonders of space and embark on epic space missions.</p>
        <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Start Exploring
        </a>
      </div>
    </main>

    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto">
        <p className="text-center">© 2023 SpaceVoyagers. All rights reserved.</p>
      </div>
    </footer>
  </div>

  )
}
