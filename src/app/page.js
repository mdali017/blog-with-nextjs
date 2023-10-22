import Section1 from "@/components/section1";
import Section2 from "@/components/section2";
import Section3 from "@/components/section3";
import Section4 from "@/components/section4";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* <h1>Welcome To Next.JS</h1>
      <h2>Time: 50:15</h2> */}
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </main>
  );
}
