import SyntaxHighlighter from "react-syntax-highlighter";
import {dracula} from "react-syntax-highlighter/dist/esm/styles/hljs";
import {BoldText} from "@/libs/HighlightText/HighlightText";
import {ButtonSecondary} from "@/libs/buttons/button";


const CForLoop = () => {
    const codeString = '#include <stdio.h>\n' +
        'int main() {\n' +
        '  int num=0;\n' +
        '  for (num=1; num<=10;num++) {\n' +
        '    \n' +
        '        printf("\\t%d",num);\n' +
        '     //এখানে আউটপুট হবে 1 2 3 4 5 6 7 8 9 10 \n'+
        '\n' +
        '    }\n' +
        '  return 0\n' +
        '}'
    const codeString2 =  '#include <stdio.h>\n' +
        'int main() {\n' +
        '   int num,i,sum=0;\n' +
        '   printf("Enter last no. up to which you want to add no:");\n' +
        '   scanf("%d",&num);\n' +
        '\n' +
        '   for(i=1;i<=num;i++) {\n' +
        '     sum=sum+i;\n' +
        '   }\n' +
        '   printf("Sum of first %d number is %d",num,sum);\n' +
        '     //এখানে ইউজার যে নাম্বার ইনপুট দিবে ওই নাম্বার পর্যন্ত সংখ্যা গুলোর যোগফল আউটপুট দিবে। \n'+
        '   return 0;\n' +
        '}'
    const codeString3 =  'for ( initialization; condition; increment ) {\n' +
        '\n' +
        '   for ( initialization; condition; increment ) {\n' +
        '      \n' +
        '      // inside loop statement\n' +
        '   }\n' +
        '\n' +
        '   // outer loop statement\n' +
        '}'
    const codeString4 =  'while(condition) {\n' +
        '\n' +
        '   while(condition) {\n' +
        '\n' +
        '      // inside loop statement\n' +
        '   }\n' +
        '\n' +
        '   // outer loop statement\n' +
        '}'
    const codeString5 =  'do{\n' +
        '   do{\n' +
        '\n' +
        '      // inside loop statement\n' +
        '   }while(condition);\n' +
        '\n' +
        '   // outer loop statement\n' +
        '}while(condition);'
    const codeString6 =  '#include <stdio.h>\n' +
        'int main()\n' +
        '{\n' +
        '    int i, j;\n' +
        '    /* Outer loop */\n' +
        '    for(i=1; i<=5; i++)\n' +
        '    {\n' +
        '        /* Inner loop */\n' +
        '        for(j=1; j<=5; j++)\n' +
        '        {\n' +
        '            printf("%d\\t", (i*j));\n' +
        '        }\n' +
        ' \n' +
        '        /* Print a new line */\n' +
        '        printf("\\n");\n' +
        '    }\n' +
        ' \n' +
        '    return 0;\n' +
        '}'
    const codeString7 =  '#include <stdio.h>\n' +
        '#include <stdlib.h>\n' +
        '#define ROW 3\n' +
        '#define COL 3\n' +
        '// Driver program\n' +
        ' \n' +
        'int main()\n' +
        '{\n' +
        ' \n' +
        '    int i, j;\n' +
        ' \n' +
        '    // Declare the matrix\n' +
        '    int matrix[ROW][COL] = { { 1, 2, 3 },\n' +
        '                { 4, 5, 6 },\n' +
        '                { 7, 8, 9 } };\n' +
        '    printf("Given matrix is \\n");\n' +
        ' \n' +
        '    // Print the matrix using nested loops\n' +
        '    for (i = 0; i < ROW; i++) {\n' +
        ' \n' +
        '        for (j = 0; j < COL; j++)\n' +
        '            printf("%d ", matrix[i][j]);\n' +
        ' \n' +
        '        printf("\\n");\n' +
        '    }\n' +
        ' \n' +
        '    return 0;\n' +
        '}'
    const codeString8 =  '#include <stdio.h>\n' +
        'int main()\n' +
        '{\n' +
        ' \n' +
        '    int i=1;\n' +
        '    do{          // outer loop\n' +
        '        int j=1;\n' +
        '        do       // inner loop\n' +
        '    {\n' +
        '        printf("*");\n' +
        '        j++;\n' +
        '   }while(j<=8);\n' +
        '        printf("\\n");\n' +
        '        i++;\n' +
        '    }while(i<=4);\n' +
        '}'


    return(
        <div  className="">
            <h2 className="H3 md-space-bottom"> আজকে আমরা C প্রোগ্রামিংয়ের অন্যতম গুরুত্বপূর্ণ একটি টপিক ফর লুপ সম্পর্কে জানবো।</h2>
            <p className="Primary-paragraph md-space-bottom">
                লুপ (Loop): কোন স্টেটমেন্ট বারবার এক্সিকিউট এর জন্য লুপ (Loop) কন্ট্রোল স্টেটমেন্ট ব্যবহার করা হয়। সি ল্যাঙ্গুয়েজে বেশ করেক ধরণের লুপ রয়েছে। যথাঃ while লুপ for লুপ do……..while লুপ ইত্যাদি। পূর্ববর্তী অধ্যায়ে আমরা while লুপ ও do……..while লুপ নিয়ে আলোচনা করেছি। এই অধ্যায়ে আমরা for লুপ নিয়ে আলোচনা করব।
            </p>
            <h3 className="H4 md-space-y">C ফর লুপ (for Loop)</h3>
            <p className="Primary-paragraph md-space-bottom">
                for লুপঃ লুপে সবচেয়ে বেশি ব্যবহৃত হয় for লুপ। for লুপের প্রধান সুবিদা হল যে, লুপের তিনটি phases (initialization, condition, increment/decrement) for লুপে একটি সিঙ্গেল step এ পর্যায়ক্রমে রয়েছে। তাই for লুপের syntax অন্যান্য লুপ থেকে সহজ। লুপ বডির বাহিরে কোথাও counter variable অ্যাসাইন করতে হয় না। <br/>
                এখানে for এর পরে প্রথম ব্র্যাকেটের মধ্যে তিনটি অংশ (initialization phase; condition phase; increment phase) আছে। তিনটি অংশ দুইটি সেমিকোলনের মাধ্যমে আলাদা করা আছে। যখনই for লুপ লেখা হবে, তখনই দুইটি সেমিকোলনের মাধ্যমে আলাদা করা তিনটি অংশ থাকতেই হবে। এগুলোতে কিছু লেখা না থাকলেও সেমিকোলন দুইটি থাকতেই হবে। while লুপ এবং for লুপ একই রেজাল্ট এক্সিকিউট করে। <br/>
                নিচের উদাহরণটি দেখুনঃ
            </p>

            <div className="sm-space-y">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString}
                </SyntaxHighlighter>
            </div>
            <h3 className="H4 md-space-y">চলুন প্রতিটা লাইন ভেঙ্গে আলোচনা করা যাকঃ</h3>
            <p className="Primary-paragraph md-space-bottom">
                এখানে ৪ নাম্বার লাইনে num একটি ভেরিয়েবল ডিক্লেয়ার করা হয়েছে। কম্পাইলার প্রথমে for লুপের initialization অংশে যাবে। সেখানে যে স্টেটমেন্ট থাকবে সেটি সম্পন্ন হবে। এখানে আছে num = 1 । অর্থাৎ num এর মান 1 । এই কাজটি একবারই হবে। একবার হয়ে যাওয়ার পর যতবার লুপ চলবে এটি আর হবে না। অর্থাৎ প্রথম সেমিকোলনের আগের অংশে যা থাকবে সেটি পুরো লুপ চলার শুরুতে সম্পন্ন হবে এবং আর কখনই হবে না। এরপরের যে অংশটি আছে সেটি হল loop condition । Initialization সম্পন্ন হওয়ার পর কম্পাইলার condition চেক করবে যদি কন্ডিশন সত্য হয় তাহলে সরাসরি loop body তে চলে যাবে এবং লুপ বডিতে যা থাকবে তা এক্সিকিউট হবে। এখানে আছে num <BoldText boldText={"<= 10"}/>। যেহেতু প্রথমেই num এর মান 1 Initialize করা হয়েছে অতএব এখন condition সত্য। তাহলে লুপের ভিতরে প্রবেশ করবে এবং ৬-৮ নাম্বার লাইন এক্সিকিউট হবে। ৭ নাম্বার লাইনে জন্য আমরা আউটপুট 1 দেখতে পাব। এরপর কম্পাইলার increment/decrement অংশে আসবে। এখানে যে স্টেটমেন্ট লেখা থাকবে সেটি সম্পন্ন হবে। এখানে আছে num++ । num++ মানে হল num=num+1 অর্থাৎ num এর মান এক বাড়বে। এরপর প্রোগ্রাম আবার condition চেক করে দেখবে। condition সত্য হলে আবার লুপের ভিতর প্রবেশ করবে। ৭ নাম্বার লাইনে জন্য আমরা আরো একবার আউটপুট 2 দেখতে পাব। আবার increment/decrement অংশে যাবে। num এর মান এক বাড়বে। এরপর condition চেক করবে। ৭ নাম্বার লাইনে জন্য আমরা আবার একটি আউটপুট 3 দেখতে পাব। এভাবে 10 পর্যন্ত আউটপুট পাবো। num এর মান increment হতে হতে যখন num এর মান 11 হবে তখন কন্ডিশন মিথ্যা হয়ে যাবে এবং লুপ বডিতে আর যাবে না।
            </p>
            <p className="Primary-paragraph md-space-bottom">
                নিচের উদাহরণটি দেখুনঃ, এখানে ইউজার থেকে একটি নাম্বার ইনপুট নিবে এবং ইনপুট নাম্বার পর্যন্ত নাম্বারগুলোকে যোগ করবে এবং যোগফল প্রিন্ট করবে।
            </p>
            <div className="">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString2}
                </SyntaxHighlighter>
            </div>
            <h3 className="H4 md-space-y">কখন কোন লুপ ব্যবহার করব?</h3>
            <p className="Primary-paragraph md-space-bottom">
              ফর লুপ এবং হুয়াইল লুপ একই ধরণের কাজ করে, যখন আপনি জানবেন আপনি কতবার লুপ চালাবেন তখন আপনি হুয়াইল লুপের পরিবর্তে ফর লুপ চালাবেন আর যদি আপনার কন্ডিশন চেক করার আগেই একবার লুপ চালানোর প্রয়োজন পড়ে তবে আপনি ডু হুয়াইল লুপ চালাবেন।
            </p>
            <h3 className="H4 md-space-y">C তে নেস্টেড লুপ কি?</h3>
            <p className="Primary-paragraph md-space-bottom">
                নিস্টেড লুপ বলতে একটি লুপের ভিতরে আর একটি বা অনেকগুলি loops ব্যবহার করা কে বোঝায়। নিস্টেড লুপটিকে ” লুপের ভিতর লুপ ” বলা যায়। ফর, হুইল এবং ডু হুইল এই তিনটি লুপকে Nested হিসাবে ব্যবহার করতে পারব। <br/> <br/> সিনটেক্স নেস্টেড ফর লুপ
            </p>
            <SyntaxHighlighter language="c" style={dracula}>
                {codeString3}
            </SyntaxHighlighter>
            <p className="Primary-paragraph md-space-bottom">
                সিনটেক্স নেস্টেড হুইল লুপ
            </p>
            <SyntaxHighlighter language="c" style={dracula}>
                {codeString4}
            </SyntaxHighlighter>
            <p className="Primary-paragraph md-space-bottom">
                সিনটেক্স নেস্টেড ডু হুইল লুপ
            </p>
            <SyntaxHighlighter language="c" style={dracula}>
                {codeString5}
            </SyntaxHighlighter>
            <h3 className="H4 md-space-y">নেস্টেড লুপের কিছু রিয়েল লাইফ উদাহরণঃ</h3>
            <p className="Primary-paragraph md-space-bottom">
                উদাহরণ -১ঃ নিচের কোডে ৪ টি লাইনে ২০ পযর্ন্ত প্রিন্ট করা হয়েছে
            </p>
            <SyntaxHighlighter language="c" style={dracula}>
                {codeString6}
            </SyntaxHighlighter>
            <p className="Primary-paragraph md-space-bottom">
                Output:<br/>
                1       2       3       4<br/>
                2       4       6       8<br/>
                3       6       9       12<br/>
                4       8       12      16<br/>
                5       10      15      20<br/>
            </p>
            <p className="Primary-paragraph md-space-bottom">
                উদাহরণ -২ঃ নিচের কোডে ২ডি মেটিক্স এর মান দিয়ে অ্যারে ডিফাইন করে প্রিন্ট করা হয়েছে।
            </p>
            <SyntaxHighlighter language="c" style={dracula}>
                {codeString7}
            </SyntaxHighlighter>
            <p className="Primary-paragraph md-space-bottom">
                Output:<br/>
                1 2 3<br/>
                4 5 6<br/>
                7 8 9<br/>
            </p>
            <p className="Primary-paragraph md-space-bottom">
                উদাহরণ -৩ঃ নিচের পেটার্নটি প্রিন্ট তে নেস্টেড ডু হুইাইল ব্যবহার করা হয়েছে।
            </p>
            <p className="Primary-paragraph md-space-bottom">
                Output:<br/>
                * * * * * * * *<br/>
                * * * * * * * *<br/>
                * * * * * * * *<br/>
                * * * * * * * *<br/>
            </p>
            <SyntaxHighlighter language="c" style={dracula}>
                {codeString8}
            </SyntaxHighlighter>
            <div className="navigate-buttons-style">
                <ButtonSecondary btnLink={"/c_while_loop"} btnText={"❮ পূর্ববর্তী অধ্যায়"}/>
                <ButtonSecondary btnLink={"/c_break_continue"} btnText={"পরবর্তী অধ্যায় ❯"}/>
            </div>
        </div>
    )
}

export  default CForLoop