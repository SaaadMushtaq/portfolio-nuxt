"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 4,
    text: "Years of experience",
  },

  {
    num: 7,
    text: "Technologies Mastered",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => {
            return (
              <div
                className="flex-1 gap-4 items-center justify-center xl:justify-start glass card-3d rounded-xl px-6 py-5 cursor-default"
                key={index}
              >
                <CountUp
                  end={stat.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold text-accent drop-shadow-[0_0_12px_rgba(0,255,153,0.4)]"
                />
                <p
                  className={`${
                    stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/70 mt-1`}
                >
                  {stat.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
