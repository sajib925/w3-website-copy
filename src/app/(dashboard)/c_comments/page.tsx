import {BoldText, HighlightText} from "@/libs/HighlightText/HighlightText";
import SyntaxHighlighter from "react-syntax-highlighter";
import {dracula} from "react-syntax-highlighter/dist/esm/styles/hljs";
import {ButtonSecondary} from "@/libs/buttons/button";


const CComments = () => {
    const codeString = '#include <stdio.h>\n' +
        '\n' +
        'int main() {\n\n' +
        '//এটা একটা সিঙ্গেল লাইন কমেন্ট\n \n'+
        'printf("Hello World");\n\n' +
        '//এটা একটা সিঙ্গেল লাইন কমেন্ট\n \n'+
        'return0;\n' +
        '}';
    const codeString2 = '#include <stdio.h>\n' +
        '\n' +
        'int main() {\n\n' +
        'printf("Hello World");' +
        '//এটা একটা সিঙ্গেল লাইন কমেন্ট\n \n'+
        'return0;\n' +
        '}';
    const codeString3 = '#include <stdio.h>\n' +
        '\n' +
        'int main() {\n\n' +
        '/*এটা একটা মাল্টি লাইন কমেন্ট\n' +
        'নিচের লাইনে Hello World প্রিন্ট করা হয়েছে।*/\n\n'+
        'printf("Hello World");\n' +
        'return0;\n' +
        '}';
    return(
        <div  className="">
            <h2 className="H3 md-space-bottom">আজকে আমরা C প্রোগ্রামিংয়ের কমেন্টস সম্পর্কে জানবো।</h2>
            <p className="Primary-paragraph md-space-bottom">
               কমেন্টস ব্যবহার করা হয় কোডের ব্যাখ্যা এবং কোড রিডেবল করতে। আমাদের কম্পপাইলার কমেন্টসকে সবসময় ইগনোর করে। কমেন্টস একাদিক লাইনের ও হতে পারে আবার সিঙ্গেল লাইনের ও হতে পারে, এটা পুরোপুরি আপনার উপর নির্ভরশীল, আপনার যত লাইন দরকার আপনি করতে পারবেন। নিচের উদাহরণ দেখলে পান্তাভাতের মত সহজ হয়ে যাবে।
            </p>
            <h3 className="H4 md-space-y">সিঙ্গেল লাইন কমেন্টস।</h3>
            <p className="Primary-paragraph md-space-bottom">
                সিঙ্গেল লাইন কমেন্টস শুরু হয় দুইটি ফরওয়ার্ড স্লাশ  <HighlightText highlightText={"//"}/> দিয়ে, এটা ক্লোজ করতে হয়না। দুইটি ফরওয়ার্ড স্লাশ  <HighlightText highlightText={"//"}/> দিয়ে আমরা যাই লেখি না কেন আমাদের কম্পপাইলার সেটাকে ইগনোর করবে। নিচে একটি সিঙ্গেল লাইন কমেন্টসের উদাহরণ দেখানো হল:
            </p>
            <div className="code-highlighter-wrap">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString}
                </SyntaxHighlighter>
            </div>
            <p className="Primary-paragraph md-space-y">
                সিঙ্গেল লাইন কমেন্টস আপনি চাইলে নিচের উদাহরণের মত একটি ফাঙ্কশনের পাশে করতে পারবেন, আবার দরকার হলে উপরের উদাহরণের মত উপরে বা নিচে করতে পারবেন।
            </p>
            <div className="code-highlighter-wrap">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString2}
                </SyntaxHighlighter>
            </div>

            <h3 className="H4 md-space-y">মাল্টি লাইন কমেন্টস।</h3>
            <p className="Primary-paragraph md-space-bottom">
                মাল্টি লাইন কমেন্টস শুরু হয় একটি ফরওয়ার্ড স্লাশ ও একটি স্টার <HighlightText highlightText={"/*"}/> দিয়ে, এটা যেহেতু মাল্টি লাইন কমেন্টস তাই এটা ক্লোজ করতে হয় একটি স্টার ও একটি ফরওয়ার্ড স্লাশ <HighlightText highlightText={"*/"}/> দিয়ে।  একটি ফরওয়ার্ড স্লাশ ও একটি স্টার <HighlightText highlightText={"/*"}/> লিখে, ভিতরে আমরা যাই লিখব সেটাই কমেন্টস হিসেবে বিবেচিত হবে এবং আমাদের কম্পপাইলার সেটাকে ইগনোর করবে। একটি স্টার ও একটি ফরওয়ার্ড স্লাশ <HighlightText highlightText={"*/"}/> দিয়ে আমরা এটাকে ক্লোজ করে দিব। নিচে একটি ডাবল লাইন কমেন্টসের উদাহরণ দেখানো হল:
            </p>

            <div className="code-highlighter-wrap">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString3}
                </SyntaxHighlighter>
            </div>
            <h3 className="H4 md-space-y">সিঙ্গেল নাকি মাল্টি লাইন কমেন্টস, কোনটা ব্যবহার করব?</h3>
            <p className="Primary-paragraph sm-space-bottom">
                এটা সম্পূর্ণ আপনার উপর আপনি কোনটা ব্যবহার করবেন, ছোট কমেন্টসের জন্য আমরা এইটা <HighlightText highlightText={"//"}/> বড় কমেন্টসের জন্য <HighlightText highlightText={"/**/"}/> এইটা ব্যবহার করি।
            </p>
            <p className="Primary-paragraph">
                <BoldText boldText={"যেনে রাখা ভালো:"}/>{" "} <BoldText boldText={"C99 (released in 1999)"}/> ভার্সন রিলিজ হওয়ার পূর্বে শুধু মাল্টি লাইন কমেন্টস ছিল, সিঙ্গেল লাইন কমেন্টস ছিলনা।
            </p>
            <div className="navigate-buttons-style">
                <ButtonSecondary btnLink={"/c_output"} btnText={"❮ পূর্ববর্তী অধ্যায়"}/>
                <ButtonSecondary btnLink={"c_variables"} btnText={"পরবর্তী অধ্যায় ❯"}/>
            </div>
        </div>
    )
}

export  default CComments