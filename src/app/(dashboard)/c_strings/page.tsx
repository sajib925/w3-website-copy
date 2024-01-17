import {HighlightText} from "@/libs/HighlightText/HighlightText";
import SyntaxHighlighter from "react-syntax-highlighter";
import {dracula} from "react-syntax-highlighter/dist/esm/styles/hljs";
import {ButtonSecondary} from "@/libs/buttons/button";
import DynamicTable from "@/libs/table/Table";


const CStrings = () => {
    const codeString = 'char greetings[] = "Hello World!";'
    const codeString2 = 'char greetings[] = "Hello World!";\n' +
        'printf("%s", greetings);'
    const codeString3 = 'char greetings[] = "Hello World!";\n' +
        'printf("%c", greetings[0]); \n'+
        '// এখানে আউটপুট হবে H'
    const codeString4 = 'char greetings[] = "Hello World!";\n' +
        'greetings[0] = \'J\';\n' +
        'printf("%s", greetings);\n' +
        '//এখানে Hello World! এর পরিবর্তে আউটপুট হবে Jello World!'
    const codeString5 = 'char carName[] = "Volvo";\n' +
        '\n' +
        'for (int i; i = 0; i < 5; i++) {\n' +
        '  printf("%c\\n", carName[i]);\n' +
        '}'
    const codeString6 = 'char greetings[] = {\'H\', \'e\', \'l\', \'l\', \'o\', \' \', \'W\', \'o\', \'r\', \'l\', \'d\', \'!\', \'\\0\'};\n' +
        'char greetings2[] = "Hello World!";\n'+
        'printf("%s", greetings);\n'+
        'greetings এবং greetings2 এর আউটপুট সেইমই পাব।'
    const codeString7 = 'char message[] = "Good to see you,";\n' +
        'char fname[] = "John";\n' +
        '\n' +
        'printf("%s %s!", message, fname);\n' +
        '//এখানে আউটপুট হবে Good to see you,John!\n'
    const codeString8 = '#include <string.h>\n' +
        '\n' +
        'int main() {\n' +
        '    char str[] = "Hello, World!";\n' +
        '    int length = strlen(str);\n' +
        '    printf("স্ট্রিংটির দৈর্ঘ্য: %d\\n", length);\n' +
        '    return 0;\n' +
        '}'
    const codeString9 = '#include <string.h>\n' +
        '\n' +
        'int main() {\n' +
        '    char source[] = "Hello";\n' +
        '    char destination[20];\n' +
        '    strcpy(destination, source);\n' +
        '    printf("কপিকৃত স্ট্রিং: %s\\n", destination);\n' +
        '    return 0;\n' +
        '}'
    const codeString10 = '#include <string.h>\n' +
        '\n' +
        'int main() {\n' +
        '    char str1[] = "Hello, ";\n' +
        '    char str2[] = "World!";\n' +
        '    strcat(str1, str2);\n' +
        '    printf("যোগকৃত স্ট্রিং: %s\\n", str1);\n' +
        '    return 0;\n' +
        '}'
    const codeString11 = '#include <string.h>\n' +
        '\n' +
        'int main() {\n' +
        '    char str1[] = "Hello";\n' +
        '    char str2[] = "Hello";\n' +
        '    if (strcmp(str1, str2) == 0) {\n' +
        '        printf("স্ট্রিংগুলি একই\\n");\n' +
        '    } else {\n' +
        '        printf("স্ট্রিংগুলি একই নয়\\n");\n' +
        '    }\n' +
        '    return 0;\n' +
        '}\n'
    {}
    const codeString12 = 'char txt[] = "We are the so-called "Vikings" from the north.";\n'+
        '// উপরের টায় এরর শো করবে কারণ সেখানে বেকশ্লেশ এস্কেপ স্পেশাল ক্যারেকটার ব্যবহার করা হয়নি  \n' +
        'char txt[] = "We are the so-called \\"Vikings\\" from the north.";'
    {}
    const codeString13 = 'char txt[] = "We are the so-called \\"Vikings\\" from the north.";\n' +
        "char txt[] = \"It\\'s alright.\";\n" +
        'char txt[] = "The character \\\\ is called backslash.";\n'


    const Headers = [
        { title1: 'এস্কেপ ক্যারেকটার', title2: 'ফলাফল', title3: 'ডিসক্রিপসন', },
    ];

    const Data = [
        { col1: "\\'", col2: "'", col3: "সিঙ্গেল কোট", },
        { col1:`\\"` , col2: `"`, col3: "ডাবল কোট", },
        { col1: "\\\\", col2: "\\", col3: "বেকশ্লেশ", },
    ];
    const Headers2 = [
        { title1: 'এস্কেপ ক্যারেকটার', title2: 'ফলাফল' },
    ];

    const Data2 = [
        { col1: "\\n", col2: "নতুন লাইন প্রিন্ট করতে চাইলে",  },
        { col1:"\\t" , col2: `নতুন ট্যাব দিতে চাইলে`,  },
        { col1: "\\0", col2: "নাল বুঝাতে চাইলে", },
    ];
    return(
        <div  className="">
            <h2 className="H3 md-space-bottom">আজকে আমরা C প্রোগ্রামিংয়ের অন্যতম গুরুত্বপূর্ণ একটি টপিক স্ট্রিং সম্পর্কে জানবো।</h2>
            <p className="Primary-paragraph md-space-bottom">
                সি প্রোগ্রামিং এ ক্যারেক্টারে(character) এর array কে স্ট্রিং বলা হয়। null(/0) ক্যারেক্টারের মাধ্যমে স্ট্রিং এর সমাপ্তি ঘটে। উদাহরনস্বরুপঃ <HighlightText highlightText={"\"c string tutorial\""}/> এখানে, <HighlightText highlightText={"\"c string tutorial\""}/> হলো স্ট্রিং(string)। কম্পাইলার যখন স্ট্রিং কে কম্পাইল করে তখন স্ট্রিং এর শেষে একটি null(/0) ক্যারেক্টার যুক্ত করে দেয়। আরও বিস্তারিতভাবে বললে সি ল্যাংগুয়েজে আমরা বিভিন্ন সময় স্ট্রিং ব্যবহার করি। সি ল্যাংগুয়েজে স্ট্রিং বলতে সাধারনত বোঝায় এক বা একাধিক অক্ষরের সমন্বয়ে গঠিন একটা শব্দ বা বাক্য যার শেষে একটা NULL ক্যারেকটার (যেটা আসলে শূন্য) থাকে।
            </p>
            <h3 className="H4 md-space-bottom">C স্ট্রিং ডিক্লেয়ারেশন</h3>
            <p className="Primary-paragraph md-space-bottom">
                স্ট্রিং(string) নিয়ে কাজ করার পূর্বে প্রথমে তাদেরকে ডিক্লেয়ার(declared) করতে হবে।<br/>
                array কে যে পদ্ধতিতে ডিক্লেয়ার(declared) করা হয় ঠিক একই পদ্ধতিতে স্ট্রিংও ডিক্লেয়ার করা হয়। শুধু পার্থক্য হলো স্ট্রিং char টাইপের। <br/>
                আরও একটি বিষয় মনে রাখতে হবে স্ট্রিং ডিক্লেয়ারের সময় ডাবল কোটেশনের <HighlightText highlightText={"\"\""}/> ভিতরে লিখতে হবে সিঙ্গেল কোটেশনের <HighlightText highlightText={"\'\'"}/> ভিতরে লিখলে সেটা ক্যারেকটার বলে বিবেচিত হবে।
            </p>
            <div className="md-space-y">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString}
                </SyntaxHighlighter>
            </div>
            <p className="Primary-paragraph md-space-bottom">
                স্ট্রিং(string) ভ্যালু <HighlightText highlightText={"printf()"}/> ফাঙ্কশন ব্যবহার করে আউটপুট দেখতে পারবেন। আউটপুট দেখতে চাইলে ফরমেট স্পেসিফায়ার <HighlightText highlightText={"%s"}/> ব্যবহার করতে হবে। <br/> নিচের উদাহরণটি দেখুনঃ
            </p>
            <div className="md-space-bottom">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString2}
                </SyntaxHighlighter>
            </div>
            <h3 className="H4 md-space-bottom">C স্ট্রিং এক্সেস করার নিয়ম</h3>
            <p className="Primary-paragraph md-space-bottom">
               আপনি চাইলে অ্যারের মত ইনডেক্স(index) ব্যবহার করে স্ট্রিং এর এলিমেন্টকে এক্সেস করতে পারবেন।  <br/> <br/>
                অ্যারেতে যেমন নাম লিখে স্কয়ার ব্র্যকেটের ভিতর ইনডেক্স নাম্বার লিখতে হয় সেইমভাবে স্ট্রিং এর জন্যও লিখতে হয়। <br/> নিচের উদাহরণটি দেখুনঃ
            </p>
            <div className="md-space-bottom">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString3}
                </SyntaxHighlighter>
            </div>
            <p className="Primary-paragraph md-space-bottom">
                একটা বিষয় অবশ্যই মনে রাখতে হবে, স্ট্রিং এর একটি একটি ক্যারেকটার প্রিন্ট করতে চাইলে ফরমেট স্পেসিফায়ার <HighlightText highlightText={"%c"}/> ব্যবহার করতে হবে। পুরো স্ট্রিং টাই প্রিন্ট করতে চাইলে ফরমেট স্পেসিফায়ার <HighlightText highlightText={"%s"}/> ব্যবহার করতে হবে।
            </p>
            <h3 className="H4">C স্ট্রিং কে মডিফাই করার নিয়ম</h3>
            <p className="Primary-paragraph md-space-y">
                আমরা অ্যারের অধ্যায়ে দেখিছিলাম ইনডেক্স নাম্বার ব্যবহার করে ভ্যালু পরিবর্তন/মডিফাই করা যায়। সেইমভাবে ইনডেক্স নাম্বার ব্যবহার করে স্ট্রিং এর ভ্যালুও পরিবর্তন/মডিফাই করা যায়। <br/> নিচের উদাহরণটি দেখুনঃ
            </p>
            <div className="md-space-bottom">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString4}
                </SyntaxHighlighter>
            </div>
            <h3 className="H4 md-space-bottom">C স্ট্রিং এর ক্যারেকটারগুলির উপর লুপ চালানোর নিয়ম</h3>
            <p className="Primary-paragraph md-space-y">
                আমরা চাইলে স্ট্রিং এর ক্যারেকটারগুলির লুপ চালতে পারি। লুপ চালিয়ে স্ট্রিং এর ক্যারেকটারগুলি ইনপুট নিতে পারি আউটপুট দেখতে পারি। এখন আমরা আউটপুট দেখতে পারি সেটার একটা উদাহরণ দেখব, ইনপুট অধ্যায়ে গিয়ে স্ট্রিং এর ক্যারেকটারগুলি কিভাবে ইনপুট নেয় সেটা দেখবো। <br/> নিচের উদাহরণটি দেখুনঃ
            </p>
            <div className="md-space-bottom">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString5}
                </SyntaxHighlighter>
            </div>
            <h3 className="H4 md-space-bottom">C তে আরও একভাবে আমরা স্ট্রিং ডিক্লেয়ার করতে পারি।</h3>
            <p className="Primary-paragraph md-space-y">
                আমরা যেভাবে অ্যারে ডিক্লেয়ার করি সেইমভাবে শুধু ক্যারেকটারের অ্যারে ডিক্লেয়ার করব, প্রতিটা ক্যারেকটার সিঙ্গেল কোটেশনের <HighlightText highlightText={"''"}/> মধ্যে লিখব এবং শেষে নাল <HighlightText highlightText={"\\0"}/> ক্যারেকটার ব্যবহার করব। তবে এইভাবে আমরা রিয়েলাইফে এইভাবে স্ট্রিং ডিক্লেয়ার করি না। কারণ এইভাবে করাটা একটু জটিল। <br/> নিচের উদাহরণটি দেখুনঃ
            </p>
            <div className="sm-space-y">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString6}
                </SyntaxHighlighter>
            </div>

            <h3 className="H4 md-space-bottom">C ট্রিং এর একটা রিয়েল লাইফ উদাহরণ দেখি।</h3>
            <p className="Primary-paragraph md-space-y">
               চলুন ট্রিং ব্যবহার করে একটি স্বাগতম মেসেজ লেখি।
            </p>
            <div className="sm-space-y">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString7}
                </SyntaxHighlighter>
            </div>
            <hr className="md-space-y"/>
            <h3 className="H4 md-space-bottom">C স্ট্রিং এর জন্য কিছু বিল্টিন ফাংশন</h3>
            <p className="Primary-paragraph md-space-y">
                বিশেষভাবে C প্রোগ্রামিংয়ে, স্ট্রিংগুলি ক্যারেকটারের অ্যারে হিসেবে বিবেচিত হয়। C এর স্ট্যান্ডার্ড লাইব্রেরিতে কয়েক ধরণের স্ট্রিং ফাংশন রয়েছে, যা স্ট্রিংগুলির উপর বিভিন্ন অপারেশন করতে সাহায্য করে। <br/> C স্ট্রিং ফাংশনগুলি হলো:
            </p>
            <p className="Primary-paragraph md-space-y">
                <HighlightText highlightText={"strlen():"}/> এই ফাংশনটি একটি স্ট্রিংর কনটেন্টস অন্য স্ট্রিংয়ে কপি করতে ব্যবহৃত হয়।<br/> নিচের উদাহরণটি দেখুনঃ
            </p>
            <div className="sm-space-y">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString8}
                </SyntaxHighlighter>
            </div>
            <p className="Primary-paragraph md-space-y">
                <HighlightText highlightText={"strcpy():"}/> এই ফাংশনটি দুটি স্ট্রিং যোগ করতে ব্যবহৃত হয়।<br/> নিচের উদাহরণটি দেখুনঃ
            </p>
            <div className="sm-space-y">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString9}
                </SyntaxHighlighter>
            </div>
            <p className="Primary-paragraph md-space-y">
                <HighlightText highlightText={"strcat():"}/> এই ফাংশনটি দুটি স্ট্রিং তুলনা করতে ব্যবহৃত হয়। এটি 0 রিটার্ন করে যদি স্ট্রিংগুলি একই হয়।<br/> নিচের উদাহরণটি দেখুনঃ
            </p>
            <div className="sm-space-y">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString10}
                </SyntaxHighlighter>
            </div>
            <p className="Primary-paragraph md-space-y">
                <HighlightText highlightText={"strcmp():"}/> এই ফাংশনটি একটি স্ট্রিংর দৈর্ঘ্য/লেন্থ, অর্থাৎ স্ট্রিংটির অক্ষর সংখ্যা, বের করতে ব্যবহৃত হয়।<br/> নিচের উদাহরণটি দেখুনঃ
            </p>
            <div className="sm-space-y">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString11}
                </SyntaxHighlighter>
            </div>
            <hr className="md-space-y"/>
            <h3 className="H4 md-space-bottom">C স্ট্রিং বেকশ্লেশ এস্কেপ স্পেশাল ক্যারেকটার</h3>
            <p className="Primary-paragraph md-space-y">
                C তে স্ট্রিং লিখতে হয় ডাবল কোটেশনের ভিতরে এখন আমাদের যদি ডাবল কোটেশন আউটপুট হিসেবে দেখানোর প্রয়োজন পড়ে তাহলে আমরা যদি সরাসরি ডাবল কোটেশনের ভিতরেই আবার ডাবল কোটেশন লেখি তবে এরর শো করবে। এই এরর দূর করার জন্যই স্ট্রিং বেকশ্লেশ এস্কেপ স্পেশাল ক্যারেকটার ব্যবহার করা হয়।<br/> নিচের উদাহরণটি দেখুনঃ
            </p>
            <div className="sm-space-y">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString12}
                </SyntaxHighlighter>
            </div>
            <p className="Primary-paragraph md-space-y">
                নিচে কিছু এস্কেপ স্পেশাল ক্যারেকটারের লিস্ট দেয়া হলঃ
            </p>
            <DynamicTable data={Data} headerData={Headers} />
            <p className="Primary-paragraph md-space-y">
                C তে ডাবল কোটেশনের ভিতরে আবার ডাবল কোটেশন লিখতে হলে একটি বেকশ্লেশ দিয়ে তারপর ডাবল কোটেশন লিখতে হবে। সেইমভাবে সিঙ্গেল কোটেশনের ভিতরে আবার সিঙ্গেল কোটেশন লিখতে হলে একটি বেকশ্লেশ দিয়ে তারপর সিঙ্গেল কোটেশন লিখতে হবে একটি বেকশ্লেশ প্রিন্ট করতে চাইলে দুইটি বেকশ্লেশ লিখতে হবে। <br/> নিচের উদাহরণটি দেখুনঃ
            </p>
            <div className="sm-space-y">
                <SyntaxHighlighter language="c" style={dracula}>
                    {codeString13}
                </SyntaxHighlighter>
            </div>
            <p className="Primary-paragraph md-space-y">
               আরও কিছু এস্কেপ স্পেশাল ক্যারেকটারঃ
            </p>
            <DynamicTable data={Data2} headerData={Headers2} />
            <div className="navigate-buttons-style">
                <ButtonSecondary btnLink={"/c_arrays"} btnText={"❮ পূর্ববর্তী অধ্যায়"}/>
                <ButtonSecondary btnLink={"/c_user_input"} btnText={"পরবর্তী অধ্যায় ❯"}/>
            </div>
        </div>
    )
}

export  default CStrings