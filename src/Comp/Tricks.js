import React from 'react';
import Image from '../img/image.png'
import Image3 from '../img/Image3.png'

function Tricks(){
    return(
        <div className="container mx-0  px-5 pt-96 block xl:h-[450px]">
            <div className="grid md:grid-flow-col grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 
            lg:grid-cols-2 md:grid-cols-2 justify-between px-5 py-16 ">
             <div className="xl:pl-20 xl:pt-28 lg:pl-32 lg:pt-24 md:pt-24 md:pl-28 sm:pl-24 sm:pt-16">
               <div className=" xl:pb-8 lg:pb-8">
             <h1
                  className="homeText font-semibold xl:text-6xl 
                        lg:text-5xl md:text-4xl text-4xl pb-8"
                >
Some magic tricks
for your phone                </h1>
                <p className="text-lg text-gray-500 font-normal leading-7 xl:pr-16 lg:pr-14 pr-8 ">
                Stream real-time video of your home, and receive notificatoins
                 whenever motion is detected, with Canary’s 1080p HD camera. 
                 Perfect device way.                </p>
              </div>
              <div className="flex space-x-6 py-3 ">
                <button className="btn xl:px-8 lg:px-8 sm:px-8 md:px-6 px-5 py-3 rounded-3xl text-white text-center bg-blue-600">
                  Get started
                </button>
                <button className="btn xl:px-8 lg:px-8 sm:px-8 md:px-6 px-5  rounded-3xl bg-gray-50 text-center border-black">
                Our blog                </button>
              </div>
             </div>
             <div>
             <img src={Image} className="relative z-0 transform xl:translate-x-4 lg:translate-x-10 
                xl:left-40 lg:left-12 md:left-20 xl:w-auto lg:w-auto md:w-80 sm:w-80 w-64 sm:left-52 left-20
                   " alt="pic"/>
              <img src={Image3} className="relative z--10 xl:-top-80 xl:left-10 lg:-top-80 md:-top-72 lg-left-10 xl:w-96 
              lg:w-80 md:w-72  w-64 sm:-top-72 sm:left-16 -top-56 left-2"  alt="pic"/> 

             </div>
          </div>
          <br/> <br/>
        </div>
    );
}
export default Tricks;