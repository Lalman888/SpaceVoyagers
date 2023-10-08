import React from "react";

const Video = () => {
  return (
    <>
    <section className="py-16 bg-black/80">
        <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white rounded-lg shadow-md">
            <div className="relative">
              <img
                src="/Space/space2.jpg"
                alt="Video 1"
                className="rounded-t-lg"
              />
              <button className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Journey to Mars</h3>
              <p className="text-gray-600">Duration: 10:2</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
    </>
  );
};

export default Video;
