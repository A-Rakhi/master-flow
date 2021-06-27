import React from "react";
import base from "../img/Base.png";

function Experience() {
  return (
    <div>
      <div className="container mx-auto px-3 sm-px-0 pb-16 mt-40 ">
        <div className=" w-full mt-10 mb-8  pl-12">
          <h3 className="text-gray-800 text-5xl capitalize font-serif">
            Our latest experiences
          </h3>
        </div>

        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {/* <!--Card 1--> */}
          <div className="rounded overflow-hidden">
            <img className="" src={base} alt="Mountain" />
            <div className="px-10 py-2">
              <div className=" text-base text-gray-500 mb-2">Wireframe</div>
              <p className="text-gray-900 text-base font-semibold">
                The strategy we use to reach your goal quickly
              </p>{" "}
            </div>
            <div className="px-8 pt-4">
              <a
                href="/"
                className="inline-block bg-gray-200 rounded-full 
        px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2 hover:underline uppercase text-widest"
              >
                Read MOre
              </a>
            </div>
          </div>

          {/* <!--Card 2--> */}
          <div className="rounded overflow-hidden">
            <img className="" src={base} alt="Mountain" />
            <div className="px-10 py-2">
              <div className=" text-base text-gray-500 mb-2">Wireframe</div>
              <p className="text-gray-900 text-base font-semibold">
                The strategy we use to reach your goal quickly
              </p>{" "}
            </div>
            <div className="px-8 pt-4">
              <a
                href="/"
                className="inline-block bg-gray-200 rounded-full 
        px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2 hover:underline uppercase text-widest"
              >
                Read MOre
              </a>
            </div>
          </div>

          {/* <!--Card 3--> */}
          <div className="rounded overflow-hidden">
            <img className="" src={base} alt="Mountain" />
            <div className="px-10 py-2">
              <div className=" text-base text-gray-500 mb-2">Wireframe</div>
              <p className="text-gray-900 text-base font-semibold">
                The strategy we use to reach your goal quickly
              </p>{" "}
            </div>
            <div className="px-8 pt-4">
              <a
                href="/"
                className="inline-block bg-gray-200 rounded-full 
        px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2 hover:underline uppercase text-widest"
              >
                Read MOre
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-3 ">
        <div className=" flex-row px-2">
          <div className="  h-96 xl:w-[1180px] lg:w-[900px] md:w-[700px] sm:w-[550px] w-[400px] absolute bg-gray-300 z-0 transform translate-y-10 left-20"></div>
          <div className="h-96 xl:w-[1200px] lg:w-[920px] md:w-[690px] sm:w-[550px] w-[384px] absolute bg-blue-700 z-10">
            <div className="text-center my-16">
              <div>
                <h3 className="text-white font-semibold text-4xl">Subscribe to the newsletter!</h3>
                <p className="text-white pt-3">Enter your email into form below to get updates from us</p>
              </div>
              <div className="text-center xl:ml-96 lg:ml-80 md:ml-40 sm:ml-24 mt-8">
            
                <form class="w-full max-w-sm py-5 xl:block lg:block md:block sm:block hidden ">
                  <div class="flex items-center  bg-gray-50 py-2 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className=" mx-3 h-6 w-6 flex-shrink-0 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>

                    <input
                      className=" pl-5 appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight 
    focus:outline-none"
                      type="text"
                      placeholder="Write your Email.."
                      aria-label="Full name"
                    />
                    <button
                      class="flex-shrink-0 bg-blue-500  
    text-sm border-none text-white py-2 px-6 mx-3 rounded"
                      type="button"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
                <div className="xl:hidden lg:hidden md:hidden sm:hidden block">
                  <button
                    class="flex-shrink-0 bg-white  
    text-sm border-none text-blue py-3 px-8 mx-3 rounded-lg"
                    type="button"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     <br/>
    </div>
  );
}

export default Experience;
