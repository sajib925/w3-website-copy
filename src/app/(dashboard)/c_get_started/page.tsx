import {ButtonSecondary} from "@/libs/buttons/button";
import Link from "next/link";
import Image from "next/image";
import img from "src/assets/images/code-blocks.png"
import SyntaxHighlighter from "react-syntax-highlighter";
import {dracula} from "react-syntax-highlighter/dist/esm/styles/hljs";

const CGetStarted = () => {
    const codeString = '#include <stdio.h>\n' +
        '\n' +
        'int main() {\n' +
        'printf("Hello World");\n' +
        'return0;\n' +
        '}';
    return (
        <div>
            <h2 className="H3 lg-space-bottom">চলুন শুরু করি C দিয়ে।</h2>
            <div className="box-style-primary">
                <p className="Primary-paragraph">C প্রোগ্রামিং ল্যাংগুয়েজটি শিখা শুরু করতে, আপনার দুটি জিনিসের প্রয়োজন
                    হবে:</p>
                <ul className="list-items-style">
                    <li className="list-item-style">C কোড লেখার জন্য Notepad বা Visual Studio কোডের মতো একটি কোড ইডিটর
                        লাগবে।
                    </li>
                    <li className="list-item-style">GCC এর মতো একটি কম্পাইলার, যা C কোডকে এমন একটি ভাষায় অনুবাদ করবে
                        যেটা কম্পিউটার বুঝতে পারে।
                    </li>
                </ul>
                <p className="Primary-paragraph">কোড লেখার জন্য অনেক কোড ইডিটর এবং কম্পাইলার রয়েছে। এই টিউটোরিয়ালে,
                    আমরা একটি IDE ব্যবহার করব (নীচে দেখুন)।</p>
            </div>
            <div className="box-style-primary">
                <h3 className="H3">ইনস্টল IDE এবং সেটআপ</h3>
                <p className="Primary-paragraph">ইনস্টল IDE (ইন্টিগ্রেটেড ডেভেলপমেন্ট এনভায়রনমেন্ট) কোড লেখা এবং আউটপুট
                    দেখার জন্য ব্যবহৃত হয়।</p>
                <p className="Primary-paragraph">জনপ্রিয় IDE গুলির মধ্যে রয়েছে Code::Blocks, Eclipse, এবং Visual
                    Studio। এগুলি সমস্ত বিনামূল্যে, এবং এগুলি সি কোড লেখা এবং ডিবাগ উভয়ই ব্যবহার করা যেতে পারে।</p>
                <p className="Primary-paragraph">দ্রষ্টব্য: ওয়েব-ভিত্তিক IDE গুলিও কাজ করতে পারে তবে কার্যকারিতা
                    সীমিত।</p>
                <p className="Primary-paragraph">আমরা আজকের টিউটোরিয়ালে Code::Blocks ব্যবহার করব আপনি চাইলে Eclipse,
                    এবং Visual Studio বা অন্য কোন IDE ব্যবহার করতে পারেন, তবে নতুনদের জন্য Code::Blocks একটি ভাল
                    জায়গা।</p>
                <p className="Primary-paragraph">আপনি এই লিংকে <Link href="http://www.codeblocks.org/" target={"_blank"}
                                                                     className="text-link">http://www.codeblocks.org/</Link> কোডব্লকের
                    লেটেস্ট ভার্সন খুঁজে পাবেন, <span className="text-highlighter"> mingw-setup.exe</span> ফাইলটি
                    ডাউনলোড করুন, যা একটি কম্পাইলারসহ কোড ইডিটর ইনস্টল করবে।</p>
            </div>

            <div className="box-style-primary">
                <h3 className="H3">C চলুন জটপট শুরু করি</h3>
                <p className="Primary-paragraph">আসুন আমাদের প্রথম C ফাইল তৈরি করি।</p>
                <p className="Primary-paragraph">আপনার Code::Blocks ওপেন করুন এবং ফাইল অপশন এ গিয়ে নতুন ফাইল বানিয়ে
                    ফেলুন <span className="text-bold">{"File > New > Empty File."}</span> তারপর <span
                        className="text-highlighter"> myfirstprogram.c</span> <span
                        className="text-bold">{"(File > Save File as):"}</span></p>
                <p className="Primary-paragraph">ফাইল বানানোর সময় আপনাকে অবশ্যই মনে রাখতে হবে যে, ফাইলের নাম আপনি xyz যে
                    কোন কিছু দিতে পারবেন কিন্তু নামের শেষে অত্যাবশ্যকীয় আপনাকে <span
                        className="text-bold">{".c"} </span> দিতে হবে।</p>

            </div>

           <div className="code-highlighter-wrap">
               <SyntaxHighlighter language="c" style={dracula}>
                   {codeString}
               </SyntaxHighlighter>
           </div>

            <div className="box-style-primary">
                <p className="Primary-paragraph">আপনি যদি উপরের কোডটি বুঝতে না পারেন তবে চিন্তা করবেন না - আমরা পরবর্তী
                    অধ্যায়গুলিতে এটি বিস্তারিতভাবে আলোচনা করব। আপাতত, কোডটি কীভাবে রান করানো যায় সেই দিকে মনোনিবেশ
                    করুন।</p>
                <p className="Primary-paragraph">Code::Blocks এ কোডটি এরকম দেখাবে:</p>
                <div className="max-w-[700px] w-full h-full">
                    <Image src={img} alt="code editor" className="w-full h-full"/>
                </div>
                <p className="Primary-paragraph">তারপরে, প্রোগ্রামটি রান করানোর জন্য <span
                    className="text-bold">{"Build > Build and Run"}</span> এ
                    ক্লিক করুন। নিচের মত কিছু দেখাবে:</p>
                <div className="w-full bg-grayColor p-4 rounded-3xl">
                    <div className="w-full bg-blackColor p-4">
                        <p className="Primary-paragraph text-whiteColor">
                            Hello World<br/>Process returned 0 (0x0) execution time : 0.011 s<br/>Press any
                            key to continue.</p>
                    </div>
                </div>
                <p className="Primary-paragraph"><span className="text-bold">{"অভিনন্দন!"}</span> আপনি এখন আপনার প্রথম
                    সি প্রোগ্রাম লিখেছেন এবং আউটপুট দেখেছেন।</p>

            </div>

            <div className="navigate-buttons-style">
                <ButtonSecondary btnLink={"/c_introduction"} btnText={"❮ পূর্ববর্তী অধ্যায়"}/>
                <ButtonSecondary btnLink={"c_syntax"} btnText={"পরবর্তী অধ্যায় ❯"}/>
            </div>

        </div>
    )
}

export default CGetStarted