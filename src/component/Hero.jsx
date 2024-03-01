
import React from 'react';
import img5 from '../assets/img/soccer-players-celebrating-victory-with-trophee_720.jpg'
const Hero = ({ title, subtitle, imagePath}) => {
    return (

         <div className='max-w-screen mx-auto '>
         <div className='max-h-[500px] relative'>
           {/* Overlay */}
           <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center text-center'>
             <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
             {title}
             </h1>
             <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
               <span className='text-orange-500 text-xs'>Home 》 {subtitle}</span>
             </h1>
           </div>
           <img
             className='w-full max-h-[500px] object-cover'
             src={imagePath}
             alt='/'
           />
         </div>
       </div>
    );
};
export default Hero;