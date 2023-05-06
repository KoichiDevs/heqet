import React, { useState } from 'react'
import HeroCanvas from '../canvas/HeroCanvas'
import { GiLilyPads } from 'react-icons/gi'
import { motion } from 'framer-motion'
import { FaTelegramPlane, FaMediumM } from 'react-icons/fa'
import { SiTwitter, SiLinktree } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'
import { BsClipboard, BsClipboard2CheckFill } from 'react-icons/bs'


const Hero = () => {

    const [contractAddress, setContract] = useState('0x000000000000000000000000000000000')
    const [debounce, setDebounce] = useState(false)

    const handleCopy = () => {
        if (!debounce) {
            setDebounce(true)
            navigator.clipboard.writeText(contractAddress)
            setTimeout(() => {
                setDebounce(false)
            }, 1500);
        }
    }
    function PyramidIcon(props) {
        return (
          <svg viewBox="0 0 100 100" {...props}>
            <path d="M50 10 L90 90 L10 90 Z" fill="#fff" />
            <path d="M50 20 L80 80 L20 80 Z" fill="#fff" />
            <path d="M50 30 L70 70 L30 70 Z" fill="#fff" />
          </svg>
        );
      }
      

      
    return (
        <section className="w-full h-screen">
            <div className="w-full h-full relative z-0">
                <HeroCanvas />
            </div>

            <div className="absolute top-0 left-0 z-10 w-full h-full text-white font-albertus flex justify-center items-center pointer-events-none">

                <nav className="absolute w-full left-0 top-0 z-20 flex justify-between pointer-events-auto">
                    <img src="/logo.webp" alt="Logo" className="w-20 m-5 2xl:w-32 animate-pulse" />

                    <h2 className='font-copper m-4 2xl:text-2xl'>Email Here</h2>

                </nav>

                <PyramidIcon width={50} height={50}  className='text-3xl glow bottom-5 left-5 absolute' />

                <div className="text-center flex flex-col md:gap-y-2 select-none">
                    <div className="flex items-center justify-center gap-x-3 text-2xl md:text-4xl 2xl:text-6xl 2xl:gap-x-7">
                        <motion.h2 initial={{ x: -130, y: -150, opacity: 0 }} animate={{ x: 0, y: 0, opacity: 1 }} transition={{ duration: 3.5, delay: 1, ease: [0.16, 0.77, 0.47, .97] }} className='font-bold glow'>HEQET</motion.h2>
                    </div>

                    <div className="flex items-center justify-center gap-x-3 md:gap-x-4 text-4xl md:text-7xl 2xl:text-9xl 2xl:gap-x-8">
                        <motion.h2 initial={{ x: -140, y: -150, opacity: 0 }} animate={{ x: 0, y: 0, opacity: 1 }} transition={{ duration: 3.5, delay: 1, ease: [0.16, 0.77, 0.47, .97] }} className=' font-bold glow'>THE</motion.h2>
                        <motion.h2 initial={{ y: -150, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 3.5, delay: 1, ease: [0.16, 0.77, 0.47, .97] }} className=' font-bold glow'>PEPE</motion.h2>
                        <motion.h2 initial={{ x: 140, y: -150, opacity: 0 }} animate={{ x: 0, y: 0, opacity: 1 }} transition={{ duration: 3.5, delay: 1, ease: [0.16, 0.77, 0.47, .97] }} className='font-bold glow'>GODDESS</motion.h2>
                    </div>



                    <motion.div initial={{ y: 150, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 3.5, delay: 1, ease: [0.16, 0.77, 0.47, .97] }} className="pointer-events-auto">
                        <a href="https://app.uniswap.org/#/swap?outputCurrency=0x0000000000000000000000000000">
                        <button className="flex 2xl:w-[18rem] 2xl:h-[3.5rem] md:w-[14rem] w-[12rem] relative h-[2.7rem] mx-auto mt-8 group overflow-hidden transform hover:-translate-y-1 hover:scale-110 transition-all duration-300" >
  <div className="w-full h-full border-t-[1px] boder-white border-b-[1px] flex items-center justify-center font-copper group-hover:bg-white/30 group-hover:font-bold transition-bg ease-in-out duration-100 2xl:text-xl">
    <h2>BUY TOKEN</h2>
  </div>
</button>
</a>

                        <div className="flex items-center mt-2 justify-center gap-x-2 pointer-events-auto w-fit mx-auto cursor-pointer" onClick={handleCopy}>
                            
                        
                            <p className="font-copper text-sm  2xl:text-xl">{contractAddress}</p>
                            {debounce ? <BsClipboard2CheckFill /> : <BsClipboard className='' />}
                        </div>
                    </motion.div>


                </div>

                <div className="soc absolute text-white text-2xl bottom-4 right-4 gap-x-5 flex pointer-events-auto">
                    <button className='hover:scale-110'>
                        <a href="#" className="" rel="noopener noreferrer">
                            <FaTelegramPlane />
                        </a>
                    </button>

                    <button className='hover:scale-110'>
                        <a href="#" className="" rel="noopener noreferrer">
                            <SiTwitter />
                        </a>
                    </button>
                    <button className='hover:scale-110'>
                        <a href="#" className="" rel="noopener noreferrer">
                            <FaMediumM />
                        </a>
                    </button>
<button className='hover:scale-110'>
    <a href="#" className="" rel="noopener noreferrer">
        <SiLinktree />
    </a>
</button>
                        <button className='hover:scale-110'>
                        <a href="mailto:contact@heqet.com" className="" rel="noopener noreferrer">
                            <MdEmail />
                        </a>
                    </button>
                
                </div>

            </div>
        </section>
    )
}

export default Hero
