import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
const Error = () => {

  const [countDown, setCountDown] = useState(5);

  const navigate = useNavigate();

  //countdown function
  const countdown = () => {
    setCountDown(countDown - 1);
    if(countDown === 0){
      navigate('/');
    }
  }

  useEffect(() => {
    const interval = setInterval(countdown, 1000);
    return () => clearInterval(interval);
  }, [countDown]);

  return (
    <div className=" flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-4xl font-bold underline decoration-wavy decoration-amber-600 mb-3">
        404
      </h1>
      <h2 className='text-3xl'>Producto no encontrado</h2>
      
      <img
        src="/img/undraw_feeling_blue_-4-b7q.svg"
        alt=""
        className="md:w-1/2 mt-5"
      />

     <p>Serás redirigido a la pagina principal en: {countDown}</p>
    </div>
  );
}

export default Error