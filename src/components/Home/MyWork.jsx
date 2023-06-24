import { Link, useNavigate } from "react-router-dom";
import frame from "../../assets/officeHR.png";
import { projectsData } from "../../data/data";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { Power3 } from "gsap";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function MyWork() {
  const navigate = useNavigate();
  const [mouseEntered, setMouseEntered] = useState(false);
  const container = useRef(null);

  const showProjectDetails = (name) => {
    setMouseEntered(true);
    navigate(`/projects/${name}`);
  };

  const zoomIn = () => {
    setMouseEntered(true);
  };

  const zoomOut = () => {
    setMouseEntered(false);
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      // let panels = gsap.utils.toArray(".panel").forEach((wrapper, i) => {
      //   ScrollTrigger.create({
      //     trigger: wrapper,
      //     start: "top top",
      //     pin: true,
      //     pinSpacing: false,
      //     // snap: 1,
      //   });
        // gsap.to(wrapper.children, {
        //   scale: "1.1",
        // });
        // gsap.from(wrapper.children, {
        //   // scale: "1.05",
        //   ease: Power3.easeOut,
        //   scrollTrigger: {
        //     trigger: wrapper,
        //     start: "top center",
        //     end: "top top",
        //     toggleActions: "play none reverse reset",
        //   },
        // });
      // });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="mb-[140px] pt-5 w-full" id="myWorks">
      <h2 className="tracking-[-0.03em] font-league-gothic mb-16 px-[9.5vw] text-5xl md:text-6xl">
        MY WORK
      </h2>
      {/* <div className="snap-y snap-mandatory overflow-y-scroll grid gap-12"> */}
      <div className="">
        {projectsData?.slice(0, 4).map((project, index) => (
          <div
            key={index}
            onClick={() => showProjectDetails(project?.name)}
            // onMouseEnter={zoomIn}
            // onMouseLeave={zoomOut}
            className="panel cursor-pointer w-full relative h-screen"
            // className="panel cursor-pointer snap-start w-full h-screen relative"
          >
            {/* // ${
            //   mouseEntered ? "scale-105" : "scale-100"
            // } */}
            <img
              className={`w-full h-screen scale-100
               object-cover ${project?.objectPosition}`}
              src={ project?.heroImgDesktop || project?.heroImgMobile}
              alt="work img"
            />
            {/* mobile img */}
            {/* <img
              className={`hidden lg: w-full h-screen min-h-screen transition-all ease-out object-cover ${project?.objectPosition}`}
              src={project?.heroImg}
              alt="work img"
            /> */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:translate-y-0 sm:translate-x-0 sm:bottom-10 sm:top-[unset] lg:bottom-20 sm:left-6 lg:left-12 flex flex-col items-center sm:items-start gap-2 lg:gap-3">
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-2 scale-90">
                {project?.tag?.map((tag, index) => (
                  <span
                    key={index}
                    className="border bg-[rgba(255,255,255,0.2)] rounded-[30px] px-4 py-2 lg:py-3 md:text-xl 2xl:text-2xl tracking-[-0.03em]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="font-league-gothic scale-90 text-6xl md:text-7xl lg:text-[120px]">
                {project?.name}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <Link
        to="/projects"
        // ${
        //   mouseEntered ? "md:mt-[850px]" : ""
        // }
        className={`
          w-full max-w-[180px] mt-14 text-center tracking-[-0.03em] rounded-[30px] md:text-xl flex justify-center items-center mx-auto border py-3 px-4`}
      >
        SEE ALL WORKS
      </Link>
    </section>
  );
}
