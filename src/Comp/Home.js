import React from "react";
import home1 from "../img/home1.png";
import home2 from "../img/home2.png";
import play from "../img/play.png";
import slack from '../img/slack.png';
import netflix from "../img/netflix.png";
import fitbit from "../img/fitbit.png";
import google from '../img/google.png';
import shape from '../img/Shape (1).png';
import Work from './Work'

function Home() {
  return (
    <div>
      <div className="container mx-auto  px-3 pb-5">

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 justify-between ">
          <div>
            <div className="lg:py-0 py-16 xl:py-28  sm:pt-5 sm:px-5 xl:px-10 lg:px-0 md:px-5 px-10">
              <div className="py-10 md:py-5">
                <h3 className="text-base pl-2 text-blue-600 py-5">WELCOME!</h3>
                <h1
                  className="homeText font-semibold xl:text-6xl 
                        lg:text-6xl md:text-4xl text-4xl pb-8"
                >
                  The best way for your startup.
                </h1>
                <p className="text-lg text-gray-500 font-normal leading-7 xl:pr-16 lg:pr-14 pr-8 ">
                  You can create your own design process with master. They are
                  blocks designed to carry on with the times with your
                  customers. Modern, minimal blocks with a cool look.
                </p>
              </div>
              <div className="flex space-x-6 py-3 ">
                <button className="btn xl:px-8 lg:px-8 sm:px-8 md:px-6 px-5 py-3 rounded-3xl text-white text-center bg-blue-600">
                  Get started
                </button>
                <button className="btn xl:px-8 lg:px-8 sm:px-8 md:px-6 px-5  rounded-3xl bg-gray-50 text-center border-black">
                  Get started
                </button>
              </div>
            </div>
          </div>

          
          <div className="pb-4 ">
          <div className="md:ml-1 lg:ml-1 mr-2">
                    <img src={home1} className="absolute z-0 xl:h-[580px] lg:h-[450px] lg:right-28 md:h-96  sm:h-96 
                    transform xl:translate-x-4 lg:translate-x-10 xl:pl-14 lg:pl-32 md:pl-10 sm:pl-36  xl:block lg:block 
                    md:block sm:block hidden xl:pr-5 lg:pr-8 pr-3" alt="pic"/>
                    {/* <img src={home2} className="absolute z--10 xl:h-[600px] lg:h-[480px] md:h-96  md:top-28 xl:top-28 
                    xl:right-24 lg:top-32 lg:right-32 sm:h-96 sm:left-32 "  alt="pic"/>
                    <img src={play} className="fixed z-50  xl:top-72 xl:right-96 xl:h-auto lg:top-64 lg:right-72 lg:h-auto md:h-20 
                    md:right-72 md:top-52"  alt="pic"/> */}

                </div>

          </div>
          </div>

        </div>



        {/* about us */}

      <div className="container mx-auto py-20 px-5">
        <div className="grid grid-flow-row">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-between py-5 px-2 ">
              <div className="">
                <h3 className="text-base pl-2 text-blue-600 py-5">
                  OUR CUSTOMERS
                </h3>
                <h2
                  className="homeText font-semibold xl:text-5xl 
                        lg:text-5xl md:text-4xl text-4xl pb-8"
                >
                  We have worked with them. Our super customers.{" "}
                </h2>
              </div>

            <div>
              <p className="text-lg text-gray-600 font-normal py-20 md:py-16 sm:py-8 sm:px-1 xl:px-12 lg:px-12 md:px-5 px-5">
                We bring the results while helping you achieve cost and time
                savings without taking on risk or management overhead. Our team
                provides high-level creative education.
              </p>
            </div>
          </div>

          <div className="flex lg:px-10 xl:px-10 md:px-10 px-2 sm:px-5 xl:space-x-24 lg:space-x-24 md:space-x-10 sm:space-x-4 space-x-2">
          <img src={slack} alt="site-name" className="lg:w-32 xl:w-32 sm:w-32 md:w-32 w-16 h-8"/>
          <img src={netflix} alt="site-name" className="lg:w-32 xl:w-32 sm:w-32 md:w-32 w-16  h-8"/>
          <img src={fitbit} alt="site-name" className="lg:w-32 xl:w-32 sm:w-32 md:w-32 w-16  h-8"/>
          <img src={google} alt="site-name" className="lg:w-32 xl:w-32 sm:w-32 md:w-32 w-16  h-8"/>
          <img src={shape} alt="site-name" className="lg:w-32 xl:w-32 sm:w-32 md:w-32 w-16  h-8"/>
            </div>
            <hr/>
          
        </div>
      </div>

      <Work/>
    </div>
  );
}

export default Home;
