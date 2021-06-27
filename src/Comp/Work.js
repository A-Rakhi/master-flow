import React from "react";
import work from "../img/work.png";
import work1 from "../img/work1.png";
import img2 from "../img/Image2.png";
import Experience from "./Experience";

function Work() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid md:grid-flow-col grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 justify-between px-5 py-16">
          <div className="relative">
            <img
              src={work}
              alt="work"
              className="z-0 absolute xl:h-96 lg:h-96 md:h-96 sm:h-96 h-80 xl:left-20 lg:left-10  md:left-2"
            />
            <img
              src={work1}
              alt="work"
              className="z-10 absolute top-32 lg:top-32 xl:top-32 xl:h-96 lg:h-96 md:h-72 sm:h-96 h-60
                                  xl:left-52 lg:left-44 sm:left-32 sm:top-32 md:left-36 left-24"
            />
          </div>
          <div>
            <div className="xl:pt-20 lg:pt-20 md:pt-20 sm:pt-[510px] pt-[510px] xl:pr-1 lg:pr-1 md:pr-1 xl:pl-20 lg:pl-20 md:pl-14">
              <h1
                className="homeText xl:pr-48 lg:pr-50 font-semibold xl:text-5xl 
                        lg:text-5xl md:text-4xl text-4xl pb-8"
              >
                We work in Minimal Offices
              </h1>
              <p className="text-gray-600 pr-5  sm:pr-16">
                If you’re going to go with a minimalist style in just one area
                of the home, then choose your home office. A clean and clearly
                organised workspace is conductive to great concentration and an
                uninterrupted workflow. Less visual clutter leads to less mental
                clutter, and you will be able to find your needed files and
                equipment a whole lot faster too.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-300 mt-24 pt-5 xl:h-[470px] md:h-[470px] lg:h-[470px] sm:pb-3">
        <div className="container mx-auto  px-3 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 justify-between ">
            <div>
              <div className="py-16  sm:pt-5 sm:px-5 xl:px-10 lg:px-0 md:px-5 px-10">
                <div className="py-16 md:py-5">
                  <h1 className="homeText font-semibold text-4xl pb-8">
                    The habits of Our Startup{" "}
                  </h1>
                  <p className="text-lg text-gray-600 font-normal leading-7 xl:pr-16 lg:pr-14 pr-8 ">
                    “Design is not just what it looks like and feels like.
                    Design is how it works”. We always try to make a great
                    output by this culture. Steve Jobs.{" "}
                  </p>
                </div>
                <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-row xl:space-x-6 lg:space-x-6 md:space-x-6 pb-3 ">
                  <div>
                    <div className="flex xl:space-x-2 lg:space-x-2 md:space-x-2 space-x-0  pt-3">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <h5 className="text-gray-600">50 Blocks</h5>
                    </div>
                    <div className="flex  xl:space-x-2 lg:space-x-2 md:space-x-2 space-x-0  pt-3">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <h5 className="text-gray-600">50 Blocks</h5>
                    </div>
                    <div className="flex  xl:space-x-2 lg:space-x-2 md:space-x-2 space-x-0  pt-3">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <h5 className="text-gray-600">50 Blocks</h5>
                    </div>
                  </div>
                  <div>
                    <div className="flex  xl:space-x-2 lg:space-x-2 md:space-x-2 space-x-0  pt-3">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <h5 className="text-gray-600">50 Blocks</h5>
                    </div>
                    <div className="flex  xl:space-x-2 lg:space-x-2 md:space-x-2 space-x-0 pt-3">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <h5 className="text-gray-600">50 Blocks</h5>
                    </div>
                    <div className="flex  xl:space-x-2 lg:space-x-2 md:space-x-2 space-x-0  pt-3">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <h5 className="text-gray-600">50 Blocks</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="xl:mt-10 lg:mt-10 md:mt-10 mt-0">
              <div className="relative">
                <img src={img2} className="top-20 z-10 h-[530px]" alt="pic" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
          <Experience/>
      </div>
    </div>
  );
}
export default Work;
