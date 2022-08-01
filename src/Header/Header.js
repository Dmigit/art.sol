import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { FiStar } from 'react-icons/fi';
import { BsGithub, BsTwitter } from 'react-icons/bs';
import { FaDiscord } from "react-icons/fa";

const Header = () => {
  return (
   <> 
    <div className="bg-white dark:bg-black text-black dark:text-white flex justify-evenly items-center h-40"> 
      <div className="flex w-1/6">
         <CgProfile className="text-4xl"/>
         <FiStar className="text-4xl"/>
      </div>

      <h1 className="font-bold text-8xl">art.sol</h1>

      <div className="border-white border-2 w-1/6 max-h-20 rounded-lg shadow-lg text-center">
          <h3>Connected ✅</h3>
          <p>GiDP...ZJC2w</p>
      </div>
      <div className="flex justify-between w-1/8 text-white">
        <BsGithub className="text-4xl" />
        <BsTwitter className='text-4xl'/>
        <FaDiscord className='text-4xl'/>
      </div>
    </div>
    <div className="text-center dark:bg-black bg-white text-black dark:text-white">
      <button className="border-white border-2 rounded-lg w-1/3 p-2 my-6 shadow-2xl">
        Connect Wallet 
      </button>
    </div>
  </>
  )
}

export default Header;