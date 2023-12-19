import {BoldText, HighlightText} from "@/libs/HighlightText/HighlightText";
import {ButtonSecondary} from "@/libs/buttons/button";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const CSyntax = () => {
    const codeString = '#include <stdio.h>\n' +
        '\n' +
        'int main() {\n' +
        'printf("Hello World");\n' +
        'return0;\n' +
        '}';
    return(
        <div  className="">
            <h2 className="H3 md-space-bottom">আজকে আমরা C প্রোগ্রামিংয়ের সিনট্যাক্স সম্পর্কে জানবো।</h2>
            <p className="Primary-paragraph md-space-bottom">
                আপনি ইতিমধ্যেই নিম্নলিখিত কোডটি কয়েকবার দেখেছেন। আসুন এটি আরও ভালভাবে বোঝার জন্য আমরা এটার প্রতিটা লাইন ভেঙে বিশ্লেষণ করি:
            </p>
            <div className="code-highlighter-wrap">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString}
                </SyntaxHighlighter>
            </div>

            <h4 className={"md-space-y H4"}>উপরের কোডের বিশ্লেষণ:</h4>
            <p className={"sm-space-bottom Primary-paragraph"}><BoldText boldText={"১ম লাইন:"}/>{"  "}<HighlightText highlightText={"#include <stdio.h>"}/> এটি একটি লাইব্রেরি, যার ভিতর থেকে আমরা ইনপুট এবং আউটপুট সম্পর্কিত ফাংশনগুলি পাই। <HighlightText highlightText={"<stdio.h>"}/>  হলো <BoldText boldText={"Standard Input/Output"}/> হেডার ফাইল। আমরা আউটপুট পাবার জন্যে যে <HighlightText highlightText={"printf()"}/> ফাংশন ব্যবহার করি এবং ইনপুট দেবার জন্যে যে <HighlightText highlightText={"scanf()"}/>  ফাংশন ব্যবহার করি এইগুলো আমাদের প্রোভাইড করে <HighlightText highlightText={"<stdio.h>"}/> লাইব্রেরি।</p>
            <p className={"sm-space-bottom Primary-paragraph"}><BoldText boldText={"২য় লাইন:"}/>{"  "}হোয়াইট স্পেস মানে হচ্ছে ফাঁকা লাইন, C সবসময় হোয়াইট স্পেস ইগনোর করে। এটি আমরা ব্যবহার করি কোড সুন্দর এবং রিডেবল করার জন্য। আপনার যে কয়টি ফাঁকা লাইন দরকার আপনি নিতে পারেন।</p>
            <p className={"sm-space-bottom Primary-paragraph"}><BoldText boldText={"৩য় লাইন:"}/>{"  "}<HighlightText highlightText={"int main() {:"}/>  এটি মেইন ফাংশন, প্রোগ্রাম এই ফাংশন থেকে শুরু হয় এবং এই ফাংশন থেকে শেষ হয়। ফাংশন শুরু হয় কোন একটি ডাটা টাইপ দিয়ে, এখানে যেমন শুরু হয়েছে ইনটিজার ডাটা টাইপ দিয়ে এই জন্য <HighlightText highlightText={"int"}/> লেখা হয়েছে। তারপর ফাংশনের নাম এবং ২টা পেরেন্থিছিছ বা আমরা যেটাকে ফ্রাসট ব্র্যকেট নামে চিনি সেটা লিখতে হয় তারপর কারলিব্রেইস বা আমরা যেটাকে সেকেণ্ড ব্র্যকেট নামে চিনি সেইটার ভিতর ফাংশনের সকলকিছু লিখতে হয়।  এটা যেহেতু মেইন ফাংশন তাই <HighlightText highlightText={"main(){"}/> মেইন লেখা হয়েছে। এটাকে প্রোগ্রামের মাথা বলা হয়, একজন মানুষের বিভিন্ন অঙ্গ পতঙ্গ যেমন মাথার সাথে কানেক্ট থাকে ঠিক তেমনি একটা প্রোগ্রামের সকল কিছুই মেইন ফাঙ্কশনের সাথে কানেক্ট থাকবে, এই বিষয়ে আমরা ফাঙ্কশন অধ্যায়ে আরও বিস্তারিত জানবো। আর <HighlightText highlightText={"int"}/> লেখা নির্দেশ করে ফাংশনটি কোন ডাটা টাইপের হবে, এখন ডাটা টাইপ আবার কি জিনিস এটা চিন্তা করে মাথা নষ্ট করিয়েন না। আমরা যখন ডাটা টাইপ অধ্যায় শিখবো তখন এটা আমাদের কাছে পান্তাভাত হয়ে যাবে।</p>
            <p className={"sm-space-bottom Primary-paragraph"}><BoldText boldText={"৪র্থ লাইন:"}/>{"  "}<HighlightText highlightText={"printf(\"Hello, World!\");"}/> এই ফাংশন ব্যবহার করে  <BoldText boldText={"Hello World!"}/>{"  "} প্রিন্ট করা হয়েছে। এই ফাংশনটি টেক্সট প্রিন্ট করার জন্য ব্যবহৃত হয়। আপনি হয়তো খেয়াল করেছেন এই লাইনের শেষে একটি সেমিকোলন দেয়া হয়েছে, C প্রোগ্রামিং এ, সেমিকোলন <HighlightText highlightText={"(;)"}/>  ব্যবহার হয় স্টেটমেন্ট শেষ করার জন্য। এটি একটি স্টেটমেন্ট শেষ করার চিহ্ন হিসেবে কাজ করে। প্রতিটি C স্টেটমেন্ট একটি সেমিকোলন দ্বারা শেষ হতে হবে। সেমিকোলনটি একটি ডিলিমিটার হিসেবে কাজ করে, যেটি কম্পাইলারকে বুঝতে সাহায্য করে একটি স্টেটমেন্ট শেষ হয়ে অন্যটি শুরু হয়েছে তা।</p>
            <p className={"sm-space-bottom Primary-paragraph"}><BoldText boldText={"৫ম লাইন:"}/>{"  "}<HighlightText highlightText={"return 0;"}/> এই লাইনে দ্বারা প্রোগ্রামটি সঠিকভাবে শেষ হবে এবং <HighlightText highlightText={"0"}/> রিটার্ন করবে, যা ইন্ডিকেট করে যে প্রোগ্রামটি সফলভাবে শেষ হয়েছে। এখানে কেন রিটার্ন <HighlightText highlightText={"0"}/> করা হল এটা নিয়ে চিন্তা করে মাথা নষ্ট করিয়েন না। ফাঙ্কশন অধ্যায়ে এটা নিয়ে আমরা আমরা বিস্তারিত আলোচনা করব তখন এটা ডালভাত মনে হবে।</p>
            <p className={"sm-space-bottom Primary-paragraph"}><BoldText boldText={"৬ লাইন:"}/>{"  "} এই লাইনে একটি কারলিব্রেইস <HighlightText highlightText={"}"}/> এর মাধ্যমে ফাংশনের বডিকে wrap দেয়া হয়েছে।</p>
            <div className="navigate-buttons-style">
                <ButtonSecondary btnLink={"/c_get_started"} btnText={"❮ পূর্ববর্তী অধ্যায়"}/>
                <ButtonSecondary btnLink={"c_output"} btnText={"পরবর্তী অধ্যায় ❯"}/>
            </div>
        </div>
    )
}

export  default CSyntax