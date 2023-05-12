import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <>
      <main>
        <section className="hero py-16 bg-gray-900 text-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-4">Explore the Universe with SpaceVoyagers</h2>
                <p className="text-lg mb-8">Discover the wonders of space and embark on epic space missions.</p>
                <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                  Start Exploring
                </a>
              </div>
              <div>
                {/* <img src="/spacehero.png" alt="SpaceVoyagers" className="" /> */}
              <Image src="/spacehero.png" alt="SpaceVoyagers" fill={true} />
              </div>
            </div>
          </div>
        </section>
      </main> 
    </>
  )
}

export default Hero
