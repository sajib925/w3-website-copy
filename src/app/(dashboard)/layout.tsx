"use client"
import {Navbar} from "@/components/Navbar";
import {c_sidebar} from "@/Static_Data/c_sidebar";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function DashboardLayout({
                                            children,
                                        }: {
    children: React.ReactNode
}) {
    const pathname = usePathname()
    return (

        <>
            <Navbar/>
            <div className="lg:flex lg:items-center lg:justify-center">
                <div className="w-[15%] h-screen overflow-auto py-[65px] bg-[#E7E9EB]">
                    <div className="">
                        <div className="flex items-start flex-col gap-1 mt-6 ">
                            {
                                c_sidebar.map((item) => (
                                    <Link href={item.textLink} key={item.id}
                                          className={`pl-[32px] w-full block py-1 ${item.textLink == "#" ? "H4 my-[16px] cursor-auto" : pathname == item.textLink ? "Sidebar-active" : "Sidebar-item"}`}>{item.text}</Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="w-[85%] h-screen overflow-auto lg:px-[32px] py-[100px]">
                    {children}
                </div>
            </div>

        </>
    )
}
