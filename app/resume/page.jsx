'use client';

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaVuejs,
  FaFigma,
  FaNodeJs,
} from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiNuxtdotjs } from 'react-icons/si';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const about = {
  title: 'About Me',
  description:
    'Highly motivated and result-oriented software engineer with 2+ years of professional experience and a total of 4 years experience in frontend development. Possesses strong expertise in ReactJS, VueJS, along with familiarity with some other JavaScript web frameworks. Demonstrates a good understanding of software development methodologies and best practices. Exhibits excellent problem-solving skills and a passion for staying updated with the latest web development technologies',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Saad Mushtaq',
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+92) 302 6308993',
    },
    {
      fieldName: 'Experience',
      fieldValue: '3 Years',
    },
    {
      fieldName: 'Skype',
      fieldValue: 'live:a4e7bdf6e50ea8cf',
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Pakistani',
    },
    {
      fieldName: 'Email',
      fieldValue: 'saadmushtaq941@gmail.com',
    },
    {
      fieldName: 'Languages',
      fieldValue: 'English, Urdu, Punjabi',
    },
  ],
};

const experience = {
  icon: '/assets/resume/experience.png',
  title: 'My Experience',
  description:
    'A highly motivated and results-driven software engineer with over 2 years of professional experience and a total of 4 years in frontend development. Skilled in ReactJS and VueJS, with knowledge of various other JavaScript web frameworks. Well-versed in software development methodologies and best practices, with strong problem-solving abilities and a passion for keeping up with the latest web development technologies.',
  items: [
    {
      company: 'Code Foresight',
      position: 'Frontend Developer',
      duration: '08/2023 - present',
    },
    {
      company: 'Emumba Private limited',
      position: 'Software Engineer - Frontend',
      duration: '03/2022 - 07/2023',
    },
    {
      company: 'GAO Tek Inc.',
      position: 'Software Development Intern',
      duration: '10/2021 - 01/2022',
    },
  ],
};

const education = {
  icon: '/assets/resume/education.png',
  title: 'My Education',
  description:
    "I have completed my bachelors in Computer Sciences From FAST - National University of computer and emerging sciences from 2017 to 2022 during which i have studies basic courses like Data Structures, Object oriented programming as well as field specific courses like web development, mobile app developmentI earned my Bachelor's degree in Computer Science from FAST - National University of Computer and Emerging Sciences, graduating in 2021. During my studies from 2017 to 2021, I completed foundational courses such as Data Structures and Object-Oriented Programming, along with specialized courses in web development and mobile app development.",
  items: [
    {
      institution:
        'FAST - National University of computer and emerging sciences',
      degree: 'BS(CS)',
      duration: '2017-2022',
    },
  ],
};

const skills = {
  title: 'My Skills',
  description:
    'Dedicated software engineer with a strong computer science foundation and hands-on experience in front-end development. Skilled in using modern technologies to build efficient and scalable web applications.',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'HTML 5',
    },
    {
      icon: <FaCss3 />,
      name: 'CSS 3',
    },
    {
      icon: <FaJs />,
      name: 'Javascript',
    },
    {
      icon: <FaReact />,
      name: 'React JS',
    },
    {
      icon: <FaVuejs />,
      name: 'Vue JS',
    },
    {
      icon: <SiNextdotjs />,
      name: 'Next JS',
    },
    {
      icon: <SiNuxtdotjs />,
      name: 'Nuxt JS',
    },
    {
      icon: <FaNodeJs />,
      name: 'Node JS',
    },
    {
      icon: <SiTailwindcss />,
      name: 'Tailwind CSS',
    },
    {
      icon: <FaFigma />,
      name: 'Figma',
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className='container mx-auto'>
        <Tabs
          defaultValue='experience'
          className='flex flex-col xl:flex-row gap-[60px]'
        >
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='about'>About me</TabsTrigger>
          </TabsList>

          <div className='min-h-[70vh] w-full'>
            <TabsContent value='experience' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {experience.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                            {item.position}
                          </h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value='education' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {education.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                            {item.degree}
                          </h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value='skills' className='w-full h-full'>
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                    {skills.description}
                  </p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group '>
                              <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className='capitalize'>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value='about'
              className='w-full text-center xl:text-left'
            >
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {about.description}
                </p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className='flex items-center justify-center xl:justify-start gap-4'
                      >
                        <span className='text-white/60'>{item.fieldName}</span>
                        <span className='text-xl'>{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
