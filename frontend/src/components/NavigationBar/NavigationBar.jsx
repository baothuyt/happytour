import React, { useState, Fragment } from 'react';
import Logo from './../../assets/Logo.png';
import { MdOutlineDashboard } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { GrMapLocation } from "react-icons/gr";
import { LuTicket } from "react-icons/lu";
import { TbPlaneDeparture } from "react-icons/tb";
import { FaRegCommentDots } from "react-icons/fa";
import { LuLayers } from "react-icons/lu";
import RightArrow from "./../../assets/icons/rightArrow.svg";
import { motion } from "framer-motion";
import { Link, NavLink } from 'react-router-dom';
//import { createSlug } from '../../ultils/helpers'
import path from '../../ultils/path';
const navLinks = [
    {
        name: "Dashboard",
        icon: MdOutlineDashboard,
        link: "dashboard",
        type: 'SINGLE',
        path: `/${path.ADMIN}/${path.DASHBOARD}`
    },
    {
        name: "Users",
        icon: FiUsers,
        link: "user",
        type: 'SINGLE',
        path: `/${path.USERS}`

    },
    {
        name: "Bookings",
        icon: LuTicket,
        link: "booking",
        type: 'SINGLE',
        path: `/${path.BOOKINGPAGE}`

    },
    {
        name: "Categories",
        icon: LuLayers,
        link: "category",
        type: 'SINGLE',
        path: `/${path.CATEGORYPAGE}`

    },
    {
        name: "Tours",
        icon: GrMapLocation,
        link: "tour",
        type: 'SINGLE',
        path: `/${path.TOURPAGE}`

    },
    {
        name: "CreateTours",
        icon: GrMapLocation,
        link: "create",
        type: 'SINGLE',
        path: `/${path.CREATETOURS}`

    },
    {
        name: "Tour Active",
        icon: TbPlaneDeparture,
        link: "tour-active",
        type: 'SINGLE',
        path: `/${path.TOURACTIVEPAGE}`

    },
    {
        name: "Comments",
        icon: FaRegCommentDots,
        link: "comment",
        type: 'SINGLE',
        path: `/${path.COMMENTPAGE}`

    },
];

const variants = {
    expanded: { width: "20%" },
    nonExpanded: { width: "10%" },
};

const NavigationBar = () => {
    const [activeNavIndex, setActiveNavIndex] = useState(0)
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <motion.div
            animate={isExpanded ? "expanded" : "nonExpanded"}
            variants={variants}
            className={`px-10 py-8 flex flex-col border border-r-2 w-1/5 h-screen relative ${isExpanded ? "px-10" : "px-4"
                }`}>
            <div className='flex space-x-3 items-center'>
                <Link to='/'><img src={Logo} alt="logo images" className='w-36 h-auto' /></Link>
            </div>

            <div
                onClick={() => setIsExpanded((isExpanded) => !isExpanded)}
                className='w-5 h-5 bg-[#5DBC5D] rounded-full absolute -right-[10.5px] top-14 flex items-center justify-center cursor-pointer'>
                <img src={RightArrow} className={`w-[5px] transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
            </div>

            <div className='mt-10 flex flex-col space-y-8'>
                {navLinks.map((item, index) => (
                    <Link to={item.link} key={index} className={`flex no-underline text-inherit space-x-3 p-2 rounded ${isExpanded ? "" : "mx-auto"} ${activeNavIndex === index ? "bg-[#5DBC5D] text-white font-semibold" : ""}`}
                        onClick={() => setActiveNavIndex(index)}
                    >
                        <div className='text-2xl'>
                            <item.icon />
                        </div>
                        <span className={isExpanded ? "block" : "hidden"}>{item.name}</span>
                    </Link>
                ))}

            </div>
        </motion.div>
    )
}

export default NavigationBar;
