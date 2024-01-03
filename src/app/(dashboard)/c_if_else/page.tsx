import SyntaxHighlighter from "react-syntax-highlighter";
import {dracula} from "react-syntax-highlighter/dist/esm/styles/hljs";
import {ButtonSecondary} from "@/libs/buttons/button";
import {HighlightText} from "@/libs/HighlightText/HighlightText";


const CIfElse = () => {

    const codeString = '  if (এখানে কন্ডিশন লিখতে হবে যেটা সত্য হলে ২য় ব্রেকেট এর ভিতরের স্টেটমেন্ট কাজ করবে) {\n' +
        '  {\n'+
        '    কন্ডিশন সত্য না হলে এই লাইন কাজ করবে না\n' +
        '  }'


    const codeString2 = '#include <stdio.h>\n' +

        'int main() {\n \n' +
        '  int english = 51;\n\n'+
        '  if (english <= 40){\n' +
        '    Congratulations!  You Passed in english Subject.\n' +
        '  }\n\n' +
        '  return 0;\n' +
        '}';
    const codeString3 = '  if (এখানে কন্ডিশন লিখতে হবে যেটা সত্য হলে ২য় ব্রেকেট এর ভিতরের স্টেটমেন্ট কাজ করবে) {\n' +
        '  {\n'+
        '    কন্ডিশন সত্য না হলে এই লাইন কাজ করবে না।\n' +
        '  }'+
        '  else {\n' +
        '    if কন্ডিশন মিথ্যা হলে এই লাইন অটো কাজ করবে।\n' +
        '  }\n'

    const codeString4 =  '#include <stdio.h>\n' +

        'int main() {\n \n' +
        '  int english = 51;\n\n'+
        '  if (english >= 40){\n' +
        '    Congratulations!  You Passed in english Subject.\n' +
        '  }\n' +
        '  else {\n' +
        '    Opps!  You failed in english Subject. \n' +
        '  }\n\n' +
        '  return 0;\n' +
        '}';
    const codeString5 = '  if (এখানে কন্ডিশন লিখতে হবে যেটা সত্য হলে ২য় ব্রেকেট এর ভিতরের স্টেটমেন্ট কাজ করবে) {\n' +
        '  {\n'+
        '    কন্ডিশন সত্য না হলে এই লাইন কাজ করবে না।\n' +
        '  }'+
        '  else if (এখানে কন্ডিশন লিখতে হবে যেটা সত্য হলে ২য় ব্রেকেট এর ভিতরের স্টেটমেন্ট কাজ করবে) {\n' +
        '    if কন্ডিশন মিথ্যা হলে এই লাইন চেক করবে এই লাইন সত্য হলে এই লাইন কাজ করবে এবং আর পরের লাইনে যাবে না, কিন্তু এই লাইন মিথ্যা হলে পরের লাইনে যাবে\n' +
        '  }\n'+
        '  else if (এখানে কন্ডিশন লিখতে হবে যেটা সত্য হলে ২য় ব্রেকেট এর ভিতরের স্টেটমেন্ট কাজ করবে) {\n' +
        '    উপরের else if কন্ডিশন মিথ্যা হলে এই লাইন চেক করবে এই লাইন সত্য হলে এই লাইন কাজ করবে এবং আর পরের লাইনে যাবে না, কিন্তু এই লাইন মিথ্যা হলে পরের লাইনে যাবে\n' +
        '  }\n'+
        '  else {\n' +
        '    উপরের সব কন্ডিশন মিথ্যা হলে এই লাইন অটো কাজ করবে।\n' +
        '  }\n'
    const codeString6 =  '#include <stdio.h>\n' +

        'int main() {\n \n' +
        '  int english = 51;\n\n'+
        '  if (english >= 60){\n' +
        '    Congratulations!  You 1st division.\n' +
        '  }\n' +
        '  else if (english >= 50){\n' +
        '    You passed with 2nd class\n' +
        '  }\n' +
        '  else if (english >= 40){\n' +
        '    You passed with 3rd class\n' +
        '  }\n' +
        '  else {\n' +
        '    Opps! Sorry, You failed\n' +
        '  }\n\n' +
        '  return 0;\n' +
        '}';
    const codeString7 =  'variable = (condition) ? expressionTrue : expressionFalse;\n'
    const codeString8 =  '#include <stdio.h>\n' +

        'int main() {\n \n' +
        '  int time = 20;\n\n'+
        '  if (time < 18) {\n' +
        '    printf("Good day.");\n' +
        '  }\n' +
        '   else {\n' +
        '    printf("Good evening."); \n' +
        '  }\n\n' +
        '  return 0;\n' +
        '}';
    const codeString9 =  '#include <stdio.h>\n' +

        'int main() {\n \n' +
        '  int time = 20;\n\n'+
        '  (time < 18) ? printf("Good day.") : printf("Good evening.");\n\n'+
        '  return 0;\n' +
        '}';

    return(
        <div  className="">
            <h2 className="H3 md-space-bottom">আজকে আমরা C প্রোগ্রামিংয়ের অন্যতম গুরুত্বপূর্ণ একটি টপিক ইফ ইলস সম্পর্কে জানবো।</h2>
            <p className="Primary-paragraph md-space-bottom">
                সি তে <HighlightText highlightText={"if-else"}/> হল ডিসিশন মেকিং স্টেটমেন্ট। প্রোগ্রামের বিভিন্ন যায়গায় আমাদের লজিকাল ডিসিশন নিতে হতে পারে এবং সেগুলোর উপর ভিত্তি করে আমাদের বিভিন্ন কাজ করা লাগতে পারে। এধরনের অপারেশনের জন্য <HighlightText highlightText={"if-else"}/> ব্যবহার করা হয়। আমরা আমাদের দৈনন্দিন জীবনে অনেক শর্ত দিয়ে থাকি যেমন বিকাল দুইটায় যদি আমার স্কুল ছুটি হয় তাহলে আমি বিকাল তিনটায় মাঠে খেলতে যাব। ঠিক তেমনি সি প্রোগ্রামে যদি অর্থে শর্ত বোঝানোর জন্য <HighlightText highlightText={"if"}/> স্টেটমেন্ট ব্যবহার করা হয়। <HighlightText highlightText={"if"}/> স্টেটমেন্টের শর্ত যদি সত্য হলে, তাহলে ফলাফল স্টেটমেন্টের ভিতরে প্রবেশ করবে, স্টেটমেন্ট কাজ করবে, অন্যাথায়, শর্ত মিথ্যা হলে স্টেটমেন্টের ফলাফল দেখাবে না। if এর প্রথম বন্ধনির ভিতরে শর্তটি লিখতে হবে।আর যদি এই শর্তটি সঠিক হয় ২য় ব্রেকেট এর ভিতরের স্টেটমেন্ট কাজ করবে, যদি এই শর্তটি মিথ্যা হয় তাহলে এর ভিতরের কোন স্টেটমেন্ট কাজ করবেনা। সরাসরি এই স্টেটমেন্ট গুলো স্কিপ করে পরবর্তী স্টেটমেন্টে চলে যাবে।
            </p>
            <h3 className="">if স্টেটমেন্টের স্ট্রাকচার</h3>
            <div className="sm-space-y">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString}
                </SyntaxHighlighter>
            </div>
            <p className="Primary-paragraph md-space-y">
                নিচের উদাহরণটি দেখুনঃ
            </p>
            <div className="">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString2}
                </SyntaxHighlighter>
            </div>
            <p className="Primary-paragraph md-space-y">
                এই প্রোগ্রামে একটি ভেরিয়েবল ধরা হয়েছে, যেটা একটি ইন্টিজার টাইপ ভেরিয়েবল। ভেরিয়েবলটির নাম হল english। এই ভেরিয়েবলের মানও ধরা হয়েছে একটি যেমন  int english = 51; অর্থাৎ এই ভেরিয়েবলের মান হল ৫১।
            </p>
            <p className="Primary-paragraph md-space-bottom">
                <HighlightText highlightText={"if (english <= 40)"}/>
            </p>
            <p className="Primary-paragraph md-space-bottom">
                if কীওয়ার্ড বা ফাংশন দ্বারা প্রোগ্রামে কোন এক্সপ্রেশনের যদি শর্ত ব্যবহার করা হয়েছে। if এর প্রথম ব্রেকেট এর মাঝখানে শর্ত টি দেওয়া আছে। সেটি হলঃ english {">= 40."} অর্থাৎ সেটি দ্বারা বোঝানো হয়েছে english ভেরিয়েবলের মান যদি ৪০ এর চেয়ে বড় হয় বা সমান হয়। এর ভিতরের স্টেটমেন্টগুলো কাজ করবে। অন্যথায় কাজ করবে না। যদি English এর মান ৪০ হয় তাহলে এর ভিতরের স্টেটমেন্ট অনুযায়ী প্রিন্ট করবে, আর যদি ৪০ এর নিচে হয় কিছুই প্রদর্শন করবে না। <HighlightText highlightText={"Congratulations! You passed in english subject."}/>
            </p>
            <div className="">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString2}
                </SyntaxHighlighter>
            </div>
            <h3 className="H3">if else স্টেটমেন্টের স্ট্রাকচার</h3>
            <div className="md-space-y">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString3}
                </SyntaxHighlighter>
            </div>
            <p className="Primary-paragraph md-space-y">
                যদি if condition এর শর্ত সঠিক হয় তাহলে if এর ভিতর যেমনঃ statement 1, statement 2 কাজ করবে। আর যদি ঐ শর্তটি মিথ্যা হয়। তাহলে if এর ভিতরের স্টেটমেন্ট কাজ করবে না। কিন্তু else স্টেটমেন্টের ভিতরে যে সব স্টেটমেন্ট থাকবে সেগুলো কাজ করবে, যেমনঃ statement 3, statement 4; কাজ করবে।
            </p>
            <p className="Primary-paragraph md-space-y">
                নিচের উদাহরণটি দেখুনঃ
            </p>
            <SyntaxHighlighter language="c" style={dracula}>
                {codeString4}
            </SyntaxHighlighter>
            <p className="Primary-paragraph md-space-y">
                যদি শর্ত মিথ্যা হয়, অর্থাৎ যদি english = ৪০ এর নিচে হয় তখন else স্টেটমেন্টে দেওয়া স্টেটমেন্ট গুলো কাজ করবে। যদি ৪০ এর উপরে পায় তখন আউটপুট দেখাবে। <HighlightText highlightText={"Congratulations! You passed in english subject."}/> আর যদি english = ৪০ এর নিচে হয়। তাহলে if স্টেটমেন্টের প্রদত্ত স্টেটমেন্ট গুলো কাজ করবে। তখন রেজাল্ট হবেঃ <HighlightText highlightText={"We are Sorry! You failed in english subject."}/>
            </p>

            <h3 className="H3">else if  স্টেটমেন্টের স্ট্রাকচার</h3>
            <div className="md-space-y">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString5}
                </SyntaxHighlighter>
            </div>
            <p className="Primary-paragraph md-space-y">
                if স্টেটমেন্টের মত else if (){} স্টেটমেন্টেও প্রত্যেকবার ভিন্ন শর্ত ব্যবহার করা হয়। এবং যদি কোন শর্ত মিথ্যা পেলে এর পরের else if স্টেটমেন্ট চেক করতে থাকে। যে শর্তটি সঠিক হবে সেই স্টেটমেন্টের ভিতরের স্টেটমেন্ট গুলো কাজ করনে। আর বাকী স্টেটমেন্ট কাজ করে না।
            </p>
            <p className="Primary-paragraph md-space-y">
                নিচের উদাহরণটি দেখুনঃ
            </p>
            <SyntaxHighlighter language="c" style={dracula}>
                {codeString6}
            </SyntaxHighlighter>
            <p className="Primary-paragraph md-space-y">
                if স্টেটমেন্ট থেকে শুরু করে শর্ত চেক করা শুরু করবে, যদি শর্ত সঠিক পায় সেই স্টেটমেন্টের ভিতরের স্টেটমেন্ট কাজ করবে। আর যদি শর্ত মিথ্যা হয় পরের কন্ডিশন যুক্ত স্টেটমেন্টে চলে আসবে। উপরের উদাহারণে, যে english = 51 নিয়ে শর্ত যাচাই করা শুরু করবে। ১ম কন্ডিশনাল স্টেটমেন্ট হল english {">=60"}অর্থাৎ যদি english এর মান ৬০ এর বড় হয়, যেহিতু শর্ত ভুল কারণ  english =৫১ তাই পরের কন্ডিশনাল স্টেটমেন্টে চলে যাবে। সেটি হল  english {">=50"}। যেহেতু আমাদের ভেরিয়েবলে ৫০ আছে। তাহলে শর্ত সত্য তাই, এই কন্ডিশনের ভিতরের স্টেটমেন্ট গুলো কাজ করবে, আর বাকী স্টেটমেন্টগুলো কাজ করবে না। সুতার এর ভিতরে printf()  স্টেটমেন্টটি কাজ করবে। যেটও কিছু প্রদর্শন করবে, তা হল you passed with 2nd class.
            </p>
            <h3 className="H3 md-space-y">সর্টহ্যান্ড if else যেটাকে টারনারি অপারেটর (Ternary Operator) বলে।</h3>
            <p className="Primary-paragraph md-space-y">
                ছোটখাটো কন্ডিশনের জন্য আমাদের if else ব্যবহার করার দরকার নেই আমরা চাইলে সর্টহ্যান্ড if else মানে টারনারি অপারেটর (Ternary Operator) ব্যবহার করেই সেটা সমাধান করতে পারি। চলুন উদাহরণের মাধ্যমে দেখিঃ
            </p>
            <h3 className="H4 md-space-y">Ternary Operator এর স্ট্রাকচার</h3>
            <SyntaxHighlighter language="c" style={dracula}>
                {codeString7}
            </SyntaxHighlighter>
            <p className="Primary-paragraph md-space-y">
                নিচের উদাহরণটিতে দেখানো হচ্ছে 20 কি 18 এর চেয়ে ছোট কিনা? যেহেতু ছোট না তাই else ব্লক রান হচ্ছে। if এর ভিতরের কন্ডিশনটা false যদি true তবে if ব্লকটা রান হত।
            </p>
            <SyntaxHighlighter language="c" style={dracula}>
                {codeString8}
            </SyntaxHighlighter>
            <p className="Primary-paragraph md-space-y">
                আমরা চাইলে এটাকে আরও ছোট করে লিখতে পারি, আউটপুট একই পাব যেমনঃ
            </p>
            <SyntaxHighlighter language="c" style={dracula}>
                {codeString9}
            </SyntaxHighlighter>

            <div className="navigate-buttons-style">
                <ButtonSecondary btnLink={"/c_boolean"} btnText={"❮ পূর্ববর্তী অধ্যায়"}/>
                <ButtonSecondary btnLink={"/c_switch"} btnText={"পরবর্তী অধ্যায় ❯"}/>
            </div>
        </div>
    )
}

export  default CIfElse