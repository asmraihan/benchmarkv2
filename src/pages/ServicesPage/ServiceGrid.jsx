import React, { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { FaUniversity, FaGlobeAmericas } from "react-icons/fa";
import { MdTravelExplore, MdOutlineCardTravel, MdOutlineAssessment, MdAssistantNavigation, MdDesignServices } from "react-icons/md";

const gridItems = [
    {
        title: "Immigration Services",
        description: "Benchmark Career Development Centre & Education Consultancy",
        link: "https://algochurn.com",
        icon: <span className="p-5 rounded-full bg-green-300 text-white shadow-lg shadow-teal-200 z-10">
            <FaGlobeAmericas size={36} className='text-blue-600' />
        </span>
    },
    {
        title: "Consultation",
        description: "Consultation Service offers you the opportunity to visit Immigration Consultants having a profound knowledge of the Visa Application Processes..",
        link: "https://algochurn.com",
        icon: <span className="p-5 rounded-full bg-yellow-300 text-white shadow-lg shadow-yellow-200 z-10">
            <FaUniversity size={36} className='text-green-600' />
        </span>
    },
    {
        title: "Eligibility Assessment",
        description: "Our Online Assessment will help you find out if you are eligible to apply for a Visitor Visa. Register below to take the Assessment and view your results.",
        link: "https://algochurn.com",
        icon: <span className="p-5 rounded-full bg-emerald-300 text-white shadow-lg shadow-emerald-200 z-10">
            <MdDesignServices size={36} className='text-amber-600' />
        </span>
    },
    {
        title: "Application Processing",
        description: "Assess your Canadian immigration eligibility for free Determine your immigration category based on your credentials for free.",
        link: "https://algochurn.com",
        icon: <span className="p-5 rounded-full bg-red-300 text-white shadow-lg shadow-red-200 z-10">
            <MdOutlineCardTravel size={36} className='text-red-600' />
        </span>
    },
    {
        title: "Client Assistance",
        description: "Client Assistance Program provides a direct one-on-one comprehensive information and referral assistance on basic needs and safety net services.",
        link: "https://algochurn.com",
        icon: <span className="p-5 rounded-full bg-blue-300 text-white shadow-lg shadow-blue-200 z-10">
            <MdAssistantNavigation size={36} className='text-blue-600' />
        </span>

    },
    {
        title: "Pre-Landing Services",
        description: "Assist client in assessment/ evaluation of their qualification from the professional bodies and/or educational institutions in the country of immigration.",
        link: "https://algochurn.com",
        icon: <span className="p-5 rounded-full bg-amber-300 text-white shadow-lg shadow-amber-200 z-10">
            <MdTravelExplore size={36} className='text-amber-600' />
        </span>

    },
];
const ServiceGrid = () => {
    let [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="px-3 md:lg:xl:px-40 py-20 bg-opacity-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:xl:grid-cols-3 group bg-zinc-50 shadow-xl shadow-neutral-100 border rounded-xl">
                {gridItems.map((item, idx) => (
                    <div
                        key={idx}
                        className="relative p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer rounded-xl"
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <AnimatePresence>
                            {hoveredIndex === idx && (
                                <motion.span
                                    className="absolute inset-0 h-full w-full bg-amber-100/[0.5] block  rounded-xl text-neutral-950"
                                    layoutId="hoverBackground" // required for the background to follow
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: 1,
                                        transition: { duration: 0.15 },
                                    }}
                                    exit={{
                                        opacity: 0,
                                        transition: { duration: 0.15, delay: 0.2 },
                                    }}
                                />
                            )}
                        </AnimatePresence>

                        {item.icon}

                        <p className="text-xl font-medium text-black mt-3 z-10">
                            {item.title}
                        </p>
                        <p className="mt-2 text-sm text-dark z-10">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
            {/* Rest of your component code... */}
        </div>
    )
}

export default ServiceGrid