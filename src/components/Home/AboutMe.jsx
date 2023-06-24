import Experiences from "./Experiences";
import Skills from "./Skills";

export default function AboutMe() {
  return (
    <section id="about" className="pt-5 px-[10vw] pb-[106px]">
      <h2 className="tracking-[-0.03em] text-4xl md:text-6xl mb-[15px]">
        ABOUT ME
      </h2>
      <div className="pb-[100px] max-w-[991px]">
        <p className="text-[#D0D5DD] tracking-wide text-lg md:text-xl pb-6">
          I’m a Product Designer who enjoys the process of taking products from
          0 to 1, navigating from product strategy and customer feedback,
          combing through data, and balancing business and user needs to create
          functional products.{" "}
        </p>

        <p className="text-[#D0D5DD] tracking-wide text-lg md:text-xl pb-6">
          {" "}
          Overtime, I’ve horned my craft across segments of design including
          brand design, motion design and most recently, No-code development. 
        </p>

        <p className="text-[#D0D5DD] tracking-wide text-lg md:text-xl">
          I love to identify as a Visual thinker who creates solutions that make
          life better through digital products.
        </p>
      </div>
      <div className="grid gap-20 lg:gap-24 lg:grid-cols-2">
        <Experiences />
        <Skills />
      </div>
    </section>
  );
}
