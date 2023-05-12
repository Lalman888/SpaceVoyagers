import React from "react";
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <>
      <main>
        <section className="relative bg-gray-900 text-white">
          <div>
            {/* <img src="/spacehero.png" alt="SpaceVoyagers" className="" /> */}
            <Image
              src="/spacehero.png"
              alt="SpaceVoyagers"
              width={1640}
              height={800}
            />
          </div>
          <div className=" absolute z-10 top-[22%] left-[22%] py-16">
            <div>
              <div className=" ">
                <h2 className="text-7xl font-bold mb-4">
                  Explore the Universe with SpaceVoyagers
                </h2>
                <p className="text-xl mb-12">
                  Discover the wonders of space and embark on epic space
                  missions.
                </p>
                <Link
                  href="/"
                  className="border-black bg-black/25 border- text-white px-12 py-6 rounded-md font-bold uppercase tracking-wide text-xl hover:bg-black transition-all duration-200"
                >
                  Start Exploring
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Hero;
