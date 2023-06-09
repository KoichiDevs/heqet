import React, { useState } from 'react'
import HeroCanvas from '../canvas/HeroCanvas'
import { GiLilyPads } from 'react-icons/gi'
import { motion } from 'framer-motion'
import { FaTelegramPlane, FaMediumM } from 'react-icons/fa'
import { SiTwitter, SiLinktree } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'
import { BsClipboard, BsClipboard2CheckFill } from 'react-icons/bs'

const Hero = () => {

    const [contractAddress, setContract] = useState('0x609F7405871D134BD383F31B3255bA91A0E82F16')
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
                <div className="flex items-center">
  <img src="/logo.webp" alt="Logo" className="w-20 m-5 2xl:w-32 animate-pulse" />
  <div className="flex flex-col">
  <h2 className="font-copper text-lg text-blue-600 1xl:text-sm"><svg className="inline-block w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
    0/0 Tax</h2>
  <h2 className="font-copper text-lg text-blue-600 1xl:text-sm"><svg className="inline-block w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
    100 Million Supply</h2>
  <h2 className="font-copper text-lg text-blue-600 1xl:text-sm"><svg className="inline-block w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
    Burned LP</h2>
</div>

</div>

                    <h2 className='font-copper text-sm  1xl:text-sm'>Contract Address: {contractAddress}</h2>
                    
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
                        


<div className="flex flex-col items-center mt-2 justify-center gap-x-2 pointer-events-auto w-fit mx-auto">
  <p className="font-copper text-sm 1xl:text-sm my-2">
    Seen by many as the Goddess of fertility, Heqet is probably the oldest representation of a frog humanity has ever seen. 
  </p>
  <p className="font-copper text-sm 1xl:text-sm my-2">
    I started being worshipped around 3500 years before Christ. During the Early Dynastic Period in Egypt.
  </p>
  <p className="font-copper text-sm 1xl:text-sm my-2">
    My name has been written in the Pyramid Texts, the oldest ancient Egyptian funerary texts, over 4000 years ago.
  </p>
  <p className="font-copper text-sm 1xl:text-sm my-2">
    I'm mainly known for the birth of Horus - or you can say the resurrection of Osiris.
  </p>
  <p className="font-copper text-sm 1xl:text-sm my-2">
    I'm half frog half human and the time where frogs and humans reunite is once again upon us.
  </p>
  <p className="font-copper text-sm 1xl:text-sm my-2">
    Hail the amphibians, Hail Pepe, Hail Heqet.
  </p>
</div>
<a href="https://app.uniswap.org/#/swap?outputCurrency=0x609F7405871D134BD383F31B3255bA91A0E82F16">
                        <button className="flex 2xl:w-[18rem] 2xl:h-[3.5rem] md:w-[14rem] w-[12rem] relative h-[2.7rem] mx-auto mt-8 group overflow-hidden transform hover:-translate-y-1 hover:scale-110 transition-all duration-300" >
  <div className="w-full h-full border-t-[1px] boder-white border-b-[1px] flex items-center justify-center font-copper group-hover:bg-white/30 group-hover:font-bold transition-bg ease-in-out duration-100 2xl:text-xl">
    <h2>BUY TOKEN</h2>
  </div>
</button>
</a>
                    </motion.div>


                </div>

                <div className="soc absolute text-white text-2xl bottom-4 right-4 gap-x-5 flex pointer-events-auto">
                    <button className='hover:scale-110'>
                        <a href="https://t.me/heqet_portal" className="" rel="noopener noreferrer">
                            <FaTelegramPlane />
                        </a>
                    </button>

                    <button className='hover:scale-110'>
                        <a href="https://twitter.com/Heqet_Erc20" className="" rel="noopener noreferrer">
                            <SiTwitter />
                        </a>
                    </button>
                    <button className='hover:scale-110'>
                        <a href="https://medium.com/@xkvltcf/heqet-the-godd-f65874a78dd8" className="" rel="noopener noreferrer">
                            <FaMediumM />
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
