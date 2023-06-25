import { useLayoutEffect, useRef } from "react";
import avatar from "../../assets/avatar.svg";
import frame from "../../assets/Frame.svg";
import { Power3, Power4, gsap } from "gsap";

export default function HeroSection() {
  let hero = useRef(null);

  // useLayoutEffect(() => {
  // let ctx = gsap.context(() => {
  // gsap.from(".hero-item", {
  //   duration: 2,
  //   stagger: {
  //     amount: 0.4,
  //   },
  //   ease: Power3.easeIn,
  //   opacity: 0,
  // });
  // gsap.from(".hero-img", {
  //   x: -100,
  // });
  // gsap.from(".text", {
  //   y: -100,
  // });
  // gsap.from(".pText", {
  //   x: 100,
  // });
  // }, hero);
  // return () => ctx.revert();
  // }, []);

  return (
    <section
      ref={hero}
      className="mb-[122px] w-full px-[9.5vw] mt-20 xl:mt-[150px]"
    > 
      <img
        className="hero-item hero-img w-32 md:w-[146px] mb-8"
        src={avatar}
        alt="Ify avatar"
      />
      <p className="text-center mb-8 md:text-lg w-fit mr-auto text-[#DF99F7] py-2 md:py-3 px-3 md:px-4 rounded-[30px] border border-[#DF99F7]">
      Currently based in Ireland 🇮🇪
      </p>
      <h1 className="font-league-gothic">
        <span className="hero-item text flex gap-3 md:gap-[18px] items-center mb-2">
          <span className="text-[72px] leading-[1] md:text-6xl lg:text-8xl xl:text-[150px] xl:leading-[150px] tracking-[-0.03em]">
            HI, I’M BENNY!
          </span>
          <img className="w-10 md:w-[60px] lg:w-[72px]" src={frame} alt="" />
        </span>
        <span className="hero-item text text-[72px] leading-[1] md:text-6xl lg:text-8xl xl:text-[150px] xl:leading-[150px] tracking-[-0.03em]">
          I DESIGN DIGITAL PRODUCTS
        </span>
      </h1>
      <p className="w-full hero-item pText text mt-8 text-xl lg:text-3xl leading-8 md:leading-[42px] text-[#F2F4F7]">
        I’m a designer whose focus is to not only make interfaces that work
        well, but also ones that are enjoyable to use. I have a strong
        enthusiasm for my work and constantly strive to improve my abilities in
        order to become an expert in my field.
      </p>
    </section>
  );
}
