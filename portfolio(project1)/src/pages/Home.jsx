import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {  Mail, ChevronDown , Computer} from 'lucide-react'

const Home = () => {
  // Force visible to true initially to rule out animation issues
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // This ensures visibility is true after component mounts
    setVisible(true)
  }, [])

  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Video Background with Fallback */}
      <div className="absolute inset-0 z-0">
        {/* Fallback background color in case video fails */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>    
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-10"></div>
      </div>

      {/* Main Content - removed conditional visibility for troubleshooting */}
      <div className="relative z-20 flex flex-col items-center justify-center h-screen text-center px-4">
        {/* Intro Heading - removed conditional opacity */}
        <div className="opacity-100">
          <h1 className="rounded-lg bg-black/30 backdrop-blur px-8 py-6 text-6xl md:text-7xl font-bold text-white shadow-xl border border-white/10">
            Hi! <span id="wave-emoji" className="inline-block origin-bottom-right">✌️</span>
          </h1>
        </div>

        {/* Bio Section - removed conditional opacity */}
        <div className="mt-8 text-white max-w-2xl backdrop-blur bg-black/20 p-6 rounded-xl border border-white/10 shadow-2xl opacity-100">
          <p className="text-3xl font-bold mb-3 font-serif">I'm <span className="text-blue-400">Ishan Waghela</span></p>
          <p className="text-xl text-white/90 font-serif mb-4">Software Developer & Devops&Cloud enthusiast</p>
          <p className="text-lg text-white/80 font-serif">I create beautiful, functional websites with attention to detail and user experience.</p>
          <p className="text-lg text-white/80 font-serif mt-2">Let's connect and build something amazing together!</p>
        </div>

        {/* Action Buttons - removed conditional opacity */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 opacity-100">
          <Link to="https://lavender-rozalin-93.tiiny.site" target="_blank" rel="noopener noreferrer">
            <button className="rounded-full bg-white px-8 py-3 font-semibold text-black shadow-xl hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105">
              Resume
            </button>
          </Link>
          <Link to="/project">
            <button className="rounded-full bg-white px-8 py-3 font-semibold text-black shadow-xl hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105">
              My Work
            </button>
          </Link>
        </div>

        {/* Social Links - removed conditional opacity */}
        <div className="mt-8 flex gap-6 opacity-100">
          <a href="mailto:ishanwaghela2007@gmail.com" aria-label="Email" className="text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-125">
            <Mail size={24} />
          </a>
          <a href='https://github.com/ishanwaghela2007' aria-label="Email" className="text-white hover:text-blue-400 transition-all duration-300 transform hover:scale-125">
             <Computer size={24}/>
          </a> 
        </div>
      </div>
    </div>
  )
}

export default Home