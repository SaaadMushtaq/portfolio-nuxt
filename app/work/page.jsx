"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import { MdZoomIn } from "react-icons/md";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "Skill Sync",
    description:
      "This is job tracking application built using React.js, Tailwind.css and Node.js. It allows users to track their job applications, set reminders for follow-ups, and manage their job search process efficiently.",
    stack: [
      { name: "React.js" },
      { name: "Tailwind.css" },
      { name: "Node.js" },
    ],
    image: [
      "/assets/projects/skill-sync/skill-sync_1.png",
      "/assets/projects/skill-sync/skill-sync_2.png",
      "/assets/projects/skill-sync/skill-sync_3.png",
      "/assets/projects/skill-sync/skill-sync_4.png",
    ],
    live: "https://skill-sync-frontend-ochre.vercel.app",
    frontend_github: "https://github.com/SaaadMushtaq/skill-sync-frontend.git",
    backend_github: "https://github.com/SaaadMushtaq/skill-sync-backend.git",
  },
  {
    num: "02",
    category: "frontend",
    title: "Code DNA",
    description:
      "This is a code analysis tool built using React.js and Tailwind.css. It allows users to paste their code and see what type of code they write with interactive visualization",
    stack: [{ name: "React.js" }, { name: "Tailwind.css" }],
    image: [
      "/assets/projects/code-dna/code-dna_1.png",
      "/assets/projects/code-dna/code-dna_2.png",
    ],
    live: "https://code-kljky835n-saaadmushtaqs-projects.vercel.app/",
    frontend_github: "https://github.com/SaaadMushtaq/code-dna.git",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const [imageIndex, setImageIndex] = useState(0);
  const [modal, setModal] = useState({ open: false, project: null, index: 0 });

  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.activeIndex]);
    setImageIndex(0);
  };

  const images = Array.isArray(project.image) ? project.image : [project.image];

  const prevImage = () =>
    setImageIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const nextImage = () =>
    setImageIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  const openModal = (proj, idx) =>
    setModal({ open: true, project: proj, index: idx });
  const closeModal = () => setModal({ open: false, project: null, index: 0 });

  const modalPrev = useCallback(
    () =>
      setModal((m) => ({
        ...m,
        index: m.index === 0 ? m.project.image.length - 1 : m.index - 1,
      })),
    [],
  );
  const modalNext = useCallback(
    () =>
      setModal((m) => ({
        ...m,
        index: m.index === m.project.image.length - 1 ? 0 : m.index + 1,
      })),
    [],
  );

  useEffect(() => {
    if (!modal.open) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") modalPrev();
      if (e.key === "ArrowRight") modalNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modal.open, modalPrev, modalNext]);

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                  {project.num}
                </div>

                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                  {project.category} Project
                </h2>
                <p>{project.description}</p>
                <ul className="flex gap-4 flex-wrap">
                  {project.stack.map((item, index) => (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  ))}
                </ul>
                <div className="border border-white/20"></div>
                <div className="flex items-center gap-4">
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  {project.frontend_github && (
                    <Link
                      href={project.frontend_github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group relative">
                            <BsGithub className="text-white text-3xl group-hover:text-accent" />
                            <span className="absolute -bottom-1 -right-1 text-[10px] font-bold bg-accent text-primary rounded-full w-5 h-5 flex items-center justify-center">
                              FE
                            </span>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Frontend Repository</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  )}
                  {project.backend_github && (
                    <Link
                      href={project.backend_github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group relative">
                            <BsGithub className="text-white text-3xl group-hover:text-accent" />
                            <span className="absolute -bottom-1 -right-1 text-[10px] font-bold bg-accent text-primary rounded-full w-5 h-5 flex items-center justify-center">
                              BE
                            </span>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Backend Repository</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {/* Right — image carousel */}
            <div className="w-full xl:w-[50%]">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="xl:h-[520px] mb-12"
                onSlideChange={handleSlideChange}
              >
                {projects.map((proj, index) => {
                  const imgs = Array.isArray(proj.image)
                    ? proj.image
                    : [proj.image];
                  const currentImgIdx = proj === project ? imageIndex : 0;
                  return (
                    <SwiperSlide key={index} className="w-full">
                      <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                        {/* Clickable image — opens modal */}
                        <div
                          className="relative w-full h-full cursor-zoom-in"
                          onClick={() => openModal(proj, currentImgIdx)}
                        >
                          <Image
                            src={imgs[currentImgIdx]}
                            fill
                            className="object-cover"
                            alt={proj.title}
                          />
                          {/* Zoom hover overlay */}
                          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                            <MdZoomIn className="text-white text-5xl drop-shadow-lg" />
                          </div>
                        </div>

                        {/* Inner image prev/next — only when active project has multiple images */}
                        {imgs.length > 1 && (
                          <>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                prevImage();
                              }}
                              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-accent text-white text-lg w-9 h-9 flex items-center justify-center rounded-full transition-colors duration-200"
                            >
                              <PiCaretLeftBold />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                nextImage();
                              }}
                              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-accent text-white text-lg w-9 h-9 flex items-center justify-center rounded-full transition-colors duration-200"
                            >
                              <PiCaretRightBold />
                            </button>
                            {/* Dot indicators */}
                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                              {imgs.map((_, i) => (
                                <button
                                  key={i}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setImageIndex(i);
                                  }}
                                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                                    i === currentImgIdx
                                      ? "bg-accent"
                                      : "bg-white/50 hover:bg-white"
                                  }`}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                      <WorkSliderBtns
                        containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                        btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Full-screen image preview modal */}
      {modal.open && modal.project && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white/70 hover:text-accent transition-colors text-3xl"
            >
              <IoClose />
            </button>

            {/* Image */}
            <div className="relative w-full h-[75vh]">
              <Image
                src={modal.project.image[modal.index]}
                fill
                className="object-contain"
                alt={modal.project.title}
                quality={90}
              />
            </div>

            {/* Prev / Next */}
            {modal.project.image.length > 1 && (
              <>
                <button
                  onClick={modalPrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-accent text-white text-xl w-11 h-11 flex items-center justify-center rounded-full transition-colors duration-200"
                >
                  <PiCaretLeftBold />
                </button>
                <button
                  onClick={modalNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-accent text-white text-xl w-11 h-11 flex items-center justify-center rounded-full transition-colors duration-200"
                >
                  <PiCaretRightBold />
                </button>

                {/* Dot strip + counter */}
                <div className="flex items-center justify-center gap-2 mt-4">
                  {modal.project.image.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setModal((m) => ({ ...m, index: i }))}
                      className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${
                        i === modal.index
                          ? "bg-accent"
                          : "bg-white/40 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-center text-white/40 text-sm mt-2">
                  {modal.index + 1} / {modal.project.image.length}
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Work;
