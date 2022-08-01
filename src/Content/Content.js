import React from 'react';
import { BiUpvote, BiDownvote } from 'react-icons/bi';
import { FiStar } from 'react-icons/fi';

const Content = () => {
    return (
        <div className="flex flex-col items-center dark:bg-black dark:text-white bg-white text-black">
            <div className=" w-1/2 p-1 shadow-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-3xl m-6">
              <a className="block p-6 bg-white sm:p-8 rounded-3xl text-black flex" href="">
                 <div className="sm:pr-1">
                     <h1 className="text-2xl mb-3 font-bold">Artwork Title</h1>
                     <h1 className="text-9xl">🖼️</h1>
                 </div>
                 <div className="text-center">
                     <h3 className="font-bold">Created by ------</h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                     <button className="w-1/3 border-black border-2 bg-black text-white rounded-lg p-2 my-3">
                        TIP
                     </button>
                     <div className="w-full flex justify-evenly pt-3 pl-2">
                         <div className="flex">
                           <div>  
                              <BiUpvote className="text-xl"/>
                              <BiDownvote className="text-xl"/>
                           </div>
                           <p className="text-gray-600 pt-1 pl-1">3.2k</p>
                         </div>
                         <div className="flex">
                              <FiStar className='text-4xl'/>
                              <p className="text-gray-600 pt-1 pl-1">1.1k</p>
                         </div>
                         <button className='border-black border-2 rounded-lg bg-black text-white w-1/4 p-1'>
                             CTA
                         </button>
                     </div>    
                 </div>
              </a>   
            </div>
        </div>
    )
}

export default Content;