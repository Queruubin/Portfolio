import { useState } from "react";
import { Badge } from "../components/Badges";
import { Projects } from "../components/Proyects";
import { SectionContainer } from "../components/SectionContainer";
import { SocialPill } from "../components/SocialPill";
import CodeIcon from "../icons/Code";
import Github from "../icons/Github";
import LinkedIn from "../icons/Linkedin";
import { MailIcon } from "../icons/Mail";
import { Toaster } from "../components/Toaster";
import { About } from "../components/About";
import { UserIcon } from "../icons/User";

export function FirstView() {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <main className="px-4">
      <Toaster isHidden={isHidden} setIsHidden={setIsHidden} />
      <SectionContainer id="" class_="py-44 pb-32 md:h-screen">
        <img
          className="rounded-full w-12 h-12 mb-4"
          src="/foto.png"
          alt="Samuel's photo"
        />
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10">
          Hi I&apos;m Samuel
          <a
            href="https://www.linkedin.com/in/sam-castelblanco/"
            className="flex items-center"
            target="_blank"
            rel="noopener"
          >
            <Badge />
          </a>
        </h1>
        <h2 className="text-white text-xl lg:text-2xl text-wrap max-w-[700px]">
          <span className="text-blue-200">Full Stack Developer</span> with a
          Passion for Building Scalable Solutions.
          <span className="text-red-200/90">
            &nbsp;Turning Ideas into Reality with Code and Design
          </span>
        </h2>

        <nav className="flex gap-4 mt-8 flex-wrap">
          <SocialPill href="https://www.linkedin.com/in/sam-castelblanco/">
            <LinkedIn className="size-4 md:size-6" />
            LinkedIn
          </SocialPill>
          <SocialPill href="https://github.com/Queruubin">
            <Github className="size-4 md:size-6" />
            Github
          </SocialPill>
          <SocialPill
            onclick={() => {
              navigator.clipboard.writeText("samuelcf0123@gmail.com");
              setIsHidden(false);
            }}
          >
            <MailIcon className="size-4 md:size-6" />
            Copy Email
          </SocialPill>
        </nav>
      </SectionContainer>
      <SectionContainer id="projects">
        <h2 className="text-3xl font-semibold mb-6 flex gap-x-3 items-center">
          <CodeIcon className="size-7" />
          Projects
        </h2>
        <Projects />
      </SectionContainer>
      <SectionContainer id="about">
        <h2 className="text-3xl font-semibold mb-6 flex gap-x-3 items-center">
          <UserIcon className="size-7" />
          About Me
        </h2>
        <About />
      </SectionContainer>
    </main>
  );
}
