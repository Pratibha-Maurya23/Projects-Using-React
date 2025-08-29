import { div } from "motion/react-client";
import thambnailImg from "../assets/video-thumbnail.webp";
import { FaPlay } from "react-icons/fa6";
import React, { useState } from "react";
import { MdArrowCircleRight } from "react-icons/md";
import {motion} from 'framer-motion'
import {fadeIn} from '../utils/animationVarient.js'

const About = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const handleCloseVideo = () => {
    setIsVideoPlaying(false);
  };
  return (
    <div id="about" className="bg-[#f7f8fc] pb-16 pt-20">
      <motion.div 
       variants={fadeIn("down",0.2)}
        initial="hidden"
        animate="show"
        viewport={{once: false, amount:0.7}}
      className="container mx-auto">
        <div className="py-12 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* left side */}

          <div className="md:w-1/2 w-full mb-8 md:mb-0">
            {!isVideoPlaying ? (
              <div className="relative ">
                <img
                  src={thambnailImg}
                  alt="video thambnail"
                  className="w-full md:h-[446px] h-auto rounded-lg object-cover"
                />
                <button
                  onClick={handleVideoPlay}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full p-3 shadow-lg cursor-pointer"
                >
                  <FaPlay className="size-6 text-white" />
                </button>
              </div>
            ) : (
              <div></div>
            )}
          </div>

          {/* right side */}

          <div className="md:w-1/2 w-full">
            <h2 className=" text-3xl capitalize font-secondary font-semibold mb-4 leading-snug">
              Individual Consult And Therapy
            </h2>
            <p className="text-lg mb-12 md:pr-8">
              We lower our stress levels, we get to know our pain , we connect
              better, we improve our focus, ander're kinder to ourselves/ Let us
              talk you though the basic in our new mindful guide on how to
              meditate.
            </p>
            <button className="bg-primary text-white py-3.5 px-8 font-medium rounded-md hover:bg-primary/90">
              <a href="#contact" className="flex gap-1 items-center">
                <span>Get Started</span>
                <MdArrowCircleRight />
              </a>
            </button>
          </div>
          
        </div>

        {isVideoPlaying && (
          <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50">
            <div className="relative w-full h-full flex items-center justify-center">
               <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/8JgDybnESLw?autoplay=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className='rounded-lg'
                ></iframe>
              <button
                onClick={handleCloseVideo}
                className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
              >
                X
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default About;
