"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Frontend Development",
    description:
      "Crafting interactive, user-friendly interfaces with HTML, CSS, JavaScript and modern web frameworks for seamless web experiences.",
    href: "",
  },
  {
    num: "02",
    title: "Backend Development",
    description:
      "Building robust, scalable server-side applications with databases and APIs to power seamless web and mobile experiences.",
    href: "",
  },
  {
    num: "03",
    title: "Fullstack Development",
    description:
      "Designing and developing both front-end and back-end systems to create comprehensive, end-to-end web and mobile applications.",
    href: "",
  },
  {
    num: "04",
    title: "Mobile App Development",
    description:
      "Building high-performance, cross-platform mobile apps with seamless UI/UX integration, offline support, and real-time features for iOS and Android.",
    href: "",
  },
];
const Serives = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 md:py-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group glass card-3d accent-border-hover rounded-2xl p-8"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-transparent text-outline group-hover:text-outline-hover transition-all duration-300">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white/5 group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 shadow-[0_0_20px_rgba(0,0,0,0.3)] group-hover:shadow-[0_0_20px_rgba(0,255,153,0.3)]"
                  >
                    <BsArrowDownRight className="text-white/70 group-hover:text-primary text-3xl transition-colors duration-300" />
                  </Link>
                </div>
                <h2 className="text-[36px] font-bold leading-none text-white group-hover:text-accent transition-all duration-300">
                  {service.title}
                </h2>
                <p className="text-white/60 leading-relaxed">
                  {service.description}
                </p>
                <div className="border-b border-white/10 w-full group-hover:border-accent/30 transition-colors duration-300"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Serives;
