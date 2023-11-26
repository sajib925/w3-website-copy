import {Button} from "@/libs/buttons/button";


export const CSection = () => {
    return (
        <section className="py-[32px] bg-[#96D4D4]">
            <div className="max-w-[1020px] w-full mx-auto px-4 h-full">
                <div className="flex items-center justify-center">
                    <div className="p-[3%] flex flex-col items-center justify-center gap-y-[16px] w-[49.50%]">
                        <h2 className="text-black text-[100px] font-bold -mt-[10px]">C</h2>
                        <p className={"text-black text-[19px] font-semibold"}>The language for building web pages</p>

                        <Button className="bg-[#04AA6D] hover:bg-[#059862] text-white" btnLink="/c_home"
                                btnText="Learn C"/>
                        <Button className="bg-[#FFF4A3] hover:bg-[#E7E9EB] text-black" btnLink="#"
                                btnText="Video Tutorial"/>
                        <Button className="bg-[#ffffff] hover:bg-[#E7E9EB] text-black" btnLink="#"
                                btnText="C Reference"/>
                        <Button className="bg-[#FFC0C7] hover:bg-[#ffb3bb] text-black" btnLink="#"
                                btnText="Get Certified"/>

                    </div>
                    <div className="p-[3%] w-[49.50%]">
                        <div style={{boxShadow: "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)"}}>
                            <div className="p-[16px] bg-[#E7E9EB]">
                                <h3 className="text-[24px] font-semibold py-2]">Javascript Example:</h3>
                                <div className="p-[12px] py-[16px] border-l-[4px] border-l-[#04AA6D] bg-white">
                                    <div className="h-[210px]">
                                        <span className="text-black" >{"#include <stdio.h>"}</span><br/><br/>
                                        <span className="text-[#0000cd]">int</span>
                                        <span className="text-black">{"  main() {"}</span><br/>
                                        <span className="pl-4 text-black">{"printf("}</span>
                                        <span className="text-[#a52a2a]">{"\"hello world\""}</span>
                                        <span className="text-black">{");"}</span><br/>
                                        <span className="text-[#0000cd] pl-4">return</span>
                                        <span className="text-[red] pl-2">0</span>
                                        <span className="text-black">{";"}</span><br/>
                                        <span className="text-black" >{"}"}</span>
                                    </div>

                                </div>
                                <Button className="bg-[#04AA6D] hover:bg-[#059862] text-white" btnLink="#"
                                        btnText="Try it Yourself"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
)
}