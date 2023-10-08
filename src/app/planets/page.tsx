"use client"
export default function Planets() {

    return(
        <>
        <div>
        <section className="py-8">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold mb-4"> Planets </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {planets.map((planet) => (
                <PlanetCard key={planet.id} planet={planet} />
              ))}
            </div>
          </div>
        </section>
        </div>
        </>
    )
}

const planets = [
    {
      "id": 1,
      "name": "Mercury",
      "description": "Mercury is the closest planet to the Sun and is the smallest planet in our solar system.",
      "image": "https://www.hindustantimes.com/ht-img/img/2023/09/12/1600x900/Instagram_Viral_Mercury_Solar_System_NASA_1694528417077_1694528432890.jfif",
      "distance_from_sun": "57.9 million km",
      "average_temperature": "-173°C to 427°C",
      "moons": 0
    },
    {
      "id": 2,
      "name": "Venus",
      "description": "Venus is often called Earth's twin because of its similar size and composition.",
      "image": "https://cdn.mos.cms.futurecdn.net/RifjtkFLBEFgzkZqWEh69P.jpg",
      "distance_from_sun": "108.2 million km",
      "average_temperature": "467°C",
      "moons": 0
    },
   
  ]
  

  interface PlanetCardProps {
    planet: {
      id: number;
      name: string;
      description: string;
      image: string;
      distance_from_sun: string;
      average_temperature: string;
      moons: number;
      // Add more properties as needed
    };
  }
  
  const PlanetCard: React.FC<PlanetCardProps> = ({ planet }) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">{planet.name}</h2>
        <img src={planet.image} alt={planet.name} className="mt-2 w-full h-80 object-cover rounded" />
        <p className="mt-2 text-gray-600">{planet.description}</p>
        <p className="mt-2">Distance from Sun: {planet.distance_from_sun}</p>
        <p className="mt-2">Average Temperature: {planet.average_temperature}</p>
        <p className="mt-2">Moons: {planet.moons}</p>
        {/* Add more planet information */}
      </div>
    );
  };
