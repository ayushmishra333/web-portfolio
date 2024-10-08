import { useState, useEffect } from "react";
import Head from "next/head";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaAngleDoubleUp } from "react-icons/fa";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Image from "next/image";
import GameController from "../components/GameController";
import Carousel from "../components/Carousel";
import { motion } from 'framer-motion';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Ayush | Front-end Web Developer | Portfolio & Projects</title>
        <meta name="description" content="Welcome to Ayush's portfolio website. Explore my skills, projects, and experiences as a front-end web developer specializing in creating visually stunning and responsive websites." />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="Ayush | Front-end Web Developer" />
        <meta property="og:description" content="Explore Ayush's portfolio showcasing skills and projects as a front-end web developer." />
        <meta property="og:image" content="/webphoto.png" />
        <meta property="og:url" content="https://ayushmishra.co.uk" />
        <meta property="og:type" content="website" />

        <meta name="robots" content="index, follow" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ayush | Front-end Web Developer" />
        <meta name="twitter:description" content="Explore Ayush's portfolio showcasing skills and projects as a front-end web developer." />
        <meta name="twitter:image" content="/webphoto.jpg" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://ayushmishra.co.uk" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Nabla&display=swap" rel="stylesheet"/>

        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
            __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Ayush",
            "jobTitle": "Front-end Web Developer",
            "url": "https://ayushmishra.co.uk",
            "sameAs": [
              "https://linkedin.com/in/ayushmishra333",
              "https://github.com/ayushmishra333",
            ],
            "image": "/ayushmishra.jpg",
            "description": "Ayush is a front-end web developer with expertise in creating responsive and visually appealing websites."
          }),
        }}

      />
      </Head>
      <main className="bg-slate-50 px-10 dark:bg-slate-900 md:px-20 lg:px-40">
        <section className="min-h-screen py-5">
          <nav className="navbar py-4 px-8 mb-12 flex justify-between items-center dark:text-white">
            <h1 className="font-bold text-2xl font-luckiest-guy">AM.</h1>
            <ul className="flex items-center">
              <li>
                <motion.div
                  className="neumorphic-icon"
                  onClick={() => setDarkMode(!darkMode)}
                  whileTap={{ scale: 0.9 }}
                >
                  {darkMode ? (
                    <BsFillSunFill className="cursor-pointer text-2xl" />
                  ) : (
                    <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
                  )}
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
          <div className="text-center p-5">
            <h2 className="text-7xl md:text-8xl lg:text-9xl py-2 text-nike font-extrabold font-luckiest-guy">
              Hi, I&apos;m Ayush
            </h2>
            <div className="px-5 py-3 md:px-10  mx-auto inline-block">
              <h3 className="text-xl md:text-4xl lg:text-5xl text-stone-900 dark:text-neutral-300 font-luckiest-guy">
                DEVELOPER & DESIGNER
              </h3>
            </div>
            <p className="text-lg py-5 leading-6 text-stone-900 dark:text-neutral-300 max-w-xl mx-auto md:text-2xl font-pacifico-regular">
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
              <p className="text-md py-2 text-center leading-6 text-gray-800 dark:text-neutral-300">
                Check out my projects where design meets development to create seamless digital experiences. Every project is a testament to my dedication and passion.
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
        {showScrollTop && (
          <button
            className="scroll-to-top"
            onClick={scrollToTop}
            aria-label="Scroll to Top"
          >
            <FaAngleDoubleUp className="text-4xl" />
          </button>
        )}
        <Analytics />
        <SpeedInsights />
      </main>
    </div>
  );
}