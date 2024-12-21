import Expo from "../icons/Expo";
import Expressjs from "../icons/Express";
import Firebase from "../icons/Firebase";
import GoogleMaps from "../icons/GoogleMaps";
import Mapbox from "../icons/Mapbox";
import MySQL from "../icons/Mysql";
import ReactIcon from "../icons/React";
import TailwindCSS from "../icons/Tailwind";

const TAGS = {
  REACT: {
    name: "React",
    class: "bg-black text-white",
    icon: ReactIcon,
  },
  REACTNATIVE: {
    name: "React Native",
    class: "bg-black text-white",
    icon: ReactIcon,
  },
  TailwindCSS: {
    name: "TailwindCSS",
    class: "bg-[#003159] text-white",
    icon: TailwindCSS,
  },
  FIREBASE: {
    name: "Firebase",
    class: "bg-orange-300 text-black",
    icon: Firebase,
  },
  EXPO: {
    name: "Expo",
    class: "bg-white text-black",
    icon: Expo,
  },
  GoogleMaps: {
    name: "GoogleMaps",
    class: "bg-black text-white",
    icon: GoogleMaps,
  },
  ExpressJs: {
    name: "Express.js",
    class: "bg-neutral-800 text-white",
    icon: Expressjs,
  },
  MYSQL: {
    name: "Mysql",
    class: "bg-white text-black",
    icon: MySQL,
  },
  MAPBOX: {
    name: "Mapbox",
    class: "bg-white text-black",
    icon: Mapbox,
  },
};

const PROJECTS = [
  {
    title: "TMS - Integrated Fleet Management and Traceability System",
    description:
      "This comprehensive system includes a web dashboard for managing and analyzing operations, real-time traceability with interactive maps, and a mobile app for location sharing from drivers' devices.",
    link: "#",
    github: "#",
    image: "/proyects/web_carvis.webp",
    tags: [
      TAGS.REACT,
      TAGS.TailwindCSS,
      TAGS.MAPBOX,
      TAGS.FIREBASE,
      TAGS.MYSQL,
      TAGS.ExpressJs,
    ],
  },
  {
    title: "TMS Mobile App - Real-Time Location Sharing and Driver Tools",
    description:
      "The TMS Mobile App is a companion tool designed for drivers to seamlessly share their location and interact with the TMS web dashboard. It ensures real-time visibility for fleet managers while providing an easy-to-use interface for drivers to report activities and access critical updates.",
    link: "#",
    github: "#",
    image: "/proyects/movile_carvis.webp",
    tags: [TAGS.REACTNATIVE, TAGS.EXPO, TAGS.FIREBASE, TAGS.GoogleMaps],
  },
];

export function Projects() {
  return (
    <>
      {PROJECTS.map(({ title, description, tags, image }) => (
        <article key={title} className="mb-7">
          <h3 className="text-xl lg:text-2xl font-semibold text-sky-400 mb-2">
            {title}
          </h3>
          <p className="text-lg mb-4 text-pretty">{description}</p>
          <ul className="flex gap-2 flex-row mb-2 flex-wrap">
            {tags.map((tag, index) => (
              <li key={index}>
                <span
                  className={`flex gap-x-2 rounded-full items-center text-xs ${tag.class} py-1 px-2`}
                >
                  <tag.icon className="size-4" />
                  {tag.name}
                </span>
              </li>
            ))}
          </ul>
          <img
            className="rounded shadow-2xl shadow-white/10"
            src={image}
            alt={`Screenshot of the ${title} project`}
          />
        </article>
      ))}
    </>
  );
}
