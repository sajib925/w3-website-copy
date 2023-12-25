import {BoldText, HighlightText} from "@/libs/HighlightText/HighlightText";
import SyntaxHighlighter from "react-syntax-highlighter";
import {dracula} from "react-syntax-highlighter/dist/esm/styles/hljs";
import {ButtonSecondary} from "@/libs/buttons/button";


const CContents = () => {

    const codeString =  'const int a = 50;\n' +
        'a = 20;\n' +
        'এখানে এরর শো করবে কারণ উপরে const কিওয়ারড ব্যবহার করা হয়েছে এই ভ্যারিয়েবলের ভ্যালু আর পরিবর্তন করা যাবে না।\n'
    const codeString2 =  'const int minutesPerHour = 60;\n' +
        'const float PI = 3.14;\n' +
        'উপরের ভ্যালু গুলো কোন দিন পরিবর্তন পরিবর্তন হবে না।\n'
    const codeString3 =  'const int a = 60;\n' +
        'অবশ্যই ভ্যালু এস্যাইন করতে হবে।\n'
    const codeString4 =  'const int a ;\n' +
        ' a = 10;\n' +
        'পরে ভ্যালু এস্যাইন করতে গেলে এরর শো করবে।\n'
    const codeString5 =  'const int BIRTHYEAR = 1980;\n' +
        'ভ্যারিয়েবলের নামের অক্ষর সবগুলো ক্যাপিটাল লেটার ব্যবহার করা ভালো।\n'

    return(
        <div  className="">
            <h2 className="H3 md-space-bottom">আজকে আমরা C প্রোগ্রামিংয়ের কন্সটেন্স সম্পর্কে জানবো।</h2>
            <p className="Primary-paragraph md-space-bottom">
                আপনি যদি চান আপনার ডিক্লেয়ার করা ভ্যারিয়েবল গুলোর ভ্যালু আর চেঞ্জ না হোক তাহলে, ভ্যারিয়েবল ডিক্লেয়ারেল আগে এই কিওয়ারডটি <HighlightText highlightText={"const"}/> ব্যবহার করুন। কন্সটেন্স হচ্ছে ধ্রুবক, ধ্রুবকের মানকে কখনই পরিবর্তন করা যায় না।
            </p>
            <div className="">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString}
                </SyntaxHighlighter>
            </div>
            <p className="Primary-paragraph md-space-y">
               আপনার যে ভ্যারিয়েবলের ভ্যালু পরিবর্তনের কোন প্রয়োজন নেই সেই ভ্যারিয়েবল গুলোতে সবসময় <HighlightText highlightText={"const"}/> ব্যবহার করবেন।
            </p>
            <div className="md-space-bottom">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString2}
                </SyntaxHighlighter>
            </div>
            <p className="Primary-paragraph md-space-bottom">
                আপনি কোন এম্পটি কন্সটেন্স ভ্যারিয়েবল ডিক্লেয়ার করতে পারবেন না। অবশ্যই ভ্যালু এস্যাইন করতে হবে।
            </p>
            <div className="">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString3}
                </SyntaxHighlighter>
            </div>
            <div className="md-space-y">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString4}
                </SyntaxHighlighter>
            </div>
            <p className="Primary-paragraph md-space-bottom">
                কন্সটেন্স ভ্যারিয়েবলের নামের অক্ষর সবগুলো ক্যাপিটাল লেটার ব্যবহার করা ভালো তবে বাধ্যতামুলক নয়।
            </p>
            <div className="">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString5}
                </SyntaxHighlighter>
            </div>
            <div className="navigate-buttons-style">
                <ButtonSecondary btnLink={"/c_data_types"} btnText={"❮ পূর্ববর্তী অধ্যায়"}/>
                <ButtonSecondary btnLink={"c_operator"} btnText={"পরবর্তী অধ্যায় ❯"}/>
            </div>
        </div>
    )
}

export  default CContents