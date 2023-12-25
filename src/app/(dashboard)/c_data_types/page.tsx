import {ButtonSecondary} from "@/libs/buttons/button";
import SyntaxHighlighter from "react-syntax-highlighter";
import {dracula} from "react-syntax-highlighter/dist/esm/styles/hljs";
import {BoldText, HighlightText} from "@/libs/HighlightText/HighlightText";


const CDataTypes = () => {

    const codeString8 = '#include <stdio.h>\n' +
        '\n' +
        'int main() {\n\n' +
        'int x = 10, y = 30, z = 50, sum;\n' +
        'sum = x + y + z;\n' +
        'printf("%d", sum);\n' +
        '//এখানে আউটপুট দেখাবে 90, \n'+
        'return 0;\n' +
        '}';
    const codeString =  'int a = 5, b = 2;\n' +
        'int result = a/b;\n' +
        'যদিও আপনি এখানে 2.5 আশা করছেন, কিন্তু আপনি পাবেন 2 কারণ কখনো int দশমিক ভ্যালু দেয় না \n'
    const codeString2 =  'float myFloat = 5\n' +
        'printf("%d", myFloat);\n' +
        'এখানে আউটপুট পাওয়া যাবে 5.00 float এ ডিক্লেয়ার করার কারনে এখানে int ভ্যালুকে float এ কনভার্ট করে দিয়েছে \n'
    const codeString3 =  'int myInt = 5.50;\n' +
        'printf("%d", myInt);\n' +
        'এখানে আউটপুট পাওয়া যাবে 5 int এ ডিক্লেয়ার করার কারনে এখানে float ভ্যালুকে int এ কনভার্ট করে দিয়েছে \n'
    const codeString4 =  'int a = 5, b = 2;\n' +
        'float result = a/b;\n' +
        'আপনি এখানে 2.5 -ই পাবেন কারণ রেজাল্ট float -এ স্টোর করা হয়েছে।\n'
    const codeString5 =  'int a = 5, b = 2;\n' +
        'float result = (float) a/b; //ইকুয়াল সাইনের পর () পেরেন্থিছিছের ভিতর ওই ডাটা টাইপের নাম বলে দিতে হয়, যেমন এখানে (float) বলে দেয়া হয়েছে\n' +
        'printf("%f", sum);'+
        'আপনি এখানে 2.50000 -ই পাবেন কারণ রেজাল্ট float -এ স্টোর করা হয়েছে।\n'
    const codeString6 =  'int a = 5, b = 2;\n' +
        'float result = (float) a/b; //ইকুয়াল সাইনের পর () পেরেন্থিছিছের ভিতর ওই ডাটা টাইপের নাম বলে দিতে হয়, যেমন এখানে (float) বলে দেয়া হয়েছে\n' +
        'printf("%.1f", sum);'+
        'আপনি এখানে 2.5 -ই পাবেন কারণ এখানে ডেসিমাল প্রিসিসন ব্যবহার করা হয়েছে।\n'


    return(
        <div  className="">
            <h2 className="H3 md-space-bottom">আজকে আমরা C প্রোগ্রামিংয়ের ব্যাসিক ডাটা টাইপ সম্পর্কে জানবো।</h2>
            <p className="Primary-paragraph md-space-bottom">
                ইতিমধ্যেই আমরা ভ্যরিয়েবলস অধ্যায়ে ডাটা টাইপ সম্পর্কে যেনে এসেছি। ডাটা টাইপ ভ্যারিএবলে স্টোর করা ডাটার সাইজ এবং টাইপকে নির্দেশ করে। ভ্যারিএবলে ডাটা স্টোর করার আগে আমরা ডাটার টাইপ ডিক্লেয়ার করি যাতে কম্পাইলার বুঝতে পারে এখানে কোন ধরণের ডাটা আছে এবং কত <HighlightText highlightText={"byte"}/> মেমোরি দখল করেছে। এবং যে ফাঙ্কশন রিটার্ন টাইপ আছে সেইগুলো লেখার শুরুতেই ডাটার টাইপ ডিক্লেয়ার করা হয় যাতে কম্পাইলার বুঝতে পারে এখানে কোন ধরণের ভ্যালু রিটার্ন করবে। এই বিষয়ে ফাঙ্কশন অধ্যায়ে বিস্তারিত জানবো।
            </p>
            <h3 className="H4 md-space-y">C ডাটা টাইপস</h3>
            <p className="Primary-paragraph md-space-bottom">
                <HighlightText highlightText={"int"}/>- এটা <HighlightText highlightText={"2 or 4 bytes"}/> জায়গা দখল করে, এখানে ডেসিমাল ছাড়া সকল পজেটিভ নেগেটিভ ভ্যালু স্টোর করা যায় যেমন <HighlightText highlightText={"123"}/> অথবা <HighlightText highlightText={"-123"}/>
            </p>
            <p className="Primary-paragraph md-space-bottom">
                <HighlightText highlightText={"float"}/>-এটা <HighlightText highlightText={"4 bytes"}/> জায়গা দখল করে, এখানে  দশমিক ভ্যালু স্টোর করা হয় যেমন: <HighlightText highlightText={"50.50"}/> অথবা <HighlightText highlightText={"-50.50"}/>
            </p>
            <p className="Primary-paragraph md-space-bottom">
                <HighlightText highlightText={"double"}/>- এটা <HighlightText highlightText={"8 bytes"}/> জায়গা দখল করে, এখানে সকল পজেটিভ, নেগেটিভ, দশমিক ভ্যালু স্টোর করা হয়। মানে  ও ফ্লোট উভয় ধরণের ডাটা স্টোর করা যায় যেমন: <HighlightText highlightText={"50.50"}/> অথবা <HighlightText highlightText={"-50.50"}/> <HighlightText highlightText={"50.50"}/> অথবা <HighlightText highlightText={"-50.50"}/>
            </p>
            <p className="Primary-paragraph md-space-bottom">
                <HighlightText highlightText={"char"}/>- এটা <HighlightText highlightText={"1 byte"}/> জায়গা দখল করে, এখানে ক্যারেক্টার ভ্যালু স্টোর করা হয় যেমন: <HighlightText highlightText={"'A'"}/> অথবা <HighlightText highlightText={"'a'"}/> ক্যারেক্টার ভ্যালু সবসময় <HighlightText highlightText={"' '"}/> সিঙ্গেল কোটেশনের ভিতর লিখতে হয়।
            </p>
            <h3 className="H4 md-space-y">C টাইপ কনভারসেশন</h3>
            <p className="Primary-paragraph md-space-bottom">
                মাঝেমধ্যে, আমাদের এক ডাটা টাইপের ভ্যালু অন্য ডাটা টাইপে কনভার্ট করতে হয় এটাকেই টাইপ কনভারসেশন বলে। টাইপ কনভারসেশন আমদের কখন লাগে? ধরুন আপনি ৫ কে ২ দিয়ে ভাগ করেছেন এখন আপনি অবশ্যই ভ্যালু ২.৫ আশা করবেন, কিন্তু যদি আপনি <HighlightText highlightText={"int"}/> এ ভ্যালু স্টোর করেন তবে আপনি পাবেন ২। চলুন একটি উদাহরণের মাধ্যমে দেখে নেয়া যাক:
            </p>
            <div className="">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString}
                </SyntaxHighlighter>
            </div>
            <h3 className="H4 md-space-y">C তে দুই ধরণের টাইপ কনভারসেশন রয়েছে</h3>
            <li className="Primary-paragraph sm-space-bottom">
                <HighlightText highlightText={"Implicit Conversion (automatically)"}/>{" "}<BoldText boldText={"ইমপ্লিসিট কনভারসেশন (এটা অটোম্যাটিক্যালি কাজ করে))"}/>
            </li>
            <li className="Primary-paragraph sm-space-bottom">
                <HighlightText highlightText={"Explicit Conversion (manually)"}/>{" "}<BoldText boldText={"এক্সপ্লিসিট কনভারসেশন (এটা ম্যানুয়ালি কাজ করাতে হয়))"}/>
            </li>
            <h3 className="H4 md-space-y">C ইমপ্লিসিট কনভারসেশন</h3>
            <p className="Primary-paragraph md-space-y">
                ইমপ্লিসিট কনভারসেশন অটোম্যাটিক্যালি কাজ করে। আমরা যদি কোন <HighlightText highlightText={"int"}/> টাইপের ভ্যালুকে <HighlightText highlightText={"float"}/> টাইপে স্টোর করি তবে আমরা সেটাকে <HighlightText highlightText={"float"}/> এই পাবো এবং যদি কোন <HighlightText highlightText={"float"}/> টাইপের ভ্যালুকে <HighlightText highlightText={"int"}/> টাইপে স্টোর করি তবে আমরা সেটাকে <HighlightText highlightText={"int"}/> এই পাবো যেমন: <HighlightText highlightText={"double"}/>
            </p>
            <div className="">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString2}
                </SyntaxHighlighter>
            </div>
            <div className="md-space-y">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString3}
                </SyntaxHighlighter>
            </div>
            <div className="md-space-y">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString4}
                </SyntaxHighlighter>
            </div>
            <h3 className="H4 md-space-y">C এক্সপ্লিসিট কনভারসেশন</h3>
            <p className="Primary-paragraph md-space-y">
                এক্সপ্লিসিট কনভারসেশন অটোম্যাটিক্যালি কাজ করে না। চলুন উদাহরণের মাধ্যমে দেখা যাক:
            </p>
            <div className="">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString5}
                </SyntaxHighlighter>
            </div>
            <p className="Primary-paragraph md-space-y">
                আপনি যদি চান তবে ডেসিমাল প্রিসিসন ব্যবহার করে দশমিকের পর নির্দিষ্ট যে কয়টি সংখ্যা চান ওই কয়টি সংখ্যাই প্রিন্ট করতে পারবেন। এই জন্য আপনাকে ফরমেট স্পেসিফায়ারের % এর পর দশমিক দিয়ে আপনি যে সংখ্যা লিখবেন ওই কয়টা সংখ্যাই আউটপুট হিসেবে পাবেন। <HighlightText highlightText={`"%.1 or 2 etc"`}/>
            </p>
            <div className="">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString6}
                </SyntaxHighlighter>
            </div>

            <div className="navigate-buttons-style">
                <ButtonSecondary btnLink={"/c_variables"} btnText={"❮ পূর্ববর্তী অধ্যায়"}/>
                <ButtonSecondary btnLink={"c_constants"} btnText={"পরবর্তী অধ্যায় ❯"}/>
            </div>
        </div>
    )
}

export  default CDataTypes