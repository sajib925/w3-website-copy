import {Navbar} from "@/components/Navbar";
import {c_sidebar} from "@/Static_Data/c_sidebar";
import Link from "next/link";


export default function HTMLDashboardLayout({
                                            children,
                                        }: {
    children: React.ReactNode
}) {
    return (

        <>
        <Navbar/>
        <div className="lg:flex lg:items-center lg:justify-center lg:pt-[65px] ">
            <div className="w-[15%] h-screen overflow-auto lg:p-[32px] bg-[#E7E9EB]">
                <div className="">
                    <h4 className="text-[21px] font-bold">C Tutorial</h4>
                    <div className="flex items-start flex-col gap-4 mt-6">
                        {
                            c_sidebar.map((item) => (
                                <Link href={item.textLink} key={item.id} className={`${item.textLink == "#" ? "font-bold text-[21px]": "font-normal text-[16px]"}`}>{item.text}</Link>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="w-[85%] h-screen overflow-auto lg:p-[32px]">
                {children}
            </div>
        </div>

        </>
    )
}
