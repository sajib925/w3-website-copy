import { ButtonSecondary} from "@/libs/buttons/button";
import {dracula} from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";


const Home = () => {
    const codeString = '#include <stdio.h>\n' +
        '\n' +
        'int main() {\n' +
        'printf("Hello World");\n' +
        'return0;\n' +
        '}';
    return (
            <div>
                <h2 className="H3 lg-space-bottom">C প্রোগ্রামিং ল্যাংগুয়েজের টিউটরিয়াল</h2>
                <div className="box-style-primary bg-[#D9EEE1] pl-6 rounded-3xl">
                    <h3 className="H3">C শিখা শুরু করি</h3>
                    <p className="Primary-paragraph">C একটি প্রোগ্রামিং ভাষা। এটাকে প্রোগ্রামিংয়ের মাদার ল্যাংগুয়েজ বলা হয়। এটি ডেভেলপ করেন ডেনিস রিচি, বেল ল্যাবে ৭০এর দশকে কাজ করার সময়।</p>
                    <p className="Primary-paragraph">C++ ও Java সহ পরবর্তীকালের অনেক প্রোগ্রামিং ল্যাংগুয়েজের উপর এর গভীর প্রভাব পড়েছে।</p>
                    <p className="Primary-paragraph">C সি খুব শক্তিশালী প্রোগ্রামিং ল্যাংগুয়েজ; এটি অপারেটিং সিস্টেম, ডাটাবেস, অ্যাপ্লিকেশন ইত্যাদি বানানোর কাজে ব্যবহৃত হয়েছে।</p>
                    <ButtonSecondary btnLink={"/c_introduction"} btnText={"চলুন C শিখা শুরু করি »"} className={"mt-6"} />
                </div>
                <div className="pt-[22px] pb-[32px]">
                    <h3 className="H3">প্রতিটি অধ্যায়ে উদাহরণ</h3>
                    <p className="Primary-paragraph">আমাদের {"Try it Yourself »"} এ করলে আপনি কোড এডিট করতে পারবেন এবং ব্রাউজারে আউটপুট দেখতে পারবেন। এটি আপনার C শিখার জার্নি আনেক সহজ করে তুলবে। </p>
                </div>
                <div className="code-highlighter-wrap">
                    <SyntaxHighlighter language="c" style={dracula}>
                        {codeString}
                    </SyntaxHighlighter>
                </div>
                <div className="box-style-primary bg-[#ffffcc] mt-[32px] pl-6 rounded-3xl">
                    <p className="Primary-paragraph">এটি কীভাবে কাজ করে তা দেখতে {"Try it Yourself »"} বাটনে ক্লিক করুন।</p>
                    <p className="Primary-paragraph">আমরা বাম মেনুর ক্রমানুশারে সম্পূর্ণ টিউটোরিয়ালটি পড়ার পরামর্শ দিই।</p>
                </div>
            </div>

    )
}

export default Home