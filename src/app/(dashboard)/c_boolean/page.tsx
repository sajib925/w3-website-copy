import {BoldText, HighlightText} from "@/libs/HighlightText/HighlightText";
import SyntaxHighlighter from "react-syntax-highlighter";
import {dracula, idea} from "react-syntax-highlighter/dist/esm/styles/hljs";
import {ButtonSecondary} from "@/libs/buttons/button";



const CBoolean = () => {
    const codeString = '#include <stdio.h>\n' +
        '#include <stdbool.h>\n\n'

    const codeString2 =  'bool isProgrammingFun = true;\n' +
        'bool isFishTasty = false;\n'
    const codeString3 =  'bool isProgrammingFun = true;\n' +
        'bool isFishTasty = false;\n\n\n'+
        'printf("%d", isProgrammingFun); // এখানে 1 প্রিন্ট হবে।\n' +
        'printf("%d", isFishTasty); // এখানে 0 প্রিন্ট হবে।\n'



    return(
        <div  className="">
            <h2 className="H3 md-space-bottom">আজকে আমরা C প্রোগ্রামিংয়ের বুলিয়ান ডাটা টাইপ সম্পর্কে জানবো।</h2>
            <p className="Primary-paragraph md-space-bottom">
                প্রোগ্রামিংয়ে প্রায়ই আমাদের এমন ডাটা টাইপ লাগবে যেটা সবসময় সত্য <HighlightText highlightText={"true"}/> অথবা মিথ্যা <HighlightText highlightText={"false"}/> রিটার্ন করবে। এর জন্য, C তে একটি বুল <HighlightText highlightText={"bool"}/> ডেটা টাইপ রয়েছে, যা বুলিয়ান <HighlightText highlightText={"boolean"}/> হিসাবে পরিচিত। বুলিয়ান ডাটা টাইপ সবসময় সত্য <HighlightText highlightText={"true"}/> অথবা মিথ্যা <HighlightText highlightText={"false"}/> রিটার্ন করবে।
            </p>
            <p className="Primary-paragraph md-space-bottom">
                C তে <HighlightText highlightText={"int"}/> , <HighlightText highlightText={"float"}/> এর মত <HighlightText highlightText={"bool"}/> কোন বিল্টিন ডাটা টাইপ নয়। এটি <HighlightText highlightText={"C99"}/> ভার্সনের আগে আমরা ব্যবহার করতে পারতাম না। এটি <HighlightText highlightText={"C99"}/> এর পর যুক্ত করা হয়েছে। যেহেতু এটা কোন বিল্টিন ডাটা টাইপ নয় তাই এটি ব্যবহার করতে হলে আমাদের নিচে উদাহরণের মত <HighlightText highlightText={"#include <stdio.h>"}/> এর সাথে <HighlightText highlightText={"#include <stdbool.h>"}/> হেডার ফাইলটিও ইউজ করা লাগবে।
            </p>
            <div className="">
                <SyntaxHighlighter language="c" style={idea}>
                    {codeString}
                </SyntaxHighlighter>
            </div>
            <p className="Primary-paragraph md-space-bottom">
                বুলিয়ান ভ্যারিয়েবল ডিক্লেয়ার করতে চাইলে প্রথমে <HighlightText highlightText={"bool"}/> কিওয়ার্ডটি লিখে তারপর একটি নাম দিতে হবে, তারপর ইকুয়ারল সাইন দিয়ে ভ্যালু হিসেবে শুধু <HighlightText highlightText={"true"}/> অথবা <HighlightText highlightText={"false"}/> দেয়া যাবে। নিচের উদাহরণটি দেখলে বিষয়টা পরিষ্কার হয়ে যাবেঃ
            </p>
            <div className="">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString2}
                </SyntaxHighlighter>
            </div>
            <p className="Primary-paragraph md-space-y">
                আপনি যদি বুলিয়ান ভ্যারিয়েবল প্রিন্ট করে দেখতে চান তাহলে দেখতে পাবেন যে এটা ইন্টিজার ভ্যালু রিটার্ন করে <HighlightText highlightText={"1"}/> বা অন্য যেকোন নাম্বার শুধু <HighlightText highlightText={"0"}/> বাদে কারণ <HighlightText highlightText={"0"}/> মানে <HighlightText highlightText={"false"}/> আর <HighlightText highlightText={"0"}/> ছাড়া অন্য যেকোন ভ্যলুই <HighlightText highlightText={"true"}/> রিটার্ন করতে পারে। যেহেতু বুলিয়ান প্রিন্ট করলে ইন্টিজার ভ্যালু পাওয়া যায় তাই এটা প্রিন্ট করতে চাইলে ফরমেট স্পেসিফায়ার হিসেবে <HighlightText highlightText={"%d"}/> কে ব্যবহার করতে হবে। নিচের উদাহরণটি দেখলে বিষয়টা পরিষ্কার হয়ে যাবেঃ
            </p>
            <div className="md-space-y">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString3}
                </SyntaxHighlighter>
            </div>
            <div className="navigate-buttons-style">
                <ButtonSecondary btnLink={"/c_operator"} btnText={"❮ পূর্ববর্তী অধ্যায়"}/>
                <ButtonSecondary btnLink={"/c_if_else"} btnText={"পরবর্তী অধ্যায় ❯"}/>
            </div>
        </div>
    )
}

export  default CBoolean