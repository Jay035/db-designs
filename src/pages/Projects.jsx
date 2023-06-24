import { useNavigate } from "react-router-dom";
import arrowRight from "../assets/arrow-right-circle.svg";
import officeHR from "../assets/officeHR_2.png";
import { projectsData } from "../data/data";
import Transition from "../components/Transition";
import { useRef } from "react";
import { useEffect } from "react";
import { Power3, gsap } from "gsap";
import { useState } from "react";

export default function Projects() {
  const navigate = useNavigate();
  const [projectImg, setProjectImg] = useState(officeHR);
  const [objectposition, setObjectposition] = useState("object-right");
  const container = useRef(null);
  const showProjectDetails = (name, disabled) => {
    if (!disabled) {
      console.log(disabled);
      navigate(`/projects/${name}`);
    } else return;
  };

  const toggleImage = (project) => {
    if (project?.name === "TidePay" || project?.name === "OfficeHR") {
      setObjectposition("object-right");
    } else if (project?.name === "ID-UNILAG") {
      setObjectposition("object-right");
    } else {
      setObjectposition("object-[top_right]");
    }
    setProjectImg(project?.heroImgMobile);
    console.log(project?.heroImgMobile);
    gsap.to(".project-img", {
      ease: Power3.easeIn,
    });
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".skewLeft", {
        delay: 1.2,
        skewY: -10,
        x: -100,
        opacity: 0,
        ease: Power3,
      });
      gsap.from(".skewRight", {
        delay: 0.2,
        skewY: 10,
        x: 100,
        opacity: 0,
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={container}>
      <Transition />
      <div className="wrapper overflow-x-hidden bg-[#111111] w-full px-[9.5vw] pb-[101px] mt-12">
        <section className="skewLeft flex justify-between items-center w-full mb-[120px]">
          <h1 className="w-full hero-item text text-5xl md:text-6xl lg:text-7xl xl:text-[120px] tracking-[-0.03em] text-white">
            RECENT <br /> PROJECTS
          </h1>
          {/* <img
            className="w-12 md:w-[93.33px] animate-pulse"
            src={arrowRight}
            alt="arrow right"
          /> */}
        </section>
        <section className=" grid lg:grid-cols-2 w-full">
          <div className=" text-white flex flex-col">
            {projectsData?.map((project, index) => (
              <div
                key={index}
                onClick={() =>
                  showProjectDetails(project?.name, project?.disabled)
                }
                onMouseEnter={() => toggleImage(project)}
                // onMouseLeave={() => toggleImage(project)}
                className={`${project?.style} ${
                  !project?.disabled ? "cursor-pointer" : "cursor-default"
                } flex justify-between items-center py-4 lg:py-8`}
              >
                <div className="flex items-center gap-8">
                  <p className="skewLeft border rounded-full py-2 md:py-3 px-4 border-[#D0D5DD]">
                    {project?.year}
                  </p>
                  <h2 className="skewLeft text-3xl lg:text-[60px]">
                    {project?.name}
                  </h2>
                </div>
                {project?.disabled && (
                  <p className="text-center text-[#DF99F7] py-2 md:py-3 px-3 md:px-4 rounded-[30px] border border-[#DF99F7]">
                    Coming soon
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="skewRight project-img hidden lg:flex mt-20 lg:mt-0 w-full lg:min-w-[640px] ">
            <img
              className={`${objectposition} px-4 object-cover w-full transition-all max-h-[700px] ease-in-out`}
              src={projectImg}
              alt=""
            />
          </div>
        </section>
      </div>
    </div>
  );
}
