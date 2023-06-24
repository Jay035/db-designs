import arrowUpRight from "../assets/arrow-up-left.svg";
import behance from "../assets/behance.svg";
import LinkedIn from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import whatsapp from "../assets/whatsapp-fill.svg";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-[#1D2939] pt-20 pb-10 md:pb-14 md:pt-[84px] px-[9.5vw]"
    >
      <h4 className="text-[#9E77ED] tracking-[-0.03em] text-lg md:text-2xl lg:text-[30px] xl:leading-[40px]">
        READY TO WORK TOGETHER?
      </h4>
      <h1 className="mt-4 mb-6 text-white text-[40px] leading-[1] md:text-5xl xl:text-[120px] tracking-[-0.03em]">
        Get in touch
      </h1>
      <section className="flex md:items-center flex-col sm:flex-row justify-between gap-8">
        <a
          href="mailto:Uniqueideas85@gmail.com"
          className="bg-[#9CFF8F] hover:bg-[#9CFF8F]/80 rounded-[30px] w-fit flex items-center gap-[10px] py-2 md:py-3 px-4"
        >
          Send me an email <img src={arrowUpRight} alt="arrow right" />
        </a>
        <div className="flex gap-4 items-center">
          <a href="https://wa.me/+2348103408082">
            <img className="w-7" src={whatsapp} alt="whatsapp logo" />
          </a>
          <a href="https://www.behance.net/Iphie2591c53">
            <img src={behance} alt="behance logo" />
          </a>
          <a href="https://www.linkedin.com/in/ifeoma-ukandu/">
            <img src={LinkedIn} alt="linkedin logo" />
          </a>
          <a href="https://twitter.com/uniquee_ideas">
            <img src={twitter} alt="twitter logo" />
          </a>
        </div>
      </section>
    </footer>
  );
}
