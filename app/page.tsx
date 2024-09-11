'use client';
import LandingModel from "../components/LandingModel/LandingModel";
import PopularModels from "../components/PopularModels/PopularModels";
import Link from "next/link";
import Image from "next/image";

export default function Home() {

  const downloadGame = () => {
    const fileUrl = '/PlayBricks Desktop/Play Bricks Setup (x86).zip';

    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Play Bricks Setup (x86).zip';

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };

  return (
    <div>
      <div className="flex items-center relative h-[31rem] mb-6">
        <section className="my-10 mx-20 space-y-2 flex-[1]">
          <div className="text-7xl relative uppercase font-bold text-with-glow leading-tight">
            <span className="land-span relative inline-block animate-bounce animation-delay-100">L</span>
            <span className="land-span relative inline-block animate-bounce animation-delay-200">e</span>
            <span className="land-span relative inline-block animate-bounce animation-delay-300">t</span>
            &nbsp;
            <span className="land-span relative inline-block animate-bounce animation-delay-400">T</span>
            <span className="land-span relative inline-block animate-bounce animation-delay-500">h</span>
            <span className="land-span relative inline-block animate-bounce animation-delay-600">e</span>
            <br />
            <span className="land-span relative inline-block animate-bounce animation-delay-700">G</span>
            <span className="land-span relative inline-block animate-bounce animation-delay-800">a</span>
            <span className="land-span relative inline-block animate-bounce animation-delay-900">m</span>
            <span className="land-span relative inline-block animate-bounce animation-delay-1000">e</span>
            &nbsp;
            <span className="land-span relative inline-block animate-bounce animation-delay-1100">B</span>
            <span className="land-span relative inline-block animate-bounce animation-delay-1200">e</span>
            <span className="land-span relative inline-block animate-bounce animation-delay-1300">g</span>
            <span className="land-span relative inline-block animate-bounce animation-delay-1400">i</span>
            <span className="land-span relative inline-block animate-bounce animation-delay-1500">n</span>
          </div>
          <p className="text-[0.9rem]">Immerse yourself in the beauty of Islamic architecture as you construct magnificent buildings using LEGO blocks. Harness the intricate patterns and textures inspired by centuries-old designs, and unleash your creativity to shape a breathtaking cityscape that pays homage to the rich heritage of Islamic art and culture.</p>
          <div className="space-x-6 pt-3 flex font-bold items-center">
            <button onClick={downloadGame} className="cursor-pointer border-2 border-white rounded-md text-center text-sm px-4 py-3 bg-white text-blue-950 hover:scale-110 transition-all duration-300 w-fit">Download & Play offline</button>
            <Link as='/Game' href='/Game'><div className="cursor-pointer border-2 border-white rounded-md bg-transparent text-center text-sm px-4 py-3 hover:scale-110 transition-all duration-300 w-fit">Play Now</div></Link>
          </div>
        </section>
        <LandingModel />
      </div>
      
      <div className="mt-4">
        <h1 className="text-4xl ml-24 mb-6">Our Community&apos;s Latest Hits</h1>
        <PopularModels />
      </div>

      <div className="text-center my-20">
        <div className="mb-14">
          <h1 className="text-5xl font-bold mb-6">Meet Our Team</h1>
          <div className="mx-44 mb-6">
            Get to know the faces behind Play Bricks and discover the collective effort that went into making this game a reality. 
            <Link as='/AboutUs' href='/AboutUs' className="text-blue-600 hover:text-blue-800"> Learn more.</Link>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-20 text-[0.7rem]">
          <div className="flex flex-col items-center justify-center">
            <div className="overflow-hidden scale-125 w-[100px] h-[100px] flex justify-center items-center rounded-[100%]">
              <Image height={200} width={200} src="/images/Professor Mohammed.jpeg" alt="" />
            </div>
            <h1 className="font-bold w-36 mb-1 mt-4 text-sm">Prof. Mohammed A.-Megeed Salem</h1>
            <p className="w-40">Professor of Image & Vision Computing at The German University in Cairo</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="overflow-hidden scale-125 w-[100px] h-[100px] flex justify-center items-center rounded-[100%]">
              <Image className="scale-[2.25] mt-28 mr-5" height={200} width={200} src="/images/My Photo.jpeg" alt="" />
            </div>
            <h1 className="font-bold w-36 mb-3 mt-4 text-sm">Radwan Walid</h1>
            <p className="w-40">MET Bachelor Student at The German University in Cairo</p>
          </div>
        </div>
      </div>
    </div>
  )
}