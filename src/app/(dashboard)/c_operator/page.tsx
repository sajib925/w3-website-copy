import {BoldText, HighlightText} from "@/libs/HighlightText/HighlightText";
import SyntaxHighlighter from "react-syntax-highlighter";
import {dracula} from "react-syntax-highlighter/dist/esm/styles/hljs";
import {ButtonSecondary} from "@/libs/buttons/button";
import DynamicTable from "@/libs/table/Table";


const COperator = () => {
    const codeString =  'int 50 + 50;\n' +
        'int a = 20, b = 30;\n' +
        'int result = a + b;\n' +
        'প্রথম লাইনে ভ্যালুর সাথে ভ্যালুর এবং তৃতীয় লাইনে ভ্যারিয়েবলের সাথে ভ্যারিয়েবলের অপারেশন চালানো হয়েছে।\n'
    const codeString2 =  'int x = 10;\n'
    const codeString3 =  'int x = 5;\n' +
        'int y = 3;\n' +
        'printf("%d", x > y);\n' +
        '//এখানে 1 বা true রিটার্ন করবে।\n'

    const codeString4 =  'int x = 5;\n' +
        'int y = 10;\n' +
        'if (x > 0 && y > 0) {\n'+
        '// এই শর্তটি সত্য হলে এই ব্লকে ঢুকবে\n'+
        '}\n'
    const codeString5 =  'int age = 25;\n' +
        'if (age < 18 || age > 60) {\n'+
        '// এই শর্তটি সত্য হলে এই ব্লকে ঢুকবে\n'+
        '}\n'
    const codeString6 =  'int isRainy = 0;\n' +
        'if (!isRainy) {\n'+
        '// এই শর্তটি সত্য হলে এই ব্লকে ঢুকবে\n'+
        '}\n'


    const arithmeticHeaders = [
        { title1: 'অপারেটর', title2: 'নাম', title3: 'উদাহরণ', title4: 'ফলাফল' },
    ];
    const arithmeticData = [
        { col1: '+', col2: 'যোগ', col3: 'এটি দুই মান যোগ করে।', col4: 'x + y' },
        { col1: '-', col2: 'বিয়োগ', col3: 'এটি একটি মান থেকে অন্যটি বিয়োগ করে।', col4: 'x - y' },
        { col1: '*', col2: 'গুণ', col3: 'এটি দুই মান গুণ করে।', col4: 'x * y' },
        { col1: '/', col2: 'ভাগ', col3: 'এটি একটি মানকে অন্যটি দ্বারা ভাগ করে।', col4: 'x / y' },
        { col1: '%', col2: 'ভাগশেষ', col3: 'এটি ভাগফলের অবশিষ্ট অংশটি দেয়।', col4: 'x % y' },
        { col1: '++', col2: 'ইনক্রিমেন্ট', col3: 'এটি একটি ভ্যারিয়েবলের মানকে 1 একক বাড়ায়।', col4: '++x' },
        { col1: '--', col2: 'ডিক্রিমেন্ট', col3: 'এটি একটি ভ্যারিয়েবলের মানকে 1 একক কমায়। ', col4: '--x' },
    ];

    const assignmentHeaders = [
        { title1: 'অপারেটর', title2: 'উদাহরণ', title3: 'একই উদাহরণ ভিন্নভাবে', },
    ];

    const assignmentData = [
        { col1: '=', col2: 'x = 5', col3: 'x = 5' },
        { col1: '+=', col2: 'x += 3', col3: 'x = x + 3' },
        { col1: '-=', col2: 'x -= 3', col3: 'x = x - 3' },
        { col1: '*=', col2: 'x *= 3', col3: 'x = x * 3' },
        { col1: '/=', col2: 'x /= 3', col3: 'x = x / 3' },
        { col1: '%=', col2: 'x %= 3', col3: 'x = x % 3'  },
        { col1: '&=', col2: 'x &= 3', col3: 'x = x & 3'  },
        { col1: '|=', col2: 'x |= 3', col3: 'x = x | 3' },
        { col1: '^=', col2: 'x ^= 3', col3: 'x = x ^ 3' },
        { col1: '>>=', col2: 'x >>= 3', col3: 'x = x >> 3' },
        { col1: '<<=', col2: 'x <<= 3', col3: 'x = x << 3'},
    ];


    const comparisonHeaders = [
        { title1: 'অপারেটর', title2: 'নাম', title3: 'বিবরণ', title4: 'উদাহরণ' },
    ];

    const comparisonData = [
        { col1: '==', col2: 'সমান', col3: 'x == y' , col4: 'এটি দুই মান সমান হলে 1 রিটার্ন করে। ',} ,
        { col1: '!=', col2: 'সমান নয়', col3: 'x != y' , col4: 'এটি দুই মান সমান নয় হলে 1 রিটার্ন করে।', },
        { col1: '>', col2: 'বড়', col3: 'x > y' , col4: 'এটি প্রথম মান দ্বিতীয় মানের চেয়ে বড় হলে 1 রিটার্ন করে।',},
        { col1: '<', col2: 'ছোট', col3: 'x < y' , col4: 'এটি প্রথম মান দ্বিতীয় মানের চেয়ে ছোট হলে 1 রিটার্ন করে। ', },
        { col1: '>=', col2: 'বড় অথবা সমান', col3: 'x >= y' , col4: 'এটি প্রথম মান দ্বিতীয় মানের চেয়ে বড় অথবা সমান হলে 1 রিটার্ন করে। ', },
        { col1: '<=', col2: 'ছোট অথবা সমান', col3: 'x <= y' , col4: 'এটি প্রথম মান দ্বিতীয় মানের চেয়ে ছোট অথবা সমান হলে 1 রিটার্ন করে।', }
    ];


    const logicalHeaders = [
        { title1: 'অপারেটর', title2: 'নাম', title3: 'বিবরণ', title4: 'উদাহরণ' },
    ];

    const logicalData = [
        { col1: '&& ', col2: 'লজিকাল এন্ড', col3: 'এটি ডান এবং বাম উভয় পাশের এক্সপ্রেশন দুটি সত্য হলে 1 রিটার্ন করে।', col4: 'x < 5 &&  x < 10' },
        { col1: '||', col2: 'লজিকাল অর', col3: 'এটি ডান এবং বাম যেকোন পাশের এক্সপ্রেশন সত্য হলে 1 রিটার্ন করে।', col4: 'x < 5 || x < 4' },
        { col1: '!', col2: 'লজিকাল নট', col3: 'এটি ফলাফলকে উল্টায়, সত্য মিথ্যা আর মিথ্যা হলে 1 রিটার্ন করে।', col4: '!(x < 5 && x < 10)' },
    ];



    return(
        <div  className="">
            <h2 className="H3 md-space-bottom">আজকে আমরা C প্রোগ্রামিংয়ের অপারেটরস সম্পর্কে জানবো।</h2>
            <p className="Primary-paragraph md-space-bottom">
                একটি অপারেটর একটি প্রতীক যা কম্পাইলারকে নির্দিষ্ট গাণিতিক বা যৌক্তিক ফাংশন সম্পাদন করতে বলে। অপারেটরস ব্যবহার করা হয় ভ্যালু এবং ভ্যারিয়েবলের উপর অপারেশন চালানোর জন্য। যেমন প্লাস <HighlightText highlightText={"+"}/> ব্যবহার করা হয় দুটি ভ্যালু বা মানকে যোগ করার জন্য কিন্তু আমরা চাইলে একটি ভ্যারিয়েবল ও একটি ভ্যালুকে এবং চাইলে দুই বা ততোদিক ভ্যারিয়েবলকে যোগ করতে পারি। নিচের উদাহরণটি দেখুন
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
            <h3 className="H4 md-space-y">C এরিথম্যাটিক অপারেটরস (Arithmetic operators)</h3>
            <p className="Primary-paragraph md-space-bottom">
                এরিথম্যাটিক অপারেটরস ব্যবহার করা ম্যাথম্যাটিক্যাল অপারেশন করার জন্য।
            </p>
            <DynamicTable data={arithmeticData} headerData={arithmeticHeaders} />
            <h3 className="H4 md-space-y">C অ্যাসাইনমেন্ট অপারেটরস (Assignment operators)</h3>
            <p className="Primary-paragraph md-space-b">
                অ্যাসাইনমেন্ট অপারেটরগুলি ব্যবহার করা হয় ভ্যালু ভ্যারিয়েবলে অ্যাসাইন করার জন্য। নীচের উদাহরণে, আমরা অ্যাসাইনমেন্ট অপারেটর (=) ব্যবহার করে একটি x নামক ভ্যারিয়েবের মধ্যে 10 কে ভ্যালু বা মান হিসেবে অ্যাসাইন করছি:
            </p>
            <div className="max-w-[200px] sm-space-y">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString2}
                </SyntaxHighlighter>
            </div>
            <p className="Primary-paragraph md-space-y">
                অ্যাসাইনমেন্ট অপারেটরগুলি ব্যবহার করে যোগ <HighlightText highlightText={"+"}/> , বিয়োগ <HighlightText highlightText={"-"}/> , গুণ <HighlightText highlightText={"*"}/> , ভাগ <HighlightText highlightText={"/"}/> করা যে কথা এরিথম্যাটিকগুলি ব্যবহার করে করা একই কথা যেমন আপনি যদি এইভাবে লিখেন <HighlightText highlightText={"x += 3"}/> এইটা যে ফলাফল দিবে এইটা <HighlightText highlightText={"x = x + 3"}/> ঠিক একই ফলাফল দিবে। অ্যাসাইনমেন্ট অপারেটরগুলির লিস্ট নিচে দেয়া হলঃ
            </p>
            <DynamicTable data={assignmentData} headerData={assignmentHeaders} />
            <h3 className="H4 md-space-y">C কম্পেরিজন অপারেটরস (Comparison Operators)</h3>
            <p className="Primary-paragraph md-space-bottom">
                কম্পেরিজন অপারেটরস ব্যবহার করা হয় দুইটি ভ্যালু বা ভ্যারিয়েবলের মধ্যে তুলনা করার জন্য। প্রোগ্রামিংয়ে এটা খুবই গুরুত্বপূর্ণ একটা টপিক। কারণ আমাদের যখন দুটি ভ্যালু বা ভ্যারিয়েবলের মধ্যে তুলনা করে ফলাফল বের করার প্রয়োজন পরে তখন এটি আমাদের উত্তর খুঁজে পেতে এবং সিদ্ধান্ত নিতে সহায়তা করে। একটি কম্পেরিজন অপারেটর সবসময় <HighlightText highlightText={"1"}/> অথবা <HighlightText highlightText={"0"}/> রিটার্ন করে। <HighlightText highlightText={"1"}/> মানে <HighlightText highlightText={"true"}/> বা সত্য আর <HighlightText highlightText={"0"}/> মানে <HighlightText highlightText={"false"}/> বা মিথ্যা। যে ভ্যালু গুলিকে বুলিয়ান ভ্যালু বলা হয়, এ সম্পর্কে আমরা বুলিয়ান ও ইফ ইলস অধ্যায়ে বিস্তারিত জানবো।
            </p>
            <p className="Primary-paragraph md-space-bottom">
                নিচের উদাহরণটিতে আমরা গ্রেটার দেন <HighlightText highlightText={">"}/> অপারেটর ব্যবহার করে দেখবো 5 কি 3 চেয়ে বড় কিনা।
            </p>
            <div className="max-w-[400px] sm-space-y">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString3}
                </SyntaxHighlighter>
            </div>
            <p className="Primary-paragraph md-space-bottom">
               নিচে কম্পেরিজন অপারেটরগুলির লিস্ট নিচে দেয়া হলঃ
            </p>

            <DynamicTable data={comparisonData} headerData={comparisonHeaders} />

            <h3 className="H4 md-space-y">C লজিক্যাল অপারেটরস (Logical Operators)</h3>
            <p className="Primary-paragraph md-space-bottom">
                লজিক্যাল অপারেটরগুলি ব্যবহার হয় মৌলিক সত্য (True) এবং মৌলিক মিথ্যা (False) মান পরীক্ষা করতে। আমরা তিনটি প্রধান লজিক্যাল অপারেটর দেখতে পাব, যা হলো: এন্ড <HighlightText highlightText={"&&"}/>  <HighlightText highlightText={"||"}/> <HighlightText highlightText={"!"}/>
            </p>
            <p className="Primary-paragraph md-space-bottom">
               <BoldText boldText={"এন্ড"}/>  <HighlightText highlightText={"&&"}/> এই অপারেটরটি দুই বা একাধিক শর্ত যাচাই করে এবং সব শর্তই সত্য হলে <HighlightText highlightText={"true"}/>  রিটার্ন করবে।
            </p>
            <div className="max-w-[400px] sm-space-y">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString4}
                </SyntaxHighlighter>
            </div>
            <p className="Primary-paragraph md-space-bottom">
                <BoldText boldText={"অর"}/>  <HighlightText highlightText={"|| "}/> এই অপারেটরটি দুই বা একাধিক শর্ত যাচাই করে এবং কমপক্ষে একটি শর্ত সত্য হলে <HighlightText highlightText={"true"}/>  রিটার্ন করবে।
            </p>
            <div className="max-w-[400px] sm-space-y">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString5}
                </SyntaxHighlighter>
            </div>
            <p className="Primary-paragraph md-space-bottom">
                <BoldText boldText={"নট"}/>  <HighlightText highlightText={"!"}/> এই অপারেটরটি একটি শর্ত কে উল্টাই ফেলে, অর্থাৎ সত্য হলে এটি মিথ্যা হবে এবং মিথ্যা হলে এটি সত্য <HighlightText highlightText={"true"}/> হবে।
            </p>
            <div className="max-w-[400px] sm-space-y">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString6}
                </SyntaxHighlighter>
            </div>
            <p className="Primary-paragraph md-space-bottom">
               উপরের উদাহরণগুলি যদি বুজতে কষ্ট তাহলে শুধু দেখে রাখুন এই বিষয়ে আমরা ইফ ইলস অধ্যায়ে আরও বিস্তারিত জানবো। নিচে কম্পেরিজন অপারেটরগুলির লিস্ট নিচে দেয়া হলঃ
            </p>
            <DynamicTable data={logicalData} headerData={logicalHeaders} />

            <div className="navigate-buttons-style">
                <ButtonSecondary btnLink={"/c_constants"} btnText={"❮ পূর্ববর্তী অধ্যায়"}/>
                <ButtonSecondary btnLink={"c_boolean"} btnText={"পরবর্তী অধ্যায় ❯"}/>
            </div>
        </div>
    )
}

export  default COperator