import {HighlightText} from "@/libs/HighlightText/HighlightText";
import SyntaxHighlighter from "react-syntax-highlighter";
import {dracula} from "react-syntax-highlighter/dist/esm/styles/hljs";
import Image from "next/image";
import {ButtonSecondary} from "@/libs/buttons/button";


const CStrings = () => {
    const codeString = 'char greetings[] = "Hello World!";'
    const codeString2 = 'data_type array_name[array_size];'
    const codeString3 = 'int myNumbers[] = {25, 50, 75, 100};\n' +
        'myNumbers[0] = 33;\n' +
        '\n' +
        'printf("%d", myNumbers[0]);\n' +
        '\n' +
        '// এখানে আউটপুট 33 হবে প্রথমে 25 ডিক্লেয়ার করা হলেও ২ নাম্বার লাইনে ইন্ডেক্স ব্যবহার করে ভ্যালু পরিবর্তন করা হয়েছে।'
    const codeString4 = 'int myNumbers[] = {25, 50, 75, 100};\n' +
        'int i;\n' +
        '\n' +
        'for (i = 0; i < 4; i++) {\n' +
        '  printf("%d\\n", myNumbers[i]);\n' +
        '// এখানে আউটপুট হবে 25 50 75 100' +
        '}'
    const codeString5 = '// এখানে অ্যারে ডিক্লেয়ার করা হয়েছে\n' +
        'int myNumbers[4];\n' +
        '\n' +
        '// এখানে ইনডেক্স নাম্বার ব্যবহার করে ভ্যালু এস্যাইন করা হচ্ছে\n' +
        'myNumbers[0] = 25;\n' +
        'myNumbers[1] = 50;\n' +
        'myNumbers[2] = 75;\n' +
        'myNumbers[3] = 100;'
    const codeString6 = 'int matrix[2][3] = { {1, 4, 2}, {3, 6, 8} };'
    const codeString7 = 'int matrix[2][3] = { {1, 4, 2}, {3, 6, 8} };\n' +
        '\n' +
        'printf("%d", matrix[0][2]);  // Outputs 2'
    const codeString8 = 'int matrix[2][3] = { {1, 4, 2}, {3, 6, 8} };\n' +
        'matrix[0][0] = 9;\n' +
        '\n' +
        'printf("%d", matrix[0][0]);  // Now outputs 9 instead of 1'
    const codeString9 = 'int matrix[2][3] = { {1, 4, 2}, {3, 6, 8} };\n' +
        '\n' +
        'int i, j;\n' +
        'for (i = 0; i < 2; i++) {\n' +
        '  for (j = 0; j < 3; j++) {\n' +
        '    printf("%d\\n", matrix[i][j]);\n' +
        '  }\n' +
        '}'

    return(
        <div  className="">
            <h2 className="H3 md-space-bottom">আজকে আমরা C প্রোগ্রামিংয়ের অন্যতম গুরুত্বপূর্ণ একটি টপিক স্ট্রিং সম্পর্কে জানবো।</h2>
            <p className="Primary-paragraph md-space-bottom">
                সি প্রোগ্রামিং এ ক্যারেক্টারে(character) এর array কে স্ট্রিং বলা হয়। null(/0) ক্যারেক্টারের মাধ্যমে স্ট্রিং এর সমাপ্তি ঘটে। উদাহরনস্বরুপঃ <HighlightText highlightText={"\"c string tutorial\""}/> এখানে, "c string tutorial" হলো স্ট্রিং(string)। কম্পাইলার যখন স্ট্রিং কে কম্পাইল করে তখন স্ট্রিং এর শেষে একটি null(/0) ক্যারেক্টার যুক্ত করে দেয়।
            </p>
            <h3 className="H4 md-space-bottom">C স্ট্রিং ডিক্লেয়ারেশন</h3>
            <p className="Primary-paragraph md-space-bottom">
                স্ট্রিং(string) নিয়ে কাজ করার পূর্বে প্রথমে তাদেরকে ডিক্লেয়ার(declared) করতে হবে।<br/>

                array কে যে পদ্ধতিতে ডিক্লেয়ার(declared) করা হয় ঠিক একই পদ্ধতিতে স্ট্রিংও ডিক্লেয়ার করা হয়। শুধু পার্থক্য হলো স্ট্রিং char টাইপের।
            </p>
            <div className="md-space-y">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString}
                </SyntaxHighlighter>
            </div>
            <p className="Primary-paragraph md-space-bottom">
                <HighlightText highlightText={"Array"}/> আমরা চাইলে নিচের উদাহরণটির মত করেও অ্যারে তৈরি পারি, এইভাবে আমরা তখনি অ্যারে তৈরি করবো যখন আমাদের ভ্যালু পড়ে এস্যাইন করা লাগবে। প্রথমেই কোন ডেটা টাইপ সেটা লিখতে হবে তারপর একটা নাম দিতে হবে নাম মিনিংফুল হলে ভাল তারপর [] স্কয়ার ব্র্যকেটের ভিতর অ্যারের সাইজ দিতে হবে মানে পরে আমরা কতগুলো ভ্যালু এস্যাইন করতে চাই সেটা লিখতে হবে।  <br/> <br/> নিচের উদাহরণটি দেখুনঃ
            </p>
            <div className="md-space-bottom">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString2}
                </SyntaxHighlighter>
            </div>
            <h3 className="H4 md-space-bottom">C অ্যারের এলিমেন্টকে এক্সেস করার নিয়ম</h3>
            <p className="Primary-paragraph md-space-bottom">
                ইনডেক্স(index) ব্যবহার করে Array এর এলিমেন্টকে এক্সেস করা হয়। <br/> <br/>

                ধরুন, আপনি <HighlightText highlightText={"float mark[5];"}/> অ্যারেটি ডিক্লেয়ার করেছেন। তাহলে mark এর এলিমেন্ট-সমূহকে এক্সেস করার জন্য প্রথম এলিমেন্টের ক্ষেত্রে  mark[0], দ্বিতীয় এলিমেন্টের ক্ষেত্রে  mark[1] লিখতে হবে এবং এভাবে চলতে থাকবে।
            </p>

            <ul>
                <li className="Primary-paragraph md-space-bottom">Array এর ইনডেক্সিং 1 এর পরিবর্তে 0 দিয়ে শুরু হয়। উপরের উদাহরণে array এর প্রথম এলিমেন্টটি হলোঃ mark[0]</li>
                <li className="Primary-paragraph md-space-bottom">Array এর সাইজ যদি n হয় তাহলে এর শেষ এলিমেন্টকে এক্সেস করার জন্য (n-1) ইনডেক্স ব্যবহার করা হয়। উপরের উদাহরণে array এর সাইজ ৫ তাই শেষ এলিমেন্টকে mark[4] এর মাধ্যমে এক্সেস করা হয়েছে।</li>
                <li className="Primary-paragraph md-space-bottom">ধরুন mark[0] এর এড্রেস 8024a দ্বারা শুরু হয়েছে তাহলে  mark[1] এর এড্রেস হবে 8028a এবং mark[2] এর এড্রেস হবে 8032a, কারণ ফ্লোট ভ্যারিয়েবলের সাইজ ৪(চার) বাইট।</li>
            </ul>
            <p className="Primary-paragraph md-space-y">
                নিচের উদাহরণটি দেখুনঃ
            </p>
            <div className="sm-space-y">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString}
                </SyntaxHighlighter>
            </div>
            <h3 className="H4">C অ্যারের এলিমেন্টকে পরিবর্তন করার নিয়ম</h3>
            <p className="Primary-paragraph md-space-y">
                আমরা ভ্যারিয়েবল অধ্যায়ে দেখিছিলাম ভ্যারিয়েবল ভ্যালু পরিবর্তন করা যায়। ইনডেক্স নাম্বার ব্যবহার করে অ্যারের ভ্যালুও পরিবর্তন করা যায়। নিচের উদাহরণটি দেখুনঃ
            </p>
            <div className="md-space-bottom">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString3}
                </SyntaxHighlighter>
            </div>
            <h3 className="H4">C অ্যারের এলিমেন্টগুলির উপর লুপ চালানোর নিয়ম</h3>
            <p className="Primary-paragraph md-space-y">
                আমরা চাইলে অ্যারের এলিমেন্টগুলির উপর লুপ চালতে পারি। লুপ চালিয়ে অ্যারের ভ্যালু ইনপুট নিতে পারি আউটপুট দেখতে পারি। এখন আমরা আউটপুট দেখতে পারি সেটার একটা উদাহরণ দেখব, ইনপুট অধ্যায়ে গিয়ে অ্যারের ভ্যালু কিভাবে ইনপুট নেয় সেটা দেখবো। নিচের উদাহরণটি দেখুনঃ
            </p>
            <div className="md-space-bottom">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString4}
                </SyntaxHighlighter>
            </div>
            <h3 className="H4">C অ্যারের ভ্যালু সরাসরি এস্যাইন না করে সাইজ ডিক্লেয়ার করে পড়ে ভ্যালু এস্যাইন করার নিয়ম</h3>
            <p className="Primary-paragraph md-space-y">
                আমরা ভ্যারিয়েবল অধ্যায়ে দেখিছিলাম শুরুতে ভ্যারিয়েবল ডিক্লেয়ার করে পড়ে ভ্যালু এস্যাইন করা যায়। ইনডেক্স নাম্বার ব্যবহার করে শুরুতে অ্যারে ডিক্লেয়ার করে পড়ে ভ্যালু এস্যাইন করা যায়। নিচের উদাহরণটি দেখুনঃ
            </p>
            <div className="md-space-bottom">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString5}
                </SyntaxHighlighter>
            </div>

            <h3 className="H4 md-space-bottom">C Multidimensional মাল্টিডায়মেনশনাল অ্যারে</h3>
            <p className="Primary-paragraph md-space-y">
                মাল্টিডাইমেনশনাল(multi-dimensional) Array বলতে ঐধরনের Array কে বুঝায় যার মধ্যে এক বা তার অধিক Array থাকে। Array এর ডাইমেনশন বলতে কোন একটি এলিমেন্টকে এক্সেস(access) করার জন্য যত সংখ্যক ইনডেক্সের প্রয়োজন হয় তাকে বুঝায়।
            </p>
            <ul>
                <li className="Primary-paragraph md-space-bottom">দুই ডাইমেনশনের Array থেকে একটি এলিমেন্টকে এক্সেস করার জন্য আপনার দুটি ইনডেক্স নম্বর লাগবে।</li>
                <li className="Primary-paragraph md-space-bottom">তিন ডাইমেনশনের Array থেকে একটি এলিমেন্টকে এক্সেস করার জন্য আপনার তিনটি ইনডেক্স নম্বর লাগবে।</li>
            </ul>
            <p className="Primary-paragraph md-space-y">
                সি প্রোগ্রামিং এ আপনি array এর মধ্যে array তৈরি করতে পারেন যা mult-idimensional array নামে পরিচিত। উদাহরণস্বরূপঃ
            </p>
            <div className="sm-space-y">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString6}
                </SyntaxHighlighter>
            </div>
            <p className="Primary-paragraph md-space-y">
                এখানে x হলো দ্বি-মাত্রিক(two-dimensional) অ্যারে। এই array ১২টি এলিমেন্ট ধারণ করতে পারে। আপনি array কে table হিসাবেও কল্পনা করতে পারেন, যেখানে ৩টি সারি(row) এবং প্রত্যেক সারিতে ৪টি করে কলাম(column) আছে।
            </p>

            <h3 className="H4 md-space-bottom">C Multidimensional মাল্টিডায়মেনশনাল অ্যারের এলিমেন্টকে এক্সেস করার নিয়ম</h3>
            <p className="Primary-paragraph md-space-y">
                একটি Multidimensional মাল্টিডায়মেনশনাল অ্যারেতে একটি ইলিমেন্ট অ্যাক্সেস করতে, আপনাকে স্পষ্টভাবে উল্লেখ করতে হয় উভয় সারি এবং কলামের ইন্ডেক্স নম্বরগুলি। ইন্ডেক্সগুলি জিরো থেকে শুরু হয়।<br/> নিচের উদাহরণটি দেখুনঃ
            </p>
            <div className="sm-space-y">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString7}
                </SyntaxHighlighter>
            </div>
            <h3 className="H4 md-space-bottom">C Multidimensional মাল্টিডায়মেনশনাল অ্যারের এলিমেন্টকে পরিবর্তন করার নিয়ম</h3>
            <p className="Primary-paragraph md-space-y">
                একটি এলিমেন্টের মান পরিবর্তন করতে, আপনি কোন রো বা সারির কত নাম্বার ইনডেক্স এবং একই রো বা সারির কত নাম্বার কলাম এক্সেস করতে চাচ্ছেন সেটা লিখতে হবে। <br/> নিচের উদাহরণটিতে প্রথম রো বা সারির (ইন্ডেক্স 0) এবং প্রথম কলামের (ইন্ডেক্স 0) মান পরিবর্তন করে দেখানো হলঃ
            </p>
            <div className="sm-space-y">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString8}
                </SyntaxHighlighter>
            </div>
            <h3 className="H4 md-space-bottom">C Multidimensional মাল্টিডায়মেনশনাল অ্যারের এলিমেন্টগুলির উপর লুপ চালানোর নিয়ম</h3>
            <p className="Primary-paragraph md-space-y">
                Multidimensional মাল্টিডায়মেনশনাল অ্যারের সব উপাদানে লুপ চালাতে, সাধারিত দুটি লুপ ব্যবহার করতে হবে - একটি রো বা সারির জন্য এবং অপরটি কলামের জন্য। <br/> নিচের উদাহরণটি দেখুনঃ
            </p>
            <div className="sm-space-y">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString9}
                </SyntaxHighlighter>
            </div>
            <div className="navigate-buttons-style">
                <ButtonSecondary btnLink={"/c_break_continue"} btnText={"❮ পূর্ববর্তী অধ্যায়"}/>
                <ButtonSecondary btnLink={"/c_strings"} btnText={"পরবর্তী অধ্যায় ❯"}/>
            </div>
        </div>
    )
}

export  default CStrings