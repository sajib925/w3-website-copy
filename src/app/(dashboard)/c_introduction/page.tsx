import {ButtonSecondary} from "@/libs/buttons/button";


const CIntroduction = () => {
    return(
        <div>
            <h2 className="H2 mb-[50px]">C ল্যাংগুয়েজের পরিচিতি।</h2>
            <div className="box-style-primary">
                <h3 className="H3">C আসলে কি??</h3>
                <p className="Primary-paragraph">C একটি ব্যসিক প্রোগ্রামিং ল্যাংগুয়েজ, C ডেভেলপ করেন ডেনিস রিচি, বেল ল্যাবে ৭০এর দশকে কাজ করার সময়।</p>
                <p className="Primary-paragraph">C প্রোগ্রামিং ল্যাংগুয়েজটি তৈরির প্রথম উদ্দেশ্য ছিল UNIX অপারেটিং সিস্টেম এর কোড লেখা।</p>
                <p className="Primary-paragraph">C প্রোগ্রামিং ল্যাংগুয়েজটি পুরানো হওয়া সত্ত্বেও এটি খুবই জনপ্রিয় ল্যাংগুয়েজ। এর জনপ্রিয়তার প্রধান কারণ এটি কম্পিউটার বিজ্ঞানের ক্ষেত্রে একটি ব্যসিক ল্যাংগুয়েজ।</p>
                <p className="Primary-paragraph">C দৃঢ়ভাবে UNIX এর সাথে যুক্ত, কারণ এটি UNIX অপারেটিং সিস্টেম লেখার জন্য তৈরি করা হয়েছিল।</p>
            </div>
            <div className="pt-[22px] pb-[32px]">
                <h3 className="H3">এত প্রোগ্রামিং ল্যাংগুয়েজ থাকতে আমি কেন C শিখব??</h3>
                <ul className="list-items-style">
                    <li className="list-item-style">এটি বিশ্বের অন্যতম জনপ্রিয় প্রোগ্রামিং ল্যাংগুয়েজ।</li>
                    <li className="list-item-style">আপনি যদি সি জানেন তবে আপনার অন্যান্য জনপ্রিয় প্রোগ্রামিং ল্যাংগুয়েজ যেমন Java, Python, C++ , C# , Javascript ইত্যাদি শিখতে কোনও সমস্যা হবে না, কারণ সিনট্যাক্সগুলো প্রায় একই।</li>
                    <li className="list-item-style">Java এবং Python এর মতো অন্যান্য প্রোগ্রামিং ল্যাংগুয়েজের তুলনায় C খুব ফাস্ট।</li>
                    <li className="list-item-style">C খুবই ফ্লেক্সিবল প্রোগ্রামিং ল্যাংগুয়েজ এটি অ্যাপ্লিকেশন এবং প্রযুক্তি উভয় ক্ষেত্রেই ব্যবহার করা যেতে পারে।</li>
                </ul>
            </div>
            <div className="box-style-primary">
                <h3 className="H3">IDE ইন্সটল করুন</h3>
                <ul className="list-items-style">
                    <li className="list-item-style">C++ ল্যাংগুয়েজ C এর এক্সটেনশন হিসাবে তৈরি করা হয়েছিল এবং উভয় ল্যাংগুয়েজের সিনট্যাক্স প্রায় একই।</li>
                    <li className="list-item-style">C এবং C++ এর মধ্যে প্রধান পার্থক্য হল C++ ক্লাস এবং অবজেক্ট সাপোর্ট করে, কিন্তু সি তা করে না।</li>
                </ul>
            </div>

            <div className="navigate-buttons-style">
                <ButtonSecondary btnLink={"/c_home"} btnText={"❮ পূর্ববর্তী অধ্যায়"} />
                <ButtonSecondary btnLink={"c_get_started"} btnText={"পরবর্তী অধ্যায় ❯"} />
            </div>

        </div>
    )
}

export  default CIntroduction