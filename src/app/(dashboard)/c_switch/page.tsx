import {ButtonSecondary} from "@/libs/buttons/button";
import SyntaxHighlighter from "react-syntax-highlighter";
import {dracula} from "react-syntax-highlighter/dist/esm/styles/hljs";
import {HighlightText} from "@/libs/HighlightText/HighlightText";


const CSwitch = () => {

    const codeString = 'switch (expression)' +
        '  case value1:\n'+
        '    //expression এর ভ্যালু value1 এর সমান হলে এই কোড এক্সিকিউট হবে;\n' +
        '   break;'+
        '  case value2:\n'+
        '    //expression এর ভ্যালু value2 এর সমান হলে এই কোড এক্সিকিউট হবে;\n' +
        '   break;'+
        '  default:\n' +
        '     //expression এর ভ্যালু কোনো value এর সমান না হলে  এই কোড এক্সিকিউট হবে;\n'
    const codeString2 =  '#include <stdio.h>\n' +

        'int main() {\n \n' +
        '  int day = 4;\n\n'+
        '  switch (day) {\n' +
        '    case 1:\n' +
        '     printf("Saturday");\n' +
        '      break;\n' +
        '    case 2:\n' +
        '     printf("Sunday");\n' +
        '      break;\n' +
        '    case 3:\n' +
        '     printf("Monday");\n' +
        '      break;\n' +
        '    case 4:\n' +
        '     printf("Tuesday");\n' +
        '      break;\n' +
        '    case 5:\n' +
        '     printf("Wednesday");\n' +
        '      break;\n' +
        '    case 6:\n' +
        '     printf("Thursday");\n' +
        '      break;\n' +
        '    case 7:\n' +
        '     printf("Friday");\n'+
        '      break;\n\n' +
        '     //এখানে আউটপুট হবে Tuesday কারণ 4 নাম্বার এর case সাথে মিলে গেছে।\n\n'+
        '  return 0;\n' +
        '}';
    const codeString3 =  '#include <stdio.h>\n' +

        'int main() {\n \n' +
        '  int day = 4;\n\n'+
        '  switch (day) {\n' +
        '    case 1:\n' +
        '     printf("Today is Saturday");\n' +
        '      break;\n' +
        '    case 2:\n' +
        '     printf("Today is Sunday");\n' +
        '      break;\n' +
        '    default: \n'+
        '       printf("Not Matches");\n'+
        '   }\n'+
        '     //এখানে আউটপুট হবে Not Matches কারণ কোন কন্ডিশনই মিলে নাই।\n\n'+
        '  return 0;\n' +
        '}';

    return(
        <div  className="">
            <h2 className="H3 md-space-bottom"> আজকে আমরা C প্রোগ্রামিংয়ের অন্যতম গুরুত্বপূর্ণ একটি টপিক সুইচ স্টেটমেন্ট সম্পর্কে জানবো।</h2>
            <p className="Primary-paragraph md-space-bottom">
                Switch Statement: সুইচ স্টেটমেন্ট এলস-ইফ এর একান্তর হিসাবে কাজ করে। এখানে, ভিন্ন ভিন্ন ভেল্যু দিয়ে অনেক গুলি কাজ করানো যায়। আবার, কোন ভেল্যুই সঠিক না হলে ডিফল্ট ভেল্যু সেট করা যায়। এটি প্রোগ্রামার দের খুব পছন্দের স্টেটমেন্ট। এখানে, switch, case, break, default এই চারটাই কিন্তু কিওয়ার্ড।
            </p>
            <h3 className="H4 md-space-y">C সুইস সিনট্যাক্স</h3>
            <div className="sm-space-y">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString}
                </SyntaxHighlighter>
            </div>
            <h3 className="H4 md-space-y">switch...case স্টেটমেন্ট কিভাবে কাজ করে?</h3>
            <ul className="">
                <li className="Primary-paragraph">উপরের সিনট্যাক্সে expression প্রোগ্রামে শুধুমাত্র একবার এক্সিকিউশন(execution) হয়।</li>
                <li className="Primary-paragraph">এক্সপ্রেশনের ভ্যালু সুইস ব্লকের যেই case value এর সাথে মিলে যায় প্রোগ্রাম কন্ট্রোল তার কাছে চলে আসে ফলে সেই case value এর কোড ব্লকটি সম্পাদিত(execution) হয়।</li>
                <li className="Primary-paragraph">উপরের সিউডোকোড(pseudocode) এ expression এর ভ্যালু যদি value2 এর সমান হয় তাহলে কম্পাইলার case value2 এর কোড ব্লককে এক্সিকিউট করবে।</li>
                <li className="Primary-paragraph">case value2 এর পরে কোনো break স্টেটমেন্ট না থাকলে সুইস ব্লকের শেষ পর্যন্ত এক্সিকিউশন হবে।</li>
                <li className="Primary-paragraph">এক্সপ্রেশনের ভ্যালু সুইস ব্লকের কোনো case value এর সাথে না মিললে default এর কোড ব্লকটি সম্পাদিত হবে।</li>
                <li className="Primary-paragraph">পরবর্তী case কে এক্সিকিউট থেকে বাধা দিতে break স্টেটমেন্ট ব্যবহার করা হয়।</li>
            </ul>
            <p className="Primary-paragraph md-space-y">
                নিচের উদাহরণটি দেখুনঃ
            </p>
            <div className="">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString2}
                </SyntaxHighlighter>
            </div>
            <p className="Primary-paragraph md-space-y">
                নিচের উদাহরণটি দেখুনঃ
            </p>
            <div className="">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString3}
                </SyntaxHighlighter>
            </div>

            <div className="navigate-buttons-style">
                <ButtonSecondary btnLink={"/c_if_else"} btnText={"❮ পূর্ববর্তী অধ্যায়"}/>
                <ButtonSecondary btnLink={"/c_while_loop"} btnText={"পরবর্তী অধ্যায় ❯"}/>
            </div>
        </div>
    )
}

export  default CSwitch