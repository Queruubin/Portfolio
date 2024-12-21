export function SectionContainer({ children, id, class_ }) {
  return (
    <section
      id={id}
      className={` ${class_} first-line:w-full mx-auto lg:w-[47rem] pb-24 text-white`}
    >
      {children}
    </section>
  );
}
