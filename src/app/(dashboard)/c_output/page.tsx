import SyntaxHighlighter from "react-syntax-highlighter";
import {dracula} from "react-syntax-highlighter/dist/esm/styles/hljs";
import {BoldText, HighlightText} from "@/libs/HighlightText/HighlightText";
import {ButtonSecondary} from "@/libs/buttons/button";


const COutput = () => {
    const codeString = '#include <stdio.h>\n' +
        '\n' +
        'int main() {\n' +
        'printf("Hello World");\n' +
        'return0;\n' +
        '}';
    const codeString2 = '#include <stdio.h>\n' +
        '\n' +
        'int main() {\n' +
        'printf("হ্যালো প্রোগ্রামার্স");\n' +
        'printf("আমি C শিখছি।");\n' +
        'printf("C শেখা অনেক সহজ।");\n' +
        'return0;\n' +
        '}';
    return(
        <div  className="">
            <h2 className="H3 md-space-bottom">আজকে আমরা C প্রোগ্রামিংয়ের আউটপুট সম্পর্কে জানবো।</h2>
            <p className="Primary-paragraph md-space-bottom">
                C প্রোগ্রামিংয়ে আউটপুট দেখতে আমরা <HighlightText highlightText={"printf()"}/> ফাংশন ব্যবহার করি।
            </p>
            <div className="code-highlighter-wrap">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString}
                </SyntaxHighlighter>
            </div>

            <h4 className={"md-space-y H4"}>ডাবল কোটেশন চিহ্ন <HighlightText highlightText={"\"\""}/></h4>
            <p className={"sm-space-bottom Primary-paragraph"}>
                যখন আমরা প্রিন্ট ফাংশনে কোন টেক্সট প্রিন্ট করব তখন অবশ্যই পেরেন্থিছিছ এর ভিতর ডাবল কোটেশন চিহ্ন <HighlightText highlightText={"(\"\")"}/> এর ভিতরে টেক্সট লিখতে হবে। তা না হলে ইরর শো করবে।
            </p>
            <h4 className={"md-space-y H4"}>যেমন:</h4>
            <p className={"sm-space-bottom Primary-paragraph"}>
                {"printf(\"এটি সফলভাবে আউটপুট সক্ষম হবে।\");"}
            </p>
            <p className={"sm-space-bottom Primary-paragraph"}>
                {"printf(এটি সফলভাবে আউটপুট সক্ষম হবে না কারণ এখানে ডাবল কোটেশন চিহ্ন ব্যবহার করা হয়নি।)"}
            </p>
            <h4 className={"md-space-y H4"}>একটা ফাংশনে একাদিক প্রিন্ট ফাংশনের ব্যবহার</h4>
            <p className={"sm-space-bottom Primary-paragraph"}>
                আপনি চাইলে একটা ফাংশনে একাদিক প্রিন্ট ফাংশন ব্যবহার করতে পারেন। নিচের উদাহরণটি দেখুন
            </p>
            <div className="code-highlighter-wrap">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString2}
                </SyntaxHighlighter>
            </div>
            <h4 className={"md-space-y H4"}>C তে নতুন লাইন প্রিন্ট।</h4>
            <p className={"sm-space-bottom Primary-paragraph"}>

            </p>
            <div className="navigate-buttons-style">
                <ButtonSecondary btnLink={"/c_syntax"} btnText={"❮ পূর্ববর্তী অধ্যায়"}/>
                <ButtonSecondary btnLink={"/c_comments"} btnText={"পরবর্তী অধ্যায় ❯"}/>
            </div>
        </div>
    )
}

export  default COutput