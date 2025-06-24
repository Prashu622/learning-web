import React, { useEffect, useRef } from 'react';

import Typewriter from 'typewriter-effect';
import { AiOutlineDownload } from "react-icons/ai";

import Lottie from 'lottie-web';
import { Link } from 'react-router-dom';
const Banner = () => {
    
    const container =useRef(null)
    useEffect(()=>{
        const instance = Lottie.loadAnimation({
            container:container.current,
            renderer:'svg',
          
            autoplay:true,
            animationData:require('./banner.json')
        })
        return () => instance.destroy();
     
    },[])
    return (
        <div className='bg-gradient-to-r from-transparent to-indigo-600/10 md:border-t md:border-t-primary rounded-b-md '>
           <div className='grid  md:grid-cols-2'>
            {/* //text-content */}
            <div className='mx-auto self-center md:px-10 px-5'  >
            <h2 className='text-2xl  md:text-3xl lg:text-4xl font-bold '>Complete Your Dream 
                <h2 className='text-primary mt-2'>
                <Typewriter 
                        options={{
                            strings: ['At Our Own Space', 'For Further Expansion' ,'Expand Your Possibilities'],
                            autoStart: true,
                            loop: true,
                            
                        }}
                        />
                </h2>
            </h2>

            <p className='text-justify my-4 md:text-lg text-sm'  data-aos="fade-right">
            Learning is a life-long journey that in fact we never find the terminate  stop. Stop searching, enjoy the process.
            </p>

           <p>
           <Link to='/login' className='btn  btn-primary  rounded-sm gap-2 text-white'><AiOutlineDownload className='text-lg font-bold'></AiOutlineDownload> DownLoad Content</Link>
           </p>
            </div>

            {/* //lottie */}
          
            <div className='container w-75 h-75' ref={container}></div>
           </div>
        </div>
    );
};

export default Banner;