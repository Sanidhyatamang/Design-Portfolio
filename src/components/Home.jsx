import React from "react";

const Home = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: 'url("/images/Me2.png")' }} // Replace with your image path
    >
      <div className="pl-10 sm:pl-16 md:pl-24 lg:pl-32 space-y-4 text-left">
        {/* Heading */}
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-thin">
          Sanidhya
        </h1>
        {/* Subheading */}
        <p className="text-white text-lg sm:text-xl md:text-2xl font-light">
          I am a Graphic Designer
        </p>
      </div>
    </div>
  );
};

export default Home;
