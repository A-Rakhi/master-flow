import React from "react";
import vector from '../img/Vector.png'

function Nav(){
    return(
        <div className="bg-white container mx-auto  xl:px-16 lg:px-16 px-12  items-center">

         <div className="flex justify-between items-center py-4">
             <div className="flex items-center space-x-2">
                 <div>
                     <img src={vector} className="h-3 w-4" alt="logo"/>
                 </div>
                   <h2 className="font-semibold leading-2 lg:text-2xl xl:text-2xl md:text-xl ">Master Flow</h2>
             </div>
             <nav className="md:block hidden ">
                 <ul className="flex space-x-5 xl:space-x-9 lg:space-x-7 items-center">
                 <li className=" active:text-black text-base" >Home</li>
                 <li className="text-gray-600 text-base " >Pricing</li>
                 <li className="text-gray-600 text-base" >Services</li>
                 <li className="text-gray-600 text-base" >About</li>
                 </ul>

             </nav>
             <div className="md:block hidden">
             <div className="flex items-center space-x-8">
                 <h5 className="text-gray-600 text-base">log in</h5>
                 <button className="btn px-5 py-2 border rounded-3xl border-gray-200 text-base text-blue-700 ">Get Started</button>
             </div>
             </div>
           
           <div className="md:hidden block">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
           </div>
         </div>
        </div>
    );
}

export default Nav;