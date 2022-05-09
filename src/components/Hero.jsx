import React from 'react'

const Hero = () => {
  return (
    <div className="relative">
      <div className="text-white mx-auto top-48 absolute md:top-64 left-2 lg:left-24 w-64 ">
        <p className="text-4xl md:text-5xl font-extrabold uppercase border-l-2 pl-3 animate__animated animate__fadeInLeft animate__slow">
          El mejor café de buenos aires ahora disponible en todo el país
        </p>
      </div>


      <img
        src="/img/pexels-toni-cuenca-585754.jpg"
        alt="hero image"
        className="h-screen w-full object-cover"
      />
      
    </div>
  );
}

export default Hero