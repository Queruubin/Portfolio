import { Arroba } from "../icons/arroba";
import LinkedIn from "../icons/Linkedin";

export function Footer({ id }) {
  return (
    <footer
      id={id}
      className="rounded-lg shadow m-4 bg-black/20 backdrop-blur-lg w-full xl:w-[1120px] mx-auto mb-10"
    >
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm sm:text-center text-blue-200/90">
          © 2024{" "}
          <a href="#" className="hover:underline">
            Samuel Castelblanco
          </a>
          .
        </span>
        <ul className="flex flex-wrap gap-x-3 items-center mt-3 text-sm font-medium text-white/90 sm:mt-0">
          <li>
            <a href="mailto:samuelcf0123@gmail.com">
              <Arroba
                className="size-4 cursor-pointer"
                href="mailto:samuelcf0123@gmail.com"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/sam-castelblanco/"
              target="_blank"
              rel="noopener"
            >
              <LinkedIn className="size-4 cursor-pointer" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
