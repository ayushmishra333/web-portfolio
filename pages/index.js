import { useState } from "react";
import Head from "next/head";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Image from "next/image";
import GameController from "../components/GameController";
import Carousel from "../components/Carousel";
import { motion } from 'framer-motion';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Ayush Portfolio</title>
        <meta name="description" content="Ayush portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-slate-50 px-10 dark:bg-slate-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-bold text-2xl font-luckiest-guy">AY.</h1>
            <ul className="flex items-center">
              <li>
                <motion.div
                  className="neumorphic-icon"
                  onClick={() => setDarkMode(!darkMode)}
                  whileTap={{ scale: 0.9 }}
                >
                  <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
                </motion.div>
              </li>
              <li>
                <motion.a
                  className="neumorphic-button text-stone-900 px-4 py-2 font-extrabold ml-8"
                  href="./Ayush Mishra - CV.pdf"
                  download="Ayush Mishra - CV"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  CV
                </motion.a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-2">
            <h2 className="text-6xl py-2 text-nike font-extrabold md:text-7xl font-luckiest-guy">
              Hi, I&apos;m Ayush
            </h2>
            <h3 className="text-3xl py-2 dark:text-neutral-300 md:text-4xl font-luckiest-guy">
              Developer and designer.
            </h3>
            <p className="text-lg py-5 leading-8 text-stone-900 dark:text-neutral-300 max-w-xl mx-auto md:text-2xl font-luckiest-guy">
              I make pretty things work on your screens.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-2 text-gray-600 dark:text-gray-400">
              <motion.a
                href="https://linkedin.com/in/ayushmishra333"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <AiFillLinkedin />
              </motion.a>
              <motion.a
                href="https://github.com/ayushmishra333"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2, rotate: -10 }}
                whileTap={{ scale: 0.9 }}
              >
                <AiFillGithub />
              </motion.a>
            </div>

            <div className="relative mb-10 centered-container">
            <div className="relative z-10 mx-auto image-container">
                <Image src="/Ayushanimated.png" layout="fill" objectFit="contain" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="graffiti-text text-7xl md:text-9xl lg:text-9xl font-bold opacity-50 text-center graffiti-font leading-none">
                  SICKER THAN YOUR <u>AVERAGE</u>
                </h1>
              </div>
            </div>

          </div>
          <section className="py-2 mt-10">
            <div>
              <h3 className="text-4xl py-1 text-center dark:text-neutral-300 font-luckiest-guy">Portfolio</h3>
              <p className="text-md py-2 text-center leading-8 text-gray-800 dark:text-neutral-300">
                Check out my awesome projects where design meets development to create seamless digital experiences. Every project is a testament to my dedication and passion.
              </p>
            </div>
            <div className="py-10">
              <Carousel />
            </div>
          </section>
          <section className="footer text-center py-15 text-stone-900 dark:text-gray-200">
            <p className="py-5">When I&apos;m not saving the world, I dabble in game dev. Peek at my side quests!</p>
            <div onClick={() => window.open('https://ayushmishra333.github.io', '_blank')}>
              <GameController />
            </div>
          </section>
          <section className="footer text-center text-xs py-10 text-stone-900 dark:text-gray-200">
            <p>Handcrafted by yours truly, Ayush — because, like, who else would do it? © 2024</p>
          </section>
        </section>
        <Analytics />
        <SpeedInsights />
      </main>
    </div>
  );
}
