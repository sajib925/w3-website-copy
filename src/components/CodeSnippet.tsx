export const CodeSnippet = () => {
    return (
        <div className="w-full bg-grayColor p-4 rounded-3xl">
            <h4 className="H4 font-normal py-2">myfirstprogram.c</h4>
            <div className="p-[12px] py-[16px] border-l-[4px] border-l-[#04AA6D] bg-white">
                <span className="text-black">{"#include <stdio.h>"}</span><br/><br/>
                <span className="text-[#0000cd]">int</span>
                <span className="text-black">{"  main() {"}</span><br/>
                <span className="pl-4 text-black">{"printf("}</span>
                <span className="text-[#a52a2a]">{"\"Hello World\""}</span>
                <span className="text-black">{");"}</span><br/>
                <span className="text-[#0000cd] pl-4">return</span>
                <span className="text-[red] pl-2">0</span>
                <span className="text-black">{";"}</span><br/>
                <span className="text-black">{"}"}</span>
            </div>
        </div>
    )
}