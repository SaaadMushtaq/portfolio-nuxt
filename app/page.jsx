import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full pb-4 relative overflow-hidden">
      {/* Ambient glow backdrop */}
      <div className="pointer-events-none absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-accent/[0.04] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-accent/[0.03] blur-[100px]" />

      <div className="container mx-auto h-full relative z-10">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl text-white/70 tracking-widest uppercase text-sm mb-2 block">
              Software Engineer
            </span>
            <h1 className="h1 mb-6">
              Hello I'm <br />{" "}
              <span className="text-accent drop-shadow-[0_0_30px_rgba(0,255,153,0.35)]">
                Saad Mushtaq
              </span>{" "}
            </h1>
            <p className="max-w-[500px] mb-10 text-white/60 leading-relaxed">
              I excel at crafting elegant digital experiences and I am
              proficient in Various programming language and technologies
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                asChild
              >
                <a
                  href="/assets/resume/resume.pdf"
                  download="Saad_Mushtaq_Resume.pdf"
                >
                  <span>Download Resume</span>
                  <FiDownload className="text-xl" />
                </a>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent/50 rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:border-accent hover:shadow-[0_0_20px_rgba(0,255,153,0.4)] transition-all duration-300"
                />
              </div>
            </div>
          </div>

          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
