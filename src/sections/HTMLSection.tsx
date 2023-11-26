import {Button} from "@/libs/buttons/button";


export const HTMLSection = () => {
    return (
        <section className="py-[32px] bg-[#D9EEE1]">
            <div className="max-w-[1020px] w-full mx-auto px-4 h-full">
                <div className="flex items-center justify-center">
                    <div className="p-[3%] flex flex-col items-center justify-center gap-y-[16px] w-[49.50%]">
                        <h2 className="text-black text-[100px] font-bold -mt-[10px]">HTML</h2>
                        <p className={"text-black text-[19px] font-semibold"}>The language for building web pages</p>

                        <Button className="bg-[#04AA6D] hover:bg-[#059862] text-white" btnLink="html_home"
                                btnText="Learn HTML"/>
                        <Button className="bg-[#FFF4A3] hover:hover:bg-[#fff080] text-black" btnLink="#"
                                btnText="Video Tutorial"/>
                        <Button className="bg-[#282A35] hover:bg-black text-white" btnLink="#"
                                btnText="HTML Reference"/>
                        <Button className="bg-[#FFC0C7] hover:bg-[#ffb3bb] text-black" btnLink="#"
                                btnText="Get Certified"/>

                    </div>
                    <div className="p-[3%] w-[49.50%]">
                        <div style={{boxShadow: "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)"}}>
                            <div className="p-[16px] bg-[#E7E9EB]">
                                <h3 className="text-[24px] font-semibold py-2]">HTMLSection Example:</h3>
                                <div className="p-[12px] my-[16px] border-l-[4px] border-l-[#04AA6D] bg-white">
                                        <span className="text-[#a52a2a]"><span style={{color: "#0000cd !important"}}
                                        >&lt;</span>!DOCTYPE<span
                                            style={{color: "#FF0052 !important"}}> html</span><span
                                            style={{color: "#0000cd !important"}}>&gt;</span></span><br/>
                                    <span className="text-[#a52a2a]"><span style={{color: "#0000cd !important"}}
                                    >&lt;</span>html<span
                                        style={{color: "#0000cd !important"}}>&gt;</span></span><br/><span
                                    className="text-[#a52a2a]"><span style={{color: "#0000cd !important"}}
                                >&lt;</span>head<span
                                    style={{color: "#0000cd !important"}}>&gt;</span></span><br/>
                                    <span className="text-[#a52a2a]"><span style={{color: "#0000cd !important"}}
                                    >&lt;</span>title<span
                                        style={{color: "#0000cd !important"}}>&gt;</span></span>HTMLSection
                                    Tutorial<span className="text-[#a52a2a]"><span
                                    style={{color: "#0000cd !important"}}>&lt;</span>/title<span
                                    style={{color: "#0000cd !important"}}>&gt;</span></span><br/><span
                                    className="text-[#a52a2a]"><span style={{color: "#0000cd !important"}}
                                >&lt;</span>/head<span
                                    style={{color: "#0000cd !important"}}>&gt;</span></span><br/>
                                    <span className="text-[#a52a2a]"><span style={{color: "#0000cd !important"}}
                                    >&lt;</span>body<span
                                        style={{color: "#0000cd !important"}}>&gt;</span></span><br/><br/>
                                    <span className="text-[#a52a2a]"><span style={{color: "#0000cd !important"}}
                                    >&lt;</span>h1<span
                                        style={{color: "#0000cd !important"}}>&gt;</span></span>This is a
                                    heading<span className="text-[#a52a2a]"><span style={{color: "#0000cd !important"}}
                                >&lt;</span>/h1<span
                                    style={{color: "#0000cd !important"}}>&gt;</span></span><br/>
                                    <span className="text-[#a52a2a]"><span style={{color: "#0000cd !important"}}
                                    >&lt;</span>p<span
                                        style={{color: "#0000cd !important"}}>&gt;</span></span>This is a
                                    paragraph.<span className="text-[#a52a2a]"><span
                                    style={{color: "#0000cd !important"}}>&lt;</span>/p<span
                                    style={{color: "#0000cd !important"}}>&gt;</span></span><br/><br/>
                                    <span className="text-[#a52a2a]"><span style={{color: "#0000cd !important"}}
                                    >&lt;</span>/body<span
                                        style={{color: "#0000cd !important"}}>&gt;</span></span><br/>
                                    <span className="text-[#a52a2a]"><span style={{color: "#0000cd !important"}}
                                    >&lt;</span>/html<span
                                        style={{color: "#0000cd !important"}}>&gt;</span></span>
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