import React from "react";
import { BsArrowRight } from "react-icons/bs";
import BlogCards from "../../components/BlogCards";
import VideoSection from "./VideoSection";
import { motion } from "framer-motion";
const Blogs = () => {

  const PreviewAnimation = {
    initial: {
      y: 30,
      opacity: 0,
      scale: 0.9
    },
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        ease: [0.6, 0.01, 0.05, 0.95],
        duration: 0.8,
      }
    }
  }

  return (
    <div className="text-white lg:px-24 px-4">
      {/* blog top */}
      <div>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={PreviewAnimation}
          className=" text-center leading-snug  mx-auto text-6xl flex justify-center font-bold md:px-20 text-gradient bg-gradient-to-r from-[#ffa31d] to-[#ed1c24] bg-clip-text text-transparent">
          Our agile process is ability to adapt and respond to change
        </motion.div>
        {/* video player */}
        <VideoSection />
      </div>

      <div className="h-28"></div>
      {/* main blog */}
      <div className="relative" id="blogs">
        <div
          className="flex flex-col lg:flex-row justify-between lg:items-center gap-12"
          id="services"
        >
          {/* contents */}
          <div className="lg:w-1/2 space-y-5 z-30">
            <h4 className="text-black font-semibold text-2xl">Our Activities</h4>
            <h2 className="text-5xl text-dark font-bold mb-5 leading-snug">
              Explore recent events
            </h2>
            <a
              className="inline-flex items-center gap-2 font-semibold mt-5 hover:underline underline-offset-4 text-black hover:text-orange transition-all ease-in duration-300"
              href="/"
            >
              <span>More on Our Facebook</span>
              <BsArrowRight />
            </a>
          </div>

          {/* cards */}
          <div className="lg:w-2/3 my-8">


            {/* blog cards */}
            <BlogCards />

            {/* <div className="w-full mx-auto relative ">
              <button className="lg:absolute right-0 mt-8 px-6 py-2 bg-white text-black rounded hover:bg-orange hover:text-white transition-all duration-300 hover:-translate-y-3">
                Read More
              </button>
            </div> */}
          </div>
        </div>

        {/* shapes */}
        <div className="hidden lg:block">
          <div className="cs-shape_4 mx-32 -my-28"></div>
          <div className="cs-shape_4 -my-32"></div>
        </div>
        <div className="lg:h-60 h-8"></div>
      </div>
    </div>
  );
};

export default Blogs;
