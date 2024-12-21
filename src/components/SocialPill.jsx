export function SocialPill({ children, href, onclick }) {
  return (
    <a
      href={href}
      onClick={onclick}
      className="rounded-full border border-white/20 flex justify-center 
      items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 text-xs md:text-base bg-white/5 hover:scale-110 hover:bg-white/10 transition"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}