import {ButtonSecondary} from "@/libs/buttons/button";
import {dracula} from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";
import {BoldText} from "@/libs/HighlightText/HighlightText";


const CWhileLoop = () => {
    const codeString = '#include <stdio.h>\n\n' +
    'int main()'+
        '{\n'+

        '  int num=0; \n'+

    '  while(num<10) {\n'+
    '     printf("Sunday");\n' +
    '     num=num+1;\n' +
    '     //এখানে আউটপুট হবে 0 1 2 3 4 5 6 7 8 9 \n'+
    '  }\n'+
    '  return 0;\n' +
    '}';
    const codeString2 =  '#include <stdio.h>\n' +
                'int main() {\n' +
            '   int num=1;\n' +
            '   do {\n' +
            '     printf("\\t%d",num);\n' +
            '     num++;\n' +
            '     //এখানে আউটপুট হবে 1 2 3 4 5 \n'+
            '   }\n' +
            '   while(num<=5);\n' +
            '   return 0;\n' +
            '}'
    const codeString3 =  '#include <stdio.h>\n' +
                'int main() {\n' +
            '  \n' +
            '   int num=1;\n' +
            '   while (num<=100){\n' +
            '      printf("%d\\n",num);\n' +
            '      num++;\n' +
            '      if(num>10){\n' +
            '      break;\n' +
            '      }\n' +
            '    }\n' +
            '    while(num<5);\n' +
            '   return 0;\n' +
            '}'

    return(
        <div  className="">
            <h2 className="H3 md-space-bottom"> আজকে আমরা C প্রোগ্রামিংয়ের অন্যতম গুরুত্বপূর্ণ একটি টপিক হুয়াইল লুপ এবং ডু হুয়াইল লুপ সম্পর্কে জানবো।</h2>
            <p className="Primary-paragraph md-space-bottom">
                লুপ (Loop): কোন স্টেটমেন্ট বারবার এক্সিকিউট এর জন্য লুপ (Loop) কন্ট্রোল স্টেটমেন্ট ব্যবহার করা হয়। সি ল্যাঙ্গুয়েজে বেশ করেক ধরণের লুপ রয়েছে। যথাঃ while লুপ for লুপ do……..while লুপ ইত্যাদি। আজকে আমরা while লুপ ও do……..while লুপ নিয়ে আলোচনা করব এবং পরবর্তী অধ্যায়ে for লুপ নিয়ে আলোচনা করব।
            </p>
            <h3 className="H4 md-space-y">C হুয়াইল লুপ (While Loop)</h3>
            <p className="Primary-paragraph md-space-bottom">
                While লুপঃ সি প্রোগ্রামে while লুপের ব্যবহার অনেক। while লুপে, প্রথমে condition চেক করে এবং যদি condition সত্য হয় তাহলে লুপ বডি এক্সিকিউট হবে। লুপ বডি ততক্ষন পর্যন্ত এক্সিকিউট হবে যতক্ষণ না লুপ condition মিথ্যা হয় এবং যখন condition মিথ্যা হয় তখন কম্পাইলার লুপ বডি থেকে বের হয়ে আসবে। while লুপে, প্রথমে একটি Counter Variable Declare এবং Initialize করতে হয়। তারপর while লুপের একটি condition থাকে যদি condition সত্য হয় তাহলে লুপ বডি এক্সিকিউট হবে এবং counter variable এর মান increment/decrement হবে। counter variable এর মান increment/decrement এর পর কম্পাইলার আবার while লুপের কন্ডিশন চেক করবে যদি condition সত্য হয় তাহলে আবার লুপ বডি এক্সিকিউট হবে এবং counter variable এর মান increment/decrement হবে। এভাবে লুপ condition মিথ্যা না হওয়া পর্যন্ত চলতেই থাকবে। এখন আমরা while লুপের flowchart দেখব।
            </p>
            <div className="sm-space-y">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString}
                </SyntaxHighlighter>
            </div>
            <h3 className="H4 md-space-y">চলুন প্রতিটা লাইন ভেঙ্গে আলোচনা করা যাকঃ</h3>
            <p className="Primary-paragraph md-space-bottom">
                এখানে, ৪ নাম্বার লাইনে Integer ডেটাটাইপে num নামক একটি ভেরিয়েবল declare করা হয়েছে এবং ৫ নাম্বার লাইনে num ভেরিয়েবলকে 0 দ্বারা initialize করা হয়েছে।<br />
                এর পর ৬ নাম্বার লাইনে লুপ শুরু হয়েছে। এই লুপটি কিভাবে কাজ করবে তা আমরা কয়েকটি ধাপে এ দেখবঃ <br />

                ১ম ধাপঃ <br />
                ৬ নম্বর লাইনে num ভেরিয়েবলের মান 0 সুতরাং <BoldText boldText={"(num<10)"} /> কন্ডিশনের মান সত্য তাই ৭-১০ লাইনগুলো এক্সিকিউট হবে। <br />
                ৭ নম্বর লাইন থেকে লুপের ব্লক শুরু <br />
                ৮ নম্বর লাইনের জন্য আউটপুট 0 দেখতে পাব। <br />
                ৯ নম্বর লাইনে num ভেরিয়েবলের মান increment হবে অর্থাৎ num ভেরিয়েবলের মান শূণ্য থেকে 1 বেড়ে num=1 হবে। <br />
                ১০ নম্বর লাইনে while লুপের ব্লক শেষ সুতরাং প্রোগ্রাম ৬ নম্বর লাইনে ফিরে যাবে। <br />
                ২য় ধাপঃ <br />

                ৬ নম্বর লাইনে এখন num ভেরিয়েবলের মান 1 সুতরাং <BoldText boldText={"(num<10)"} />  কন্ডিশনের মান সত্য। সুতরাং ৭-১০ লাইনগুলো এক্সিকিউট হবে। <br />
                ৮ নম্বর লাইনের জন্য আমরা 1 আউটপুট দেখতে পাব। <br />
                ৯ নম্বর লাইনে num এর মান 1 থেকে 1 বেড়ে num=2 হবে। <br />
                ১০ নম্বর লাইনে while লুপের ব্লক শেষ সুতরাং প্রোগ্রাম ৬ নম্বর লাইনে ফিরে যাবে। <br />

                ৩য় ধাপঃ

                ৬ নম্বর লাইনে num ভেরিয়েবলের মান 2 সুতরাং <BoldText boldText={"(num<10)"} /> কন্ডিশনের মান সত্য। সুতরাং ৭-১০ লাইনগুলো এক্সিকিউট হবে।
                ৮ নম্বর লাইনের জন্য আমরা 2 আউটপুট দেখতে পাব।<br />
                ৯ নম্বর লাইনে num এর মান 2 থেকে 1 বেড়ে num=3 হবে।<br />
                ১০ নম্বর লাইনে কম্পিউটার এসে দেখবে while লুপের ব্লক শেষ সুতরাং প্রোগ্রাম আবার ৬ নম্বর লাইনে ফিরে যাবে।<br />
                ………………………………. ১১তম ধাপঃ<br />

                ৬ নম্বর লাইনে num ভেরিয়েবলের মান ১০ সুতরাং <BoldText boldText={"(num<10)"} /> কন্ডিশনের মান মিথ্যা। সুতরাং ৭-১০ লাইনগুলো এবার আর এক্সিকিউট হবে না।<br />
                কম্পাইলার লুপ শেষ করে ১১ নম্বর লাইনে চলে যাবে পরবর্তী কাজগুলো করার জন্য (যদি থাকে)।
            </p>
            <h3 className="H4 md-space-y">C ডু হুয়াইল লুপ (do While Loop)</h3>
            <p className="Primary-paragraph md-space-y">
                প্রথমে do এর loop body এক্সিকিউট হবে তারপর প্রোগ্রাম condition চেক করবে। Condition যদি সত্য হয় তাহলে do এর loop body আবার এক্সিকিউট হবে এবং Condition মিথ্যে না হওয়া পর্যন্ত লুপ চলতে থাকবে। নিচে do….while লুপ এর flowchart দেখঃ

                নিচের প্রোগ্রামটিতে printf() ফাংশানটি প্রথমে একবার এক্সিকিউট হবে তার পর Condition চেক করবে। এই প্রোগ্রামে do…while লুপ ব্যবহার করে ১ থেকে ৫ পর্যন্ত প্রিন্ট করবে।
            </p>
            <div className="">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString2}
                </SyntaxHighlighter>
            </div>
            <p className="Primary-paragraph md-space-y">
                মনে রাখবে যে, লুপ condition লুপ বডির শেষে লেখা হয়। লুপ বডি শুরু হওয়ার আগে num ভেরিয়েবলকে 1 দ্বারা initialize করা হয়েছে। প্রথমে কোন condition চেক করা ছাড়াই loop body এক্সিকিউট হবে তারপর num ভেরিয়েবলের মান increment হবে। শেষ ধাপে, condition চেক করবে। এখন, যদি condition মিথ্যা হয় তাহলে কম্পাইলার do statement এ যাবে না, আর যদি condition সত্য হয় তাহলে কম্পাইলার পুনরায় do statement এ যাবে এবং আবার loop body এক্সিকিউট হবে। <br/> <br/>

                লুপে break এবং continue স্টেটমেন্ট এর ব্যবহারঃ সি ল্যাঙ্গুয়েজে break এবং continue নামে দুইটি built in স্টেটমেন্ট আছে, যেগুলো প্রোগ্রামের সাধারণ ধারাকে পরিবর্তন করতে সক্ষম। লুপ যেখানে একটি condition মিথ্যা না হওয়া পর্যন্ত কাজ চালিয়ে যায়, break এবং continue স্টেটমেন্ট সেখানে কিছু স্টেটমেন্ট skip করে প্রোগ্রাম পরবর্তি ধাপে নিয়ে যেতে সক্ষম। নিচের উদাহরণটি দেখুনঃ
            </p>
            <div className="">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString3}

                </SyntaxHighlighter>
            </div>
            <p className="Primary-paragraph md-space-y">
                এই প্রোগ্রামটিতে 1 থেকে 10 পর্যন্ত প্রিন্ট করবে। যদিও while লুপের condition হচ্ছে (n 10 হয়, তবে break; কর মানে লুপ থেকে বের হয়ে যাও বা লুপটি ভেঙে দাও। break সব সময় যেই লুপের ভেতর থাকে সেটির বাইরে প্রোগ্রামটিকে নিয়ে আসে। সুতরাং n-এর মান 10 প্রিন্ট হওয়ার পরে এর মান এক বাড়বে (n++;) অর্থাৎ n-এর মান হবে 11 । আর তখন <BoldText boldText={"n > 10"} />  সত্য হবে, ফলে প্রোগ্রামটি if কন্ডিশনের ভেতরে ঢুকে যাবে। সেখানে গিয়ে সে দেখবে তাকে break করতে বলা হয়েছে তাই সে লুপের বাইরে চলে যাবে।
            </p>
            <div className="navigate-buttons-style">
                <ButtonSecondary btnLink={"/c_switch"} btnText={"❮ পূর্ববর্তী অধ্যায়"}/>
                <ButtonSecondary btnLink={"/c_for_loop"} btnText={"পরবর্তী অধ্যায় ❯"}/>
            </div>
        </div>
    )
}

export  default CWhileLoop