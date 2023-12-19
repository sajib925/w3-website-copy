import {Button} from "@/libs/buttons/button";


export const PythonSection = () => {
    return (
        <section className="py-[32px] bg-[#F3ECEA]">
            <div className="max-w-[1020px] w-full mx-auto px-4 h-full">
                <div className="flex items-center justify-center flex-wrap">
                    <div className="p-[3%] flex flex-col items-center justify-center gap-y-[16px] w-full lg:w-[49.50%]">
                        <h2 className="H2 -mt-[10px]">Python</h2>
                        <p className={"H4"}>A popular programming language</p>

                        <Button className="bg-[#04AA6D] hover:bg-[#059862] text-white" btnLink="python_home"
                                btnText="Learn Python"/>
                        <Button className="bg-[#FFF4A3] hover:bg-[#96D4D4] text-black" btnLink="#"
                                btnText="Video Tutorial"/>
                        <Button className="bg-[#282A35] hover:bg-black text-white" btnLink="#"
                                btnText="Python Reference"/>
                        <Button className="bg-[#FFC0C7] hover:bg-[#ffb3bb] text-black" btnLink="#"
                                btnText="Get Certified"/>

                    </div>
                    <div className="p-[3%] w-full lg:w-[49.50%]">
                        <div style={{boxShadow: "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)"}}>
                            <div className="p-[16px] bg-[#E7E9EB]">
                                <h3 className="text-[24px] font-semibold py-2]">Javascript Example:</h3>
                                <div
                                    className="p-[12px] my-[16px] h-[210px] border-l-[4px] border-l-[#04AA6D] bg-white">
                                    <span className="jscolor" style={{color: "black !important"}}><span
                                        style={{color: "red !important"}}>
</span>    <span className="jskeywordcolor" style={{color: "#0000cd !important"}}>if</span> <span
                                        style={{color: "red !important"}}>5</span> &gt;
                                        <span
                                            style={{color: "red !important"}}>2</span>:<br/>&nbsp; print(<span

                                            style={{color: "#a52a2a !important"}}>{"\"Five is greater than two!\""}</span>)<span
                                            style={{color: "red !important"}}>
</span>   </span>
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