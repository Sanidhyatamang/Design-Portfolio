import React from 'react'
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-20" src="images/logo.png" alt="logo" /> 
        </div>
        <div className="m-8 flex items-center justify-center gap-7 text-2xl">
            {/* Facebook Icon */}
            <a 
              href="https://www.facebook.com/profile.php?id=61571286375775" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-500 cursor-pointer hover:scale-150 transition duration-300"
            >
              <FaFacebook />
            </a>
            
            {/* YouTube Icon */}
            <a 
              href="https://www.youtube.com/@TheThoughtfulJourney-n5w" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-red-500 cursor-pointer hover:scale-150 transition duration-300"
            >
              <FaYoutube />
            </a>
            
            {/* Instagram Icon */}
            <a 
              href="https://www.instagram.com/graphic_designer_802/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-pink-500 cursor-pointer hover:scale-150 transition duration-300"
            >
              <FaInstagram />
            </a>
        </div>
    </nav>
  )
}

export default Navbar

