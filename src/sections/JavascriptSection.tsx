import {Button} from "@/libs/buttons/button";


export const JavascriptSection = () => {
    return (
        <section className="py-[32px] bg-[#282A35]">
            <div className="max-w-[1020px] w-full mx-auto px-4 h-full">
                <div className="flex items-center justify-center">
                    <div className="p-[3%] flex flex-col items-center justify-center gap-y-[16px] w-[49.50%]">
                        <h2 className="text-white text-[100px] font-bold -mt-[10px]">Javascript</h2>
                        <p className={"text-white text-[19px] font-semibold"}>The language for building web pages</p>

                        <Button className="bg-[#04AA6D] hover:bg-[#059862] text-white" btnLink="javascript_page"
                                btnText="Learn Javascript"/>
                        <Button className="bg-[#FFF4A3] hover:bg-[#E7E9EB] text-black" btnLink="#"
                                btnText="Video Tutorial"/>
                        <Button className="bg-[#ffffff] hover:bg-[#E7E9EB] text-black" btnLink="#"
                                btnText="Javascript Reference"/>
                        <Button className="bg-[#FFC0C7] hover:bg-[#ffb3bb] text-black" btnLink="#"
                                btnText="Get Certified"/>

                    </div>
                    <div className="p-[3%] w-[49.50%]">
                        <div style={{boxShadow: "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)"}}>
                            <div className="p-[16px] bg-[#E7E9EB]">
                                <h3 className="text-[24px] font-semibold py-2]">Javascript Example:</h3>
                                <div className="p-[12px] my-[16px] border-l-[4px] border-l-[#04AA6D] bg-white">
                                        <span className="text-[#a52a2a]" style={{color: "#a52a2a !important"}}><span
                                            className="tagcolor"
                                        >&lt;</span>button<span
                                            className="attributecolor"> onclick<span
                                            className="attributevaluecolor"
                                        >={"myFunction()"}</span></span><span
                                            className="tagcolor">&gt;</span></span>Click
                                    Me!<span className="tagnamecolor"><span className="tagcolor"
                                >&lt;</span>/button<span
                                    className="tagcolor">&gt;</span></span><br/><br/>
                                    <span className="tagnamecolor"><span className="tagcolor"
                                    >&lt;</span>script<span
                                        className="tagcolor">&gt;</span></span><span
                                    className="jscolor"><br/>
<span className="jskeywordcolor">function</span> myFunction() {"{"}<br/><span
                                        className="jsnumbercolor">
</span>     &nbsp; <span className="jskeywordcolor">let</span> x = document.<span
                                        className="jspropertycolor">getElementById</span>{"("}<span
                                        className="jsstringcolor">{"\"demo\""}</span>);<br/><span
                                        className="jsnumbercolor">
</span>&nbsp; x.<span className="jspropertycolor">style</span>.<span className="jspropertycolor"
                                    >fontSize</span> = <span
                                        className="jsstringcolor">{"25px"}</span>; <br/><span
                                        className="jsnumbercolor">
</span>&nbsp; x.<span className="jspropertycolor">style</span>.<span className="jspropertycolor"
                                    >color</span> = <span
                                        className="jsstringcolor">{"red"}</span>; <br/>{"}"}<br/>
                                    </span><span className="tagnamecolor"><span className="tagcolor"
                                >&lt;</span>/script<span
                                    className="tagcolor">&gt;</span></span>
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