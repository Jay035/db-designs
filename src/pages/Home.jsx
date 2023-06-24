import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import HeroSection from "../components/Home/HeroSection";
import MyWork from "../components/Home/MyWork";
import AboutMe from "../components/Home/AboutMe";
import Footer from "../components/Footer";
import Transition from "../components/Transition";
import { useEffect } from "react";
import { Power3 } from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // const tl = gsap.timeline();
  const container = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".wrapper", {
        duration: 4,
        // opacity: 0,
      });

      gsap.from(".hero-item", {
        stagger: {
          amount: 0.6,
        },
        ease: Power3.easeIn,
      });

      gsap.from(".hero-img", {
        x: -100,
        opacity: 0,
        duration: 2,
      });

      gsap.from(".text", {
        x: 100,
        opacity: 0,
        duration: 2,
        skewY: 10,
      });

      gsap.from(".pText", {
        // x: 100,
        duration: 2,
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={container}>
      <Transition />
      <main className="wrapper text-white bg-[#111111] w-full">
        <HeroSection />
        <MyWork />
        <AboutMe />
      </main>
      <Footer />
    </div>
  );
}
