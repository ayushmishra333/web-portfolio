import { useState } from "react";
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";
import { FaGithub, FaInfoCircle, FaTimesCircle } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import web7 from "../public/web7.png";
import web8 from "../public/web8.png";
import web9 from "../public/web9.png";
import web10 from "../public/web10.png";

const images = [
  { src: web1, title: "Dino Run", type: "figma", link: "https://www.figma.com/design/g3VKDBAmSBvvxLHIOopUmQ/Dino-Run?node-id=0-1&t=Qv92jIOLbGmvnhQB-1", description: "A playful and engaging start screen UI for a dinosaur-themed running game. The design captures the game's lively and fun atmosphere, featuring animated dinosaur, start buttons, and a vibrant color palette that appeals to the target audience." },
  { src: web2, title: "QR Code Generator", type: "github", link: "https://github.com/ayushmishra333/qr-code-generator", description: "A web application that allows users to generate QR codes for any given URL. The app is built using HTML, CSS, and JavaScript, with Tailwind CSS for styling and the qrcodejs library for generating the QR codes." },
  { src: web3, title: "Mouse Tracking", type: "github", link: "https://github.com/ayushmishra333/mouse-tracking", description: "A simple and fun web application where the eyes of a Tom Cat follow the mouse cursor. This project demonstrates basic JavaScript skills in creating interactive and responsive web elements." },
  { src: web4, title: "Currency Converter", type: "github", link: "https://github.com/ayushmishra333/currency-convertor", description: "A user-friendly web application for converting currencies using real-time exchange rates. The interface is designed to be intuitive and visually appealing, ensuring a seamless user experience." },
  { src: web5, title: "Clean Mobile UI", type: "figma", link: "https://www.figma.com/design/VLz66BDXymISfF3IvvzS6X/Clean-Mobile-UI?node-id=0-1&t=BvYNvzu1o6yC4qoP-1", description: "A mobile screen interface designed using principles of color theory, font theory, and user experience (UX) design. The design emphasizes readability, intuitive navigation, and a visually appealing color scheme that enhances user engagement." },
  { src: web6, title: "Hoverboard Web App", type: "github", link: "https://github.com/ayushmishra333/hoverboard-effect", description: "An interactive web application featuring a grid of squares that animate and change color when hovered over. This project highlights the use of JavaScript and CSS to create dynamic and engaging user interactions." },
  { src: web7, title: "OTT UI Design", type: "figma", link: "https://www.figma.com/design/iD54L9mG1RuGsWvWJPhx31/OTT-UI-Design?node-id=0-1&t=ofJweXFHsaXMZOOG-1", description: "A user interface design for video streaming applications, featuring a clean layout with a focus on usability and aesthetics." },
  { src: web8, title: "New Year Countdown", type: "github", link: "https://github.com/ayushmishra333/new-year-countdown", description: "A festive web application that counts down to the next New Year's Day. The design is vibrant and engaging, capturing the celebratory spirit of the event." },
  { src: web9, title: "Portfolio Website", type: "info", description: "A sleek and modern UI design tailored for a personal portfolio website, utilizing bold fonts to create a strong visual hierarchy. The design focuses on minimalism and functionality, ensuring that content is the main focus." },
  { src: web10, title: "Vector Graphics based UI", type: "figma", link: "https://www.figma.com/design/RHA2eRMswsyRsuiLohwo13/Untitled?node-id=0-1&t=5R6oFjvPxbGzuCV6-1", description: "A mobile UI design for a Danish insurance company, incorporating vector graphics for clarity and scalability. The design features a clean and professional look, aligning with the company’s branding while ensuring ease of use for the end-users." },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [showInfo, setShowInfo] = useState(null);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    setShowInfo(null); // Close info when moving to the next project
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    setShowInfo(null); // Close info when moving to the previous project
  };

  const handleInfoClick = (image) => {
    setShowInfo(image === showInfo ? null : image); // Toggle info popup
  };

  return (
    <div className="carousel-container">
      <div onClick={prevSlide} className="carousel-arrow left-arrow">
        <IoMdArrowDropleftCircle className="arrow-icon" />
      </div>
      <div onClick={nextSlide} className="carousel-arrow right-arrow">
        <IoMdArrowDroprightCircle className="arrow-icon" />
      </div>
      <div className="carousel-slides" style={{ transform: `translateX(-${current * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <Image src={image.src} alt={`web project ${index}`} className="carousel-image" />
            <div className="button-group">
              {image.type === "figma" && (
                <a href={image.link} target="_blank" rel="noopener noreferrer" className="icon-button figma-icon">
                  <FiFigma className="icon" />
                </a>
              )}
              {image.type === "github" && (
                <a href={image.link} target="_blank" rel="noopener noreferrer" className="icon-button github-icon">
                  <FaGithub className="icon" />
                </a>
              )}
              {(image.type === "info" || image.description) && (
                <button onClick={() => handleInfoClick(image)} className="icon-button info-icon">
                  <FaInfoCircle className="icon" />
                </button>
              )}
            </div>
            {showInfo && showInfo === image && (
              <div className="info-popup">
                <div className="info-content">
                  <button onClick={() => setShowInfo(null)} className="icon-button close-icon" style={{ position: 'absolute', top: '-25px', right: '-25px' }}>
                    <FaTimesCircle className="icon" />
                  </button>
                  <div className="popup-header">{image.title}</div>
                  <div className="info-text">{image.description}</div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
