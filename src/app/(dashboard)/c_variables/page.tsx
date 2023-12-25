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
        'return 0;\n' +
        '}';
    const codeString2 = '#include <stdio.h>\n' +
        '\n' +
        'int main() {\n\n' +
        'int myNum = 50;\n' +
        'printf("%d", myNum);\n' +
        '//এখানে 50 আউটপুট দেখাবে কারণ এখানে ফরমেট স্পেসিফায়ার ব্যবহার করা হয়েছে।\n'+
        'return 0;\n' +
        '}';
    const codeString3 = '#include <stdio.h>\n' +
        '\n' +
        'int main() {\n\n' +
        'int myNum = 50;\n' +
        'printf("আমার পছন্দের নাম্বার হচ্ছে: %d", myNum);\n' +
        '//এখানে আউটপুট দেখাবে আমার পছন্দের নাম্বার হচ্ছে: 10\n'+
        'return 0;\n' +
        '}';
    const codeString4 = '#include <stdio.h>\n' +
        '\n' +
        'int main() {\n\n' +
        'int myNum = 50;\n' +
        'char myChar = b;\n' +
        'printf("আমার পছন্দের নাম্বার হচ্ছে: %d এবং পছন্দের লেটার হচ্ছে: %c", myNum, myChar);\n' +
        '//এখানে আউটপুট দেখাবে, আমার পছন্দের নাম্বার হচ্ছে: 10 এবং পছন্দের লেটার হচ্ছে: b\n'+
        'return 0;\n' +
        '}';
    const codeString5 = '#include <stdio.h>\n' +
        '\n' +
        'int main() {\n\n' +
        'int myNum = 50;\n' +
        'int otherNum = 20;\n' +
        'otherNum = myNum;\n' +
        'printf("%d", otherNum);\n' +
        '//এখানে আউটপুট দেখাবে 20 \n'+
        'return 0;\n' +
        '}';
    const codeString6 = '#include <stdio.h>\n' +
        '\n' +
        'int main() {\n\n' +
        'int myNum = 50;\n' +
        'myNum = 40;\n' +
        'printf("%d", myNum);\n' +
        '//এখানে আউটপুট দেখাবে 40, কারণ এখানে myNum এর ভ্যালু রিএস্যাইন করা হয়েছে। \n'+
        'return 0;\n' +
        '}';
    const codeString7 = '#include <stdio.h>\n' +
        '\n' +
        'int main() {\n\n' +
        'int myNum;\n' +
        'myNum = 20;\n' +
        'printf("%d", myNum);\n' +
        '//এখানে আউটপুট দেখাবে 20, কারণ এখানে এম্পটি ভ্যারিএবল myNum এর ভিতর ভ্যালু এস্যাইন করা হয়েছে। \n'+
        'return 0;\n' +
        '}';
    const codeString8 = '#include <stdio.h>\n' +
        '\n' +
        'int main() {\n\n' +
        'int x = 10, y = 30, z = 50, sum;\n' +
        'sum = x + y + z;\n' +
        'printf("%d", sum);\n' +
        '//এখানে আউটপুট দেখাবে 90, \n'+
        'return 0;\n' +
        '}';
    const codeString9 = 'int minutesPerHour = 60;\n' +
        'int m = 60;\n' +
        '//এখানে উপরের নাম দ্বারা বুঝা যাচ্ছে যে ১ ঘণ্টায় কত মিনিট সেটা বুঝাচ্ছে, কিন্তু নিচের লাইন দ্বারা বুঝা যাচ্ছে না, \n'

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
                আপনি যদি একটা ভ্যরিয়েবল ডিক্লেয়ার করতে চান তাহলে, প্রথমে যে টাইপের ডাটা স্টোর করতে চান সেই টাইপ লিখতে হবে। ইন্টিজার টাইপ হলে <HighlightText highlightText={"int"}/>, ফ্লটিং টাইপ হলে <HighlightText highlightText={"float"}/> এবং ক্যারেক্টার টাইপ হলে  <HighlightText highlightText={"char"}/> তারপর ভ্যরিয়েবলের একটি নাম যেমন <HighlightText highlightText={"myVariable"}/> নাম আপনি যেকোন কিছুই দিতে পারেন, তবে মিনিংফুল নাম দেয়া ভালো, যাতে আপনি পরে বুজতে পারেন। তারপর <HighlightText highlightText={"="}/> ইকুয়াল সাইন,  তারপর ভ্যরিয়েবলের ভ্যালু দিতে হবে। নিচে উদাহরণ এর মাধ্যমে দেখানো হল:
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
                হাই লেভেল প্রোগ্রামিং ল্যাঙ্গুয়েজ যেমন <HighlightText highlightText={"C++, Python, Java etc"}/> এইগুলোতে প্রিন্টএফ ফাঙ্কশনের ভিতর এইভাবে সরাসরি <HighlightText highlightText={"printf(myNum);"}/> ভ্যারিয়েবলের নাম লিখলেই আউটপুট পাওয়া যায়। কিন্তু <HighlightText highlightText={"C"}/> তে যে ডাটা টাইপের ভ্যালু আমরা চাচ্ছি সেটার ফরমেট স্পেসিফায়ার লিখতে হয়। চলুন উদাহরণ এর মাধ্যমে এক্সপ্লোর করা যাক।
            </p>
            <div className="">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString}
                </SyntaxHighlighter>
            </div>

            <p className="Primary-paragraph md-space-y">
                উপরের উদাহরণটিতে কোন আউটপুট দেখাবে না কারণ এখানে কোন ফরমেট স্পেসিফায়ার ব্যবহার করা হয়নি, নিচে 50 আউটপুট দেখাবে কারণ এখানে ফরমেট স্পেসিফায়ার ব্যবহার করা হয়েছে।
            </p>

            <div className="">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString2}
                </SyntaxHighlighter>
            </div>
            <h3 className="H4 md-space-y">ফরমেট স্পেসিফায়ার কি? কখন ফরমেট স্পেসিফায়ার ব্যবহার করব?</h3>
            <p className="Primary-paragraph sm-space-bottom">
                C-তে ফরমেট স্পেসিফায়ার হল একটি বিশেষ কোড যা প্রিন্টএফ এবং স্ক্যানফের মতো ফাংশনগুলিকে ডাটা টাইপ বুজতে সাহায্য করে যাতে ফাংশনগুলি ইনপুট নেয়ার সময় ও আউটপুট দেবার সময় বুজতে পারে এটা কোন ধরণের ডাটা টাইপ। তারা কম্পাইলারকে বলে যে কী ধরণের ডাটা আশা করতে হবে এবং কীভাবে এটি ব্যাখ্যা করতে হবে। ফরমেট স্পেসিফায়ার একটি পার্সেন্ট <BoldText boldText="%"/>  চিহ্ন দিয়ে শুরু হয় এবং একটি নির্দিষ্ট অক্ষর দ্বারা বুজানো হয় যে এটা কোন ডাটা টাইপের প্রতিনিধিত্ব করছে। নিচে গুরুত্বপূর্ণ কিছু ফরমেট স্পেসিফায়ার তুলে ধরা হল:
            </p>
            <li className="Primary-paragraph">
               <HighlightText highlightText={"int"}/>{" "}<BoldText boldText={"ইন্টিজার টাইপের জন্য ব্যবহৃত হয়"}/>{" "} <HighlightText highlightText={"%d or %i"}/>
            </li>
            <li className="Primary-paragraph">
                <HighlightText highlightText={"float"}/>{" "}<BoldText boldText={"ফ্লোট টাইপের জন্য ব্যবহৃত হয়"}/>{" "} <HighlightText highlightText={"%f"}/>
            </li>
            <li className="Primary-paragraph">
                <HighlightText highlightText={"long long int/double"}/>{" "}<BoldText boldText={"লং লং ইন্টিজার টাইপের জন্য ব্যবহৃত হয়"}/>{" "} <HighlightText highlightText={"%ld"}/>
            </li>
            <li className="Primary-paragraph">
                <HighlightText highlightText={"char"}/> {" "}<BoldText boldText={"ক্যারেক্টার টাইপের জন্য ব্যবহৃত হয়"}/>{" "} <HighlightText highlightText={"%c"}/>
            </li>
            <li className="Primary-paragraph">
                <HighlightText highlightText={"string"}/> {" "}<BoldText boldText={"স্ট্রিং টাইপের জন্য ব্যবহৃত হয়"}/>{" "} <HighlightText highlightText={"%s"}/>
            </li>

            <p className="Primary-paragraph md-space-y">
                আপনি চাইলে একটি প্রিন্টএফ ফাঙ্কশনের মধ্যে টেক্সট এবং ভ্যারিয়েবল এক সাথে প্রিন্ট করতে পারবেন যেমন:
            </p>
            <div className="">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString3}
                </SyntaxHighlighter>
            </div>
            <p className="Primary-paragraph md-space-y">
                আপনি চাইলে একটি প্রিন্টএফ ফাঙ্কশনের মধ্যে টেক্সট এবং একাদিক ভ্যারিয়েবলের ডাটা এক সাথে প্রিন্ট করতে পারবেন যেমন:
            </p>
            <div className="">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString4}
                </SyntaxHighlighter>
            </div>
            <p className="Primary-paragraph md-space-y">
                আপনি চাইলে একটি ভ্যারিয়েবলের ভ্যালুকে রিএস্যাইন করতে পারবেন এবং একটি এম্পটি ভ্যারিয়েবলের ভিতর অন্য একটি ভ্যারিয়েবলের ভ্যালু এস্যাইন করতে পারবেন এবং এম্পটি ভ্যারিয়েবল ডিক্লেয়ার করে পরে ভ্যালু এস্যাইন করতে পারবেন। নিচের উদাহরণ দেখলে বিষয়টা আরও সহজ হয়ে যাবে।
            </p>
            <div className="">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString5}
                </SyntaxHighlighter>
            </div>
            <p className="Primary-paragraph md-space-y">
                এখানে আউটপুট দেখাবে 20 কারণ otherNum এর ভিতর myNum এর ভ্যালু এস্যাইন করা হয়েছে, তাই এখানে 20 আউটপুট দেখাবে। এবং নিচে আউটপুট দেখাবে 40, কারণ এখানে myNum ভ্যালু রিএস্যাইন করা হয়েছে।
            </p>
            <div className="">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString6}
                </SyntaxHighlighter>
            </div>
            <p className="Primary-paragraph md-space-y">
                এখানে আউটপুট দেখাবে 20 কারণ এখানে myNum প্রথমে এম্পটি থাকলেও পরে ভ্যালু এস্যাইন করা হয়েছে।
            </p>
            <div className="">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString7}
                </SyntaxHighlighter>
            </div>
            <p className="Primary-paragraph md-space-y">
                আপনি চাইলে একই ধরণের একাধিক এম্পটি অথবা ভ্যালুসহ ভ্যারিএবল একসাথে ডিক্লেয়ার করতে পারবেন। এবং সেগুলোর উপর অপারেশন চালাতে পারবেন। নিচের উদাহরণটিতে <HighlightText highlightText={"x, y, z"}/> কে ভ্যালুসহ এবং {" "}<HighlightText highlightText={"sum"}/> কে এম্পটি ডিক্লেয়ার করা হয়েছে, তারপরের লাইনে <HighlightText highlightText={"x, y, z"}/> এর যোগফল <HighlightText highlightText={"sum"}/> -এ এস্যাইন করা হয়েছে:
            </p>
            <div className="">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString8}
                </SyntaxHighlighter>
            </div>
            <h3 className="H4 md-space-y">C ভ্যারিএবলের নামকরণ।</h3>
            <p className="Primary-paragraph md-space-y">
                C ভ্যারিএবলের নাম অবশ্যই একটি হতে অন্য আর একটি ইউনিক হতে হবে, ভ্যারিএবলের নাম সর্ট হতে পারে যেমন <HighlightText highlightText={"x, y, z"}/> অথবা বর্ণনামূলক বা মিনিংফুল হতে পারে যেমন <HighlightText highlightText={"age, sum, totalVolume"}/> আপনি যে কোন ধরণের নাম ব্যবহার করতে পারেন তবে বর্ণনামূলক বা মিনিংফুল নাম ব্যবহার করাই ভালো।
            </p>
            <div className="">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString9}
                </SyntaxHighlighter>
            </div>
            <h3 className="H4 md-space-y">C ভ্যরিয়েবলসের নাম দেয়ার কিছু সাধারণ নিয়ম</h3>
            <li className="Primary-paragraph sm-space-bottom">
                ভ্যরিয়েবলসের নামে লেটার <HighlightText highlightText={"a b c etc"}/>, নাম্বার <HighlightText highlightText={"1 2 3 etc"}/> এবং আন্ডারস্কোর <HighlightText highlightText={"(_)"}/> থাকতে পারে
            </li>
            <li className="Primary-paragraph sm-space-bottom">
                ভ্যরিয়েবলসের নাম অবশ্যই কোন লেটার <HighlightText highlightText={"(_)"}/> বা আন্ডারস্কোর <HighlightText highlightText={"a b c etc"}/> দিয়ে শুরু করতে হবে।
            </li>
            <li className="Primary-paragraph sm-space-bottom">
                ভ্যরিয়েবলসের নাম কেস সেনসেটিভ, আপনি একটা ভ্যরিয়েবলের নাম ক্যাপিটাল লেটার এবং আর একটার নাম স্মল লেটার দিয়ে লিখলে দুইটা ভিন্ন বলে গণ্য হবে <HighlightText highlightText={"mynum"}/> ও <HighlightText highlightText={"myNum"}/> এখানে দুইটা ভিন্ন বলে গণ্য হবে।
            </li>
            <li className="Primary-paragraph sm-space-bottom">
                ভ্যরিয়েবলসের নামে কোন হোয়াইট স্পেস এবং কোন স্পেশাল ক্যারেকটার <HighlightText highlightText={" !, #, %, etc."}/> ব্যবহার করা যাবে না।
            </li>
            <li className="Primary-paragraph sm-space-bottom">
                ভ্যরিয়েবলসের নামে কোন রিজারব ওয়ার্ড যেমন <HighlightText highlightText={"int"}/> ব্যবহার করা যাবে না।
            </li>
            <div className="navigate-buttons-style">
                <ButtonSecondary btnLink={"/c_comments"} btnText={"❮ পূর্ববর্তী অধ্যায়"}/>
                <ButtonSecondary btnLink={"c_data_types"} btnText={"পরবর্তী অধ্যায় ❯"}/>
            </div>
        </div>
    )
}

export  default CVaribales