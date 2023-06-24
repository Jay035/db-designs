import { ExperiencesData } from "../../data/data";

export default function Experiences() {
  return (
    <section>
      <h2 className="tracking-[-0.03em] text-[#9CFF8F] text-lg md:text-xl mb-[27px]">
        EXPERIENCE
      </h2>
      <div className="flex flex-col gap-[13px]">
        {ExperiencesData.map((experience, index) => (
          <div key={index} className={`${experience.style} py-6 text-[#F3F4F6] md:text-xl`}>
            <div className="flex items-center gap-3">
              <span>{experience.company},</span>
              <span className="text-[#9CA3AF]">{experience.duration}</span>
            </div>
            <p>{experience.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
