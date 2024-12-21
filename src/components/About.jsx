export function About() {
  return (
    <section className="flex flex-col-reverse lg:flex-row gap-x-10 justify-center items-center">
      <div className="[&>p]:mb-4 text-pretty">
        <p>
          ¡Hi I&apos;m Samuel Castelblanco! I’m a Systems Engineering student
          who started programming back in high school, turning curiosity into a
          rewarding journey. Over the past few years, I’ve gained freelance
          experience, collaborating on projects that bring ideas to life and
          solve real-world problems.
        </p>
        <p>
          <strong className="text-sky-200">
            I designed a Transportation Management System (TMS){" "}
          </strong>
          application to optimize processes for transport companies. This
          solution includes both a web application and a mobile app, providing
          real-time load tracking and enhancing operational efficiency.
        </p>
        <p>
          When I’m not working, you’ll probably find me swimming laps at the
          pool or kicking a football around. Sports keep me energized and fuel
          my drive to tackle challenges—whether on the field or in code.
        </p>
      </div>
      <img
        src="/yo.jpg"
        alt="Image about me"
        className="rounded-full size-48"
      />
    </section>
  );
}
