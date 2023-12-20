import {BoldText, HighlightText} from "@/libs/HighlightText/HighlightText";
import SyntaxHighlighter from "react-syntax-highlighter";
import {dracula} from "react-syntax-highlighter/dist/esm/styles/hljs";
import {ButtonSecondary} from "@/libs/buttons/button";


const CVaribales = () => {

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
            <h2 className="H3 md-space-bottom">আজকে আমরা C প্রোগ্রামিংয়ের ভ্যরিয়েবলস সম্পর্কে জানবো।</h2>
            <p className="Primary-paragraph md-space-bottom">
                ভ্যরিয়েবলস হচ্ছে একটি পাত্র বা কনটেইনার, যেটার ভিতরে আমরা নাম্বার, ক্যারেক্টার ইত্যাদি টাইপ ডাটা স্টোর করতে পারি। নিচের উদাহরণ দেখলে পান্তাভাতের মত সহজ হয়ে যাবে।
            </p>
            <h3 className="H4 md-space-y">C ভ্যরিয়েবলস</h3>
            <p className="Primary-paragraph md-space-bottom">
                C প্রোগ্রামিংয়ের ভিন্ন ধরণের ভেরিয়েবল ব্যবহৃত হয় যা বিভিন্ন কীওয়ার্ডের সাহায্যে সংজ্ঞায়িত হয়, উদাহরণস্বরূপ:
            </p>
            <p className="Primary-paragraph md-space-bottom">
                <HighlightText highlightText={"int"}/>- এখানে ডেসিমাল ছাড়া সকল পজেটিভ নেগেটিভ ভ্যালু স্টোর করা যায় যেমন <HighlightText highlightText={"123"}/> অথবা <HighlightText highlightText={"-123"}/>
            </p>
            <p className="Primary-paragraph md-space-bottom">
                <HighlightText highlightText={"float"}/>- এখানে ডেসিমাল ভ্যালু স্টোর করা হয় যেমন: <HighlightText highlightText={"50.50"}/> অথবা <HighlightText highlightText={"-50.50"}/>
            </p>
            <p className="Primary-paragraph md-space-bottom">
                <HighlightText highlightText={"char"}/>- এখানে ক্যারেক্টার ভ্যালু স্টোর করা হয় যেমন: <HighlightText highlightText={"'A'"}/> অথবা <HighlightText highlightText={"'a'"}/> ক্যারেক্টার ভ্যালু সবসময় <HighlightText highlightText={"' '"}/> সিঙ্গেল কোটেশনের ভিতর লিখতে হয়।
            </p>
            <h3 className="H4 md-space-y">C ভ্যরিয়েবলস ডিক্লেয়ার</h3>
            <p className="Primary-paragraph md-space-bottom">
                আপনি যদি একটা ভ্যরিয়েবল ডিক্লেয়ার করতে চান তাহলে, প্রথমে যে টাইপের ডাটা স্টোর করতে চান সেই টাইপ লিখতে হবে। ইন্টিজার টাইপ হলে <HighlightText highlightText={"int"}/>, ফ্লটিং টাইপ হলে <HighlightText highlightText={"float"}/> এবং ক্যারেক্টার টাইপ হলে  <HighlightText highlightText={"char"}/> তারপর ভ্যরিয়েবলের একটি নাম যেমন <HighlightText highlightText={"myVariable"}/> নাম আপনি যেকোন কিছুই দিতে পারেন, তারপর <HighlightText highlightText={"="}/> ইকুয়াল সাইন,  তারপর ভ্যরিয়েবলের ভ্যালু দিতে হবে। নিচে উদাহরণ এর মাধ্যমে দেখানো হল
            </p>
            <div className="code-highlighter-wrap">
                <p className="Primary-paragraph md-space-bottom">
                    <HighlightText highlightText={"int myNum = 50;"}/>
                </p>
                <p className="Primary-paragraph md-space-bottom">
                    <HighlightText highlightText={"float myFloat = 50.50;"}/>
                </p>
                <p className="Primary-paragraph md-space-bottom">
                    <HighlightText highlightText={"char myChar = 'a';"}/>
                </p>
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
                <ButtonSecondary btnLink={"/c_get_started"} btnText={"❮ পূর্ববর্তী অধ্যায়"}/>
                <ButtonSecondary btnLink={"c_output"} btnText={"পরবর্তী অধ্যায় ❯"}/>
            </div>
        </div>
    )
}

export  default CVaribales