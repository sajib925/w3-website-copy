import {BoldText, HighlightText} from "@/libs/HighlightText/HighlightText";
import SyntaxHighlighter from "react-syntax-highlighter";
import {dracula} from "react-syntax-highlighter/dist/esm/styles/hljs";
import {ButtonSecondary} from "@/libs/buttons/button";


const CVaribales = () => {

    const codeString = '#include <stdio.h>\n' +
        '\n' +
        'int main() {\n\n' +
        'int myNum = 50;\n' +
        'printf(myNum);\n' +
        '//এখানে কোন আউটপুট দেখাবে না কারণ এখানে কোন ফরমেট স্পেসিফায়ার ব্যবহার করা হয়নি\n'+
        'return0;\n' +
        '}';
    const codeString2 = '#include <stdio.h>\n' +
        '\n' +
        'int main() {\n\n' +
        'int myNum = 50;\n' +
        'printf("%d", myNum);\n' +
        '//এখানে 50 আউটপুট দেখাবে কারণ এখানে ফরমেট স্পেসিফায়ার ব্যবহার করা হয়েছে।\n'+
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
                আপনি যদি একটা ভ্যরিয়েবল ডিক্লেয়ার করতে চান তাহলে, প্রথমে যে টাইপের ডাটা স্টোর করতে চান সেই টাইপ লিখতে হবে। ইন্টিজার টাইপ হলে <HighlightText highlightText={"int"}/>, ফ্লটিং টাইপ হলে <HighlightText highlightText={"float"}/> এবং ক্যারেক্টার টাইপ হলে  <HighlightText highlightText={"char"}/> তারপর ভ্যরিয়েবলের একটি নাম যেমন <HighlightText highlightText={"myVariable"}/> নাম আপনি যেকোন কিছুই দিতে পারেন, তবে মিনিংফুল নাম দেয়া ভালো, যাতে আপনি পরে বুজতে পারেন। তারপর <HighlightText highlightText={"="}/> ইকুয়াল সাইন,  তারপর ভ্যরিয়েবলের ভ্যালু দিতে হবে। নিচে উদাহরণ এর মাধ্যমে দেখানো হল
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
            <h3 className="H4 md-space-y">C ফরমেট স্পেসিফায়ার</h3>
            <p className="Primary-paragraph md-space-y">
                ডায়নামিক প্রোগ্রামিং ল্যাঙ্গুয়েজ যেমন <HighlightText highlightText={"C++, Python, Java, Javascript etc"}/> এইগুলোতে প্রিন্টএফ ফাঙ্কশনের ভিতর এইভাবে সরাসরি <HighlightText highlightText={"printf(myNum);"}/> ভ্যারিয়েবলের নাম লিখলেই আউটপুট পাওয়া যায়। কিন্তু <HighlightText highlightText={"C"}/> তে যে ডাটা টাইপের ভ্যালু আমরা চাচ্ছি সেটার ফরমেট স্পেসিফায়ার লিখতে হয়। চলুন উদাহরণ এর মাধ্যমে এক্সপ্লোর করা যাক।
            </p>
            <div className="">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString}
                </SyntaxHighlighter>
            </div>

            <p className="Primary-paragraph md-space-y">
                উপরের উদাহরণটিতে কোন আউটপুট দেখাবে না কারণ সেখানে কোন ফরমেট স্পেসিফায়ার ব্যবহার করা হয়নি, কিন্তু নিচের উদাহরণটিতে 50 আউটপুট দেখাবে কারণ এখানে ফরমেট স্পেসিফায়ার ব্যবহার করা হয়েছে।
            </p>

            <div className="">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString2}
                </SyntaxHighlighter>
            </div>
            <h3 className="H4 md-space-y">ফরমেট স্পেসিফায়ার কি? কখন ফরমেট স্পেসিফায়ার ব্যবহার করব?</h3>
            <p className="Primary-paragraph sm-space-bottom">
                {"সি-তে ফরমেট ্পেসিফায়ার হ'ল প্রিন্টএফ এবং স্ক্যানেএফের মতো ফাংশনগুলির মধ্যে ফর্ম্যাট স্ট্রিংগুলিতে ব্যবহৃত প্লেসহোল্ডার যা মুদ্রিত বা পড়া হবে এমন ডেটার ধরণ এবং বিন্যাস নির্দেশ করে। তারা কম্পাইলারকে বলে যে কী ধরণের ডেটা আশা করতে হবে এবং কীভাবে এটি ব্যাখ্যা করতে হবে। বিন্যাস নির্দিষ্টকারীরা একটি শতাংশ চিহ্ন (%) দিয়ে শুরু হয় এবং একটি অক্ষর দ্বারা অনুসরণ করা হয় যা ডেটা টাইপের প্রতিনিধিত্ব করে।"}
            </p>
            <p className="Primary-paragraph">
                <BoldText boldText={"যেনে রাখা ভালো:"}/>{" "} <BoldText boldText={"C99 (released in 1999)"}/> ভার্সন রিলিজ হওয়ার পূর্বে শুধু মাল্টি লাইন কমেন্টস ছিল, সিঙ্গেল লাইন কমেন্টস ছিলনা।
            </p>
            <div className="navigate-buttons-style">
                <ButtonSecondary btnLink={"/c_comments"} btnText={"❮ পূর্ববর্তী অধ্যায়"}/>
                <ButtonSecondary btnLink={"c_data_types"} btnText={"পরবর্তী অধ্যায় ❯"}/>
            </div>
        </div>
    )
}

export  default CVaribales