"use client"
import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { c_sidebar } from '@/Static_Data/c_sidebar';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa6';
import { usePathname } from 'next/navigation';

export default function CSSDashboardLayout({
                                            children,
                                        }: {
    children: React.ReactNode;
}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const pathname = usePathname();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <Navbar />
            <div className="lg:flex lg:items-center lg:justify-center relative">
                <span className="fixed right-[8px] top-[65px] lg:hidden w-[32px] h-[32px] bg-primaryColor text-white flex items-center justify-center cursor-pointer"
                      onClick={toggleSidebar}
                >
              <FaBars />
            </span>
                <div className={`w-[250px] fixed lg:hidden h-screen overflow-auto pb-[24px] pt-[65px] bg-[#E7E9EB] transition-all ease-in-out duration-300 ${isSidebarOpen ? 'left-0 opacity-100' : '-left-[100%] opacity-0'}`}>
                    <div className="flex items-start flex-col gap-1">
                        {c_sidebar.map((item) => (
                            <Link
                                href={item.textLink}
                                key={item.id}
                                className={`pl-[16px] w-full block py-1 ${
                                    item.textLink == '#'
                                        ? 'H4 my-[16px] cursor-auto'
                                        : pathname == item.textLink
                                            ? 'Sidebar-active'
                                            : 'Sidebar-item'
                                }`}
                                onClick={toggleSidebar}
                            >
                                {item.text}
                            </Link>
                        ))}
                    </div>
                </div>
                <div
                    className={`hidden lg:block lg:w-[22%] xl:w-[15%] h-screen overflow-auto py-[65px] bg-[#E7E9EB]`}
                >
                    <div className="flex items-start flex-col gap-1 mt-6 ">
                        {c_sidebar.map((item) => (
                            <Link
                                href={item.textLink}
                                key={item.id}
                                className={`lg:pl-[16px] xl:pl-[32px] w-full block py-1 ${
                                    item.textLink == '#'
                                        ? 'H4 my-[16px] cursor-auto'
                                        : pathname == item.textLink
                                            ? 'Sidebar-active'
                                            : 'Sidebar-item'
                                }`}
                            >
                                {item.text}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="w-full lg:w-[78%] xl:w-[85%] h-screen overflow-auto px-[16px] md:px-[24px] lg:px-[32px] py-[100px]">
                    {children}
                </div>
            </div>
        </>
    );
}
