import { IoSearch } from "react-icons/io5";
import Link from "next/link";


export const Hero = () => {

    return (

            <section className="relative pt-[230px] pb-[200px] w-full h-full bg-[url('/image/use-svg-as-background-image-particle-strokes.svg')]">
                <div className="max-w-screen-2xl w-full mx-auto px-4 h-full">
                    <div className="flex items-center justify-center gap-[30px] flex-col h-full">
                        <h1 className="text-white text-[100px] font-bold">Learn to Code</h1>
                        <h3 className="text-2xl text-[#FFF4A3] font-bold">{"With the world's largest web developer site."}</h3>
                        <div className="max-w-[500px] w-full flex items-center justify-center overflow-hidden rounded-[25px]">
                            <input placeholder="Search our tutorials e.g. HTMLSection" className="py-[10px] pr-[10px] pl-[28px] w-[75%] outline-none"/>
                            <div className='text-white p-[10px] bg-[#04AA6D] w-[25%] flex items-center justify-center cursor-pointer'>
                                <IoSearch className="w-[22px] h-[24px]"/>
                            </div>
                        </div>
                        <Link href="#" className="text-white text-2xl font-bold underline hover:text-[#FFF4A3] transition-all ease-in-out duration-300">Not Sure Where To Begin?</Link>
                    </div>
                </div>

            </section>

    )
}