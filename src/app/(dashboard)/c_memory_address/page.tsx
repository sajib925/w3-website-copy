import {HighlightText} from "@/libs/HighlightText/HighlightText";
import SyntaxHighlighter from "react-syntax-highlighter";
import {dracula} from "react-syntax-highlighter/dist/esm/styles/hljs";
import {ButtonSecondary} from "@/libs/buttons/button";


const CMemoryAddress = () => {
    const codeString = 'char greetings[] = "Hello World!";'

    return(
        <div  className="">
            <h2 className="H3 md-space-bottom">আজকে আমরা C প্রোগ্রামিংয়ের অন্যতম গুরুত্বপূর্ণ একটি টপিক মেমোরি অ্যাড্রেস সম্পর্কে জানবো।</h2>
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

            <div className="navigate-buttons-style">
                <ButtonSecondary btnLink={"/c_user_input"} btnText={"❮ পূর্ববর্তী অধ্যায়"}/>
                <ButtonSecondary btnLink={"/c_pointer"} btnText={"পরবর্তী অধ্যায় ❯"}/>
            </div>
        </div>
    )
}

export  default CMemoryAddress