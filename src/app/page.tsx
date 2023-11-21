import {Navbar} from "@/components/Navbar";
import {Hero} from "@/sections/Hero";
import {HTMLSection} from "@/sections/HTMLSection";
import {CSSSection} from "@/sections/CSSSection";
import {JavascriptSection} from "@/sections/JavascriptSection";
import {PythonSection} from "@/sections/PythonSection";
import {CSection} from "@/sections/CSection";

export default function Home() {
  return (
      <>
        <Navbar />
         <Hero />
          <svg style={{backgroundColor:"#D9EEE1"}} width="100%" height="70" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path id="wavepath" d="M0,0  L110,0C35,150 35,0 0,100z" fill="#06021D"></path>
          </svg>
          <HTMLSection />
          <CSSSection />
          <JavascriptSection />
          <CSection />
          <PythonSection />
      </>
  )
}
