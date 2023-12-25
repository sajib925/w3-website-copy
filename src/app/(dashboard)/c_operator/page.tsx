import {HighlightText} from "@/libs/HighlightText/HighlightText";
import SyntaxHighlighter from "react-syntax-highlighter";
import {dracula} from "react-syntax-highlighter/dist/esm/styles/hljs";
import {ButtonSecondary} from "@/libs/buttons/button";
import {DynamicTable} from "@/libs/table/Table";


const COperator = () => {
    const codeString =  'int 50 + 50;\n' +
        'int a = 20, b = 30;\n' +
        'int result = a + b;\n' +
        'প্রথম লাইনে ভ্যালুর সাথে ভ্যালুর এবং তৃতীয় লাইনে ভ্যারিয়েবলের সাথে ভ্যারিয়েবলের অপারেশন চালানো হয়েছে।\n'
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
    const tableData = [
       { column1: "Data 1", column2: "Data A", column3: "Info X", column4: "Value 1" },
       { column1: "Data 2", column2: "Data B", column3: "Info Y", column4: "Value 2" },
    ]

    const tableHeaders = ["Header 1", "Header 2", "Header 3", "Header 4"];

    return(
        <div  className="">
            <h2 className="H3 md-space-bottom">আজকে আমরা C প্রোগ্রামিংয়ের অপারেটরস সম্পর্কে জানবো।</h2>
            <p className="Primary-paragraph md-space-bottom">
                অপারেটরস ব্যবহার করা হয় ভ্যালু এবং ভ্যারিয়েবলের উপর অপারেশন চালানোর জন্য।
            </p>
            <div className="">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString}
                </SyntaxHighlighter>
            </div>
            <h3 className="H4 md-space-y">C এর কিছু গুরুত্বপূর্ণ অপারেটরস নিয়ে নিচে আলোচনা করা হল:</h3>
            <li className="Primary-paragraph md-space-bottom">Arithmetic operators(এরিথম্যাটিক অপারেটরস)</li>
            <li className="Primary-paragraph md-space-bottom">Assignment operators(এস্যাইনমেনট অপারেটরস)</li>
            <li className="Primary-paragraph md-space-bottom">Comparison operators(কম্প্যরিসন অপারেটরস)</li>
            <li className="Primary-paragraph md-space-bottom">Logical operators(লজিকাল অপারেটরস)</li>
            <li className="Primary-paragraph md-space-bottom">Bitwise operators(বিটওয়াইজ অপারেটরস)</li>
            <h3 className="H4 md-space-y">C Arithmetic operators(এরিথম্যাটিক অপারেটরস)</h3>
            <p className="Primary-paragraph md-space-bottom">
                এরিথম্যাটিক অপারেটরস ব্যবহার করা ম্যাথম্যাটিক্যাল অপারেশন করার জন্য।
            </p>
            <DynamicTable data={tableData} headers={tableHeaders} />
            <div className="navigate-buttons-style">
                <ButtonSecondary btnLink={"/c_constants"} btnText={"❮ পূর্ববর্তী অধ্যায়"}/>
                <ButtonSecondary btnLink={"c_boolean"} btnText={"পরবর্তী অধ্যায় ❯"}/>
            </div>
        </div>
    )
}

export  default COperator