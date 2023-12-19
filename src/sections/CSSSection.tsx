import {Button} from "@/libs/buttons/button";


export const CSSSection = () => {
    return (
        <section className="py-[32px] bg-[#FFF4A3]">
            <div className="max-w-[1020px] w-full mx-auto px-4 h-full">
                <div className="flex items-center justify-center flex-wrap">
                    <div className="p-[3%] flex flex-col items-center justify-center gap-y-[16px] w-full lg:w-[49.50%]">
                        <h2 className="H2 -mt-[10px]">CSS</h2>
                        <p className={"H4"}>The language for styling web pages</p>

                        <Button className="bg-[#04AA6D] hover:bg-[#059862] text-white" btnLink="css_home"
                                btnText="Learn CSS"/>
                        <Button className="bg-[#ffffff] hover:bg-[#E7E9EB] text-black" btnLink="#"
                                btnText="Video Tutorial"/>
                        <Button className="bg-[#282A35] hover:bg-black text-white" btnLink="#"
                                btnText="CSS Reference"/>
                        <Button className="bg-[#FFC0C7] hover:bg-[#ffb3bb] text-black" btnLink="#"
                                btnText="Get Certified"/>

                    </div>
                    <div className="p-[3%] w-full lg:w-[49.50%]">
                        <div style={{boxShadow: "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)"}}>
                            <div className="p-[16px] bg-[#E7E9EB]">
                                <h3 className="text-[24px] font-semibold py-2]">CSS Example:</h3>
                                <div className="p-[12px] my-[16px] border-l-[4px] border-l-[#04AA6D] bg-white">
                                    <span className="cssselectorcolor" style={{color: "#a52a2a"}}>
                                        body <span className="cssdelimitercolor"
                                                   style={{color: "black !important"}}>{"{"}</span><span
                                        className="csspropertycolor" style={{color: "red !important"}}><br/>
                                        &nbsp; background-color<span className="csspropertyvaluecolor"
                                                                     style={{color: "#0000cd !important"}}><span
                                            className="cssdelimitercolor" style={{color: "black !important"}}>:</span> lightblue<span
                                            className="cssdelimitercolor"
                                            style={{color: "black !important"}}>;</span></span><br/></span><span
                                        className="cssdelimitercolor"
                                        style={{color: "black !important"}}>{"}"}</span><br/><br/>
                                        h1 <span className="cssdelimitercolor"
                                                 style={{color: "black !important"}}>{"{"}</span><span
                                        className="csspropertycolor" style={{color: "red"}}><br/>
                                        &nbsp; color<span className="csspropertyvaluecolor"
                                                          style={{color: "#0000cd !important"}}><span
                                            className="cssdelimitercolor" style={{color: "black !important"}}>:</span> white<span
                                            className="cssdelimitercolor"
                                            style={{color: "black !important"}}>;</span></span><br/>
                                        &nbsp; text-align<span className="csspropertyvaluecolor"
                                                               style={{color: "#0000cd !important"}}><span
                                            className="cssdelimitercolor" style={{color: "black !important"}}>:</span> center<span
                                            className="cssdelimitercolor"
                                            style={{color: "black !important"}}>;</span></span><br/></span><span
                                        className="cssdelimitercolor"
                                        style={{color: "black !important"}}>{"}"}</span><br/><br/>p <span
                                        className="cssdelimitercolor"
                                        style={{color: "black !important"}}>{"{"}</span><span className="csspropertycolor"
                                                                                         style={{color: "red !important"}}><br/>&nbsp; font-family<span
                                        className="csspropertyvaluecolor" style={{color: "#0000cd !important"}}><span
                                        className="cssdelimitercolor" style={{color: "black !important"}}>:</span> verdana<span
                                        className="cssdelimitercolor"
                                        style={{color: "black !important"}}>;</span></span><br/></span><span
                                        className="cssdelimitercolor"
                                        style={{color: "black !important"}}>{"}"}</span> </span>
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