import { Link, NavLink } from "react-router-dom";
import { HashLink, NavHashLink } from "react-router-hash-link";
import { Power3, gsap } from "gsap";
import { useRef, useState } from "react";
import { useLayoutEffect } from "react";
import logo from "../../assets/logo.svg";
import arrowLeft from "../../assets/arrow-down-left.svg";
import Hamburger from "./Hamburger";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [checkboxState, setCheckboxState] = useState(false);

  let hamburger = useRef(null);
  let nav = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // gsap.from(".logo", {
      //   delay: 1.2,
      //   opacity: 0,
      //   y: -20,
      //   stagger: {
      //     amount: 0.4,
      //   },
      //   ease: Power3.easeInOut,
      // });
      gsap.from(".nav_item", {
        delay: 1.2,
        opacity: 0,
        y: -80,
        stagger: {
          amount: 0.4,
        },
        ease: Power3,
      });
    }, nav);
    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={nav}
      className="relative flex justify-between text-white items-center tracking-tight w-full gap-x-12 py-6 lg:pt-[52px] px-[10vw]"
    >
      <section>
        <Link to="/" className="logo">
          <img
            className={`z-[99999] nav_item ${
              menuOpen && `absolute top-6 lg:top-[52px] md:relative`
            }`}
            src={logo}
            alt="logo"
          />
        </Link>
      </section>

      <section
        className={`${
          menuOpen
            ? `left-0 px-8 pt-8 gap-6 opacity-100 z-[1000] ease-out lg:pt-0 transition-all duration-100 delay-75`
            : `-left-full opacity-0 lg:opacity-100 lg:left-0 transition-all duration-100 delay-75`
        } absolute top-0 bg-[#111111] lg:bg-transparent lg:relative h-screen lg:h-fit w-full lg:w-fit ease-in-out flex flex-col lg:flex-row lg:gap-12 lg:justify-between lg:items-center text-base md:text-lg`}
      >
        <ul className="list-none flex mt-[50%] lg:mt-0 flex-col items-center gap-9 lg:flex-row">
          <li onClick={() => setMenuOpen(false)}>
            <HashLink
              to="/projects"
              // to="/#myWorks"
              className="nav_item lg:text-2xl hover:font-bold"
            >
              WORK
            </HashLink>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <HashLink
              to="/#about"
              className="nav_item lg:text-2xl hover:font-bold"
            >
              ABOUT
            </HashLink>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <HashLink
              to="/#contact"
              className="nav_item lg:text-2xl hover:font-bold"
            >
              CONTACT
            </HashLink>
          </li>
          <button className="">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1JofDXbneOPnXA_CZ3wPilAO6pHRz7-h6/view?usp=sharing "
              className="list_item flex items-center gap-[10px] border rounded-[30px] px-4 py-3 hover:bg-[#9E77ED] hover:border-[#9E77ED]"
            >
              MY RESUME
              <img src={arrowLeft} alt="arrow" />
            </a>
          </button>
        </ul>
      </section>

      <Hamburger
        checkboxState={checkboxState}
        setCheckboxState={setCheckboxState}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
    </nav>
  );
}
