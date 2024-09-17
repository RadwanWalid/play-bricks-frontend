'use client';
import LandingModel from "../components/LandingModel/LandingModel";
import PopularModels from "../components/PopularModels/PopularModels";
import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";

export default function Home() {

  const [modelReady, setModelReady] = useState(false);

  const downloadGame = () => {
    const fileUrl = '/PlayBricks Desktop/Play Bricks Setup (x86).zip';

    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Play Bricks Setup (x86).zip';

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };

  const MemoizedLandingModel = useMemo(
    () => <LandingModel onloaded={() => setModelReady(true)} />,
    [modelReady, setModelReady]
  );

  return (
    <div>
      <div className="flex items-center relative h-[31rem] mb-6 434:mb-0 704:h-full 704:flex-col-reverse">
        <section className="my-10 mx-20 988:mx-10 580:!mx-0 434:!mx-4 relative 704:bottom-10 space-y-2 flex-[1] 988:flex-initial">
          <div className="text-7xl 1130:text-6xl 580:!text-4xl 580:h-52 434:!h-44 434:top-6 relative 580:w-full 704:right-8 uppercase font-bold text-with-glow leading-tight 704:grid 580:gap-x-16 704:grid-cols-3 704:grid-rows-[1fr_1fr]">
            <div className="whitespace-nowrap 704:text-right inline-block 704:relative 704:left-8 434:!left-12 704:top-5 704:col-[1/2] 704:row-[1]">
              <span className="land-span relative inline-block animate-bounce animation-delay-100">L</span>
              <span className="land-span relative inline-block animate-bounce animation-delay-200">e</span>
              <span className="land-span relative inline-block animate-bounce animation-delay-300">t</span>
            </div>
            <div className="hidden whitespace-nowrap text-right 434:scale-90 434:!bottom-12 mx-auto 704:inline-block 580:-translate-x-[21%] relative 704:bottom-6 col-[2/3] row-[1/3]">
              {!modelReady && <div className="loader mx-1 top-14 right-14 434:top-20 434:right-[4.25rem] after:border-[#7EEBFF_transparent]" />}
              {MemoizedLandingModel}
            </div>
            <span className="704:hidden"> </span>
            <div className="whitespace-nowrap 704:text-right inline-block 704:relative 704:left-2 434:!left-8 580:bottom-6 704:col-[1/2] 704:row-[2]">
              <span className="land-span relative inline-block animate-bounce animation-delay-400">T</span>
              <span className="land-span relative inline-block animate-bounce animation-delay-500">h</span>
              <span className="land-span relative inline-block animate-bounce animation-delay-600">e</span>
            </div>
            <br className="704:hidden" />
            <div className="whitespace-nowrap 704:text-right inline-block 704:relative 704:top-5 704:right-6 434:!right-8 704:col-[3/4] 704:row-[1]">
              <span className="land-span relative inline-block animate-bounce animation-delay-700">G</span>
              <span className="land-span relative inline-block animate-bounce animation-delay-800">a</span>
              <span className="land-span relative inline-block animate-bounce animation-delay-900">m</span>
              <span className="land-span relative inline-block animate-bounce animation-delay-1000">e</span>
            </div>
            <span className="704:hidden"> </span>
            <div className="whitespace-nowrap 704:text-right inline-block 704:relative 704:right-0 434:!right-2 580:bottom-6 704:col-[3/4] 704:row-[2]">
              <span className="land-span relative inline-block animate-bounce animation-delay-1100">B</span>
              <span className="land-span relative inline-block animate-bounce animation-delay-1200">e</span>
              <span className="land-span relative inline-block animate-bounce animation-delay-1300">g</span>
              <span className="land-span relative inline-block animate-bounce animation-delay-1400">i</span>
              <span className="land-span relative inline-block animate-bounce animation-delay-1500">n</span>
            </div>
          </div>
          <p className="text-[0.9rem] 580:text-xs 988:pt-2 580:mx-6 704:text-center">Immerse yourself in the beauty of Islamic architecture as you construct magnificent buildings using LEGO blocks. Harness the intricate patterns and textures inspired by centuries-old designs, and unleash your creativity to shape a breathtaking cityscape that pays homage to the rich heritage of Islamic art and culture.</p>
          <div className="space-x-6 pt-3 flex font-bold items-center 704:justify-center">
            <button onClick={downloadGame} className="cursor-pointer border-2 border-white rounded-md text-center text-sm 434:whitespace-nowrap px-4 py-3 bg-white text-blue-950 hover:scale-110 transition-all duration-300 w-fit">Download <span className="434:hidden">& Play offline</span></button>
            <Link as='/Game' href='/Game'><div className="cursor-pointer border-2 border-white rounded-md bg-transparent 434:whitespace-nowrap text-center text-sm px-4 py-3 hover:scale-110 transition-all duration-300 w-fit">Play Now</div></Link>
          </div>
        </section>
        <div className="flex-[1] h-full 988:relative 988:top-10 704:flex-initial 704:hidden block">
          {!modelReady && <div className="loader mx-1 top-32 left-44 after:border-[#7EEBFF_transparent]" />}
          {MemoizedLandingModel}
        </div>
      </div>
      
      <div className="mt-4 434:-mt-8">
        <h1 className="text-4xl ml-24 mb-6 434:mx-6 434:text-3xl">Our Community&apos;s Latest Hits</h1>
        <PopularModels />
      </div>

      <div className="text-center my-20 580:!mt-10">
        <div className="mb-14">
          <h1 className="text-5xl 580:text-3xl font-bold mb-6">Meet Our Team</h1>
          <div className="mx-44 mb-6 704:mx-16 580:text-sm">
            Get to know the faces behind Play Bricks and discover the collective effort that went into making this game a reality.
            <Link as='/AboutUs' href='/AboutUs' className="text-blue-600 hover:text-blue-800"> Learn more.</Link>
          </div>
        </div>

        <div className="flex justify-center items-center space-x-20 580:space-x-10 text-[0.7rem]">
          <div className="flex flex-col items-center justify-center">
            <div className="overflow-hidden w-[100px] h-[100px] 580:w-[86px] 580:h-[86px] flex justify-center items-center rounded-[100%]">
              <Image height={100} width={100} src="/images/Professor Mohammed.jpeg" alt="Prof. Mohammed" />
            </div>
            <h1 className="font-bold w-36 mb-1 mt-4 text-sm 434:text-xs">Prof. Mohammed A.-Megeed Salem</h1>
            <p className="w-40 text-center">Professor of Image & Vision Computing at The German University in Cairo</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="overflow-hidden w-[100px] h-[100px] 580:w-[86px] 580:h-[86px] flex justify-center items-center rounded-[100%]">
              <Image className="scale-125 mt-10" height={100} width={100} src="/images/My Photo.jpeg" alt="Radwan Walid" />
            </div>
            <h1 className="font-bold w-36 mb-3 mt-4 text-sm 434:text-xs">Radwan Walid</h1>
            <p className="w-40 text-center">MET Bachelor Student at The German University in Cairo</p>
          </div>
        </div>
      </div>
    </div>
  )
}