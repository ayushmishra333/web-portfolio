import Head from "next/head";
import {
  AiFillLinkedin,
  AiFillGithub
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import ayush from "../public/Ayushanimated.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Ayush Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-slate-50 px-10 dark:bg-slate-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">AY.</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-stone-100 text- to-gray-900 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="./Ayush Mishra - CV.pdf" download="Ayush Mishra - CV"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-2">
            <h2 className="text-5xl py-2 text-stone-900 font-medium dark:text-neutral-300 md:text-6xl">
              Hi, I&apos;m Ayush
            </h2>
            <h3 className="text-2xl py-2 dark:text-neutral-300 md:text-3xl">
              Developer and designer.
            </h3>
            <p className="text-md py-5 leading-8 text-stone-900 dark:text-neutral-300 max-w-xl mx-auto md:text-xl">
             Creating seamless digital experiences with a blend of creativity and technical expertise.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-2 text-gray-600 dark:text-gray-400">
           <a href="https://linkedin.com/in/ayushmishra333" target="_blank" rel="noreferrer"><AiFillLinkedin /></a> 
           <a href="https://github.com/ayushmishra333" target="_blank" rel="noreferrer"><AiFillGithub /></a> 
            </div>
            <div className="relative py-2">
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <h1 className="text-slate-900 dark:text-slate-50 text-7xl md:text-7xl lg:text-9xl font-bold opacity-20 text-center px-4">
                SICKER THAN YOUR <span className="underline text-amber-500">AVERAGE</span>
              </h1>
            </div>
              <div className="mx-auto bg-gradient-to-b from-stone-50 dark:from-slate-900 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
                <Image src={ayush} layout="fill" objectFit="contain" />
              </div>
            </div>
            </div>
          </section>
        {/* <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
        </section> */}
        <section className="py-2">
          <div> 
            <h3 className="text-3xl py-1 text-center dark:text-neutral-300 ">Portfolio</h3>
            <p className="text-md py-2 text-justify leading-8 text-gray-800 dark:text-neutral-300">
              Discover my projects, where I combine design and development to build intuitive and high-performance web applications. 
              Each project showcases my skills, dedication, and passion for delivering exceptional digital solutions.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            {/* <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-contain"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div> */}
            {/* <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div> */}
          </div>
        </section>
        <section className="footer text-center py-15 text-stone-900 dark:text-gray-200">
          <p class="py-5">Also, have a look at my game dev portfolio!</p>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"><a href="https://ayushmishra333.github.io" target="_blank" rel="noreferrer">Portfolio</a></button>
        </section>
        <section className="footer text-center py-10 text-stone-900 dark:text-gray-200">
          <p>Designed and Developed by ayush-mishra3 @ 2024</p>
        </section>
      </main>
    </div>
  );
}
