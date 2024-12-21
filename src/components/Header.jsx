import { Download } from "../icons/Download";

export function Header() {
  return (
    <header
      className="flex justify-center items-center
      fixed
      text-white
      backdrop-blur-2xl
      left-0 right-0
      py-3 w-fit xl:w-[500px] h-10
      mt-2
      z-30
      rounded-full
      subpixel-antialiased
      bg-opacity-70
      mx-auto"
    >
      <nav
        className="flex
      flex-wrap flex-row
      gap-x-10 text-sm gap-y-2
      justify-center lg:justify-between lg:text-sm lg:gap-y-0
      subpixel-antialiased
      text-white
      "
      >
        <a href="#top">Home</a>
        <a href="#projects">Projects</a>
        <a href="#about">About me</a>
        <a
          href="/CV_if.pdf"
          download="CV_if.pdf"
          className="bg-sky-400 text-black rounded-md px-3 hidden md:inline-block"
        >
          Download CV
        </a>
        <a
          href="/CV_if.pdf"
          download="CV_if.pdf"
          className="flex flex-row  gap-x-2 bg-sky-400 text-black rounded-md px-3 md:hidden"
        >
          <Download className="size-4" />
          CV
        </a>
      </nav>
    </header>
  );
}
