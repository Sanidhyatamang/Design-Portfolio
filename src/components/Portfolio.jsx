import React, { useState } from 'react';

const designs = [

  {
    id: 13,
    title: '',
    image: '/images/design13.png',
  },
  {
    id: 12,
    title: '',
    image: '/images/design12.png',
  },

  {
    id: 11,
    title: '',
    image: '/images/design11.png',
  },

  {
    id: 10,
    title: '',
    image: '/images/design10.png',
  },
  {
    id: 9,
    title: '',
    image: '/images/design9.png',
  },

  {
    id: 8,
    title: '',
    image: '/images/design8.png',
  },

  {
    id: 7,
    title: '',
    image: '/images/design7.png',
  },
  {
    id: 6,
    title: 'Throttle Fury',
    image: '/images/design6.png',
  },


  {
    id: 5,
    title: "Eagle's Valor: Brave Flight",
    image: '/images/design5.png',
  },

  {
    id: 4,
    title: 'Path to Peace: Unity',
    image: '/images/design4.png',
  },

  {
    id: 3,
    title: 'Echoes of Yesterday: A Journey Back to School Days',
    image: '/images/design3.png',
  },
  {
    id: 1,
    title: 'Threads of Elegance',
    image: '/images/design1.png',
  },
  {
    id: 2,
    title: 'Your Digital Welcome Mat',
    image: '/images/design2.png',
  },
 
  // Add more designs as needed
];

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-20 text-neutral-300">
      <h2 className="text-center text-4xl mb-20 font-thin">My Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 container mx-auto px-8">
        {designs.map((design) => (
          <div
            key={design.id}
            className="rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform cursor-pointer"
            onClick={() => setSelectedImage(design.image)}
          >
            <img
              src={design.image}
              alt={design.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-light">{design.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)} // Close the modal on clicking outside
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Selected Design"
              className="max-w-full max-h-screen rounded-lg"
            />
            <button
              className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 rounded-full p-2"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
