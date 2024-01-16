"use client"
import Link from "next/link";
import {menuItems} from "@/Static_Data/menuItems";
import { FaBars } from "react-icons/fa";
import {useState} from "react";


export const Navbar = () => {
    const [isMenuOpen, setSetIsMenuOpen] = useState(false);


    return (
        <header className="w-full py-5 bg-gray-900 z-50 fixed">
            <div className="px-4 lg:px-8">
                <div className="flex items-center justify-between">
                    <Link href="/" className={"font-bold text-white px-2 uppercase z-50 italic"}>
                        বাংলায় কোডিং
                    </Link>

                    <div className={`fixed left-0 right-0 ease-in-out duration-500 h-full z-11  ${isMenuOpen? 'top-0': 'top-[-1000px]'}`}>
                        <div className="flex flex-col items-center justify-center gap-y-2 pt-16 pb-4 bg-gray-900">
                            {
                                menuItems.map((item) => (
                                    <Link href={item.menuLink} key={item.id} className={"font-semibold text-white uppercase py-2"}>
                                        {item.menuItem}
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                    <div className="hidden lg:flex items-center gap-x-2">
                        {
                            menuItems.map((item) => (
                                <Link href={item.menuLink} key={item.id} className={"font-semibold text-white uppercase px-2"}>
                                    {item.menuItem}
                                </Link>
                            ))
                        }
                    </div>
                    <div className="block lg:hidden text-white z-50" onClick={() => setSetIsMenuOpen(!isMenuOpen)}>
                        <FaBars />
                    </div>
                </div>
            </div>
        </header>
    )
}