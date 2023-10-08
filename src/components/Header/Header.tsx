import React from 'react'

const Header = () => {
  return (
    <>
       <header className="bg-black text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">SpaceVoyagers</h1>
          <nav>
            <a className="mr-4 hover:text-gray-300" href="#">Home</a>
            <a className="mr-4 hover:text-gray-300" href="/planets">Planets</a>

            <a className="mr-4 hover:text-gray-300" href="#">About</a>
            <a className="hover:text-gray-300" href="#">Contact</a>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
