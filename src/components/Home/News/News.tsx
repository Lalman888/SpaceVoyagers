import React from "react";

const News = () => {
  return (
    <>
      <section className="py-16 bg-black/80">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Latest News</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md">
              <img src="/news1.jpg" alt="News 1" className="rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">
                  SpaceX Launches Falcon 9 Rocket
                </h3>
                <p className="text-gray-600">May 10, 2023</p>
                <p className="mt-2">
                  SpaceX successfully launches Falcon 9 rocket carrying a
                  communication satellite.
                </p>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-600 mt-4 block"
                >
                  Read more
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md">
              <img src="/astro.png" alt="News 2" className="rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">
                  NASA Discovers New Exoplanet
                </h3>
                <p className="text-gray-600">May 8, 2023</p>
                <p className="mt-2">
                  NASA scientists identify a potentially habitable exoplanet in
                  a nearby star system.
                </p>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-600 mt-4 block"
                >
                  Read more
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md">
              <img src="/news1.jpg" alt="News 3" className="rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">
                  New Space Telescope to Launch Next Month
                </h3>
                <p className="text-gray-600">May 5, 2023</p>
                <p className="mt-2">
                  A groundbreaking space telescope is set to launch next month,
                  promising unprecedented views of distant galaxies.
                </p>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-600 mt-4 block"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
