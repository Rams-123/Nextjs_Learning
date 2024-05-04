import React from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import { FiMail } from "react-icons/fi";
import Image from 'next/image';
import Link from 'next/link';
const sidebarItems = [
    {
        name: "Home",
        href: "/",
        icon: AiOutlineHome,
    },
    {
        name: "About",
        href: "/about",
        icon: BsPeople,
    },
    {
        name: "Mails",
        href: "/mails",
        icon: FiMail,
    },
    {
        name: "Contact",
        href: "/contact",
        icon: TiContacts,
    },
    {
        name: "Coins",
        href: "/contact",
        icon: TiContacts,
    },
]

const SideNav = () => {


    return (
        <div className='flex relative border-4 w-68'>
            <aside className='flex flex-col w-full bg-gary-100 dark:bg-gray-800 p-4 transition-all duration-500 ease-in-out'>
                <div className='flex  items-center gap-4 pb-4 border border-gray-300'>
                    <Image width={80}
                        height={80}
                        className=' w-14 h-14 rounded-full'
                        src={"/logo.jpg"} alt='logo'
                    />
                    <p className='text-lg font-semibold text-white'>The LU Labs</p>
                </div>
                <ul className='list-none'>
                    {sidebarItems.map(({ name, href, icon: Icon }) => {
                        return (
                            <li key={name} className='mb-4 w-full'>
                                <Link className='flex items-center gap-2 py-2 px-4 rounded-lg text-sm text-gray-800 dark:text-gray-200 hover:text-gray-900 ' href={href}>
                                    <span className='text-lg'><Icon /></span>
                                    <span>{name}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </aside>
        </div>
    )
}

export default SideNav