export function Toaster({ isHidden, setIsHidden }) {
  const hidden = "opacity-0 translate-y-[50px]";
  const notHidden = "opacity-1 translate-y-0";

  if (!isHidden) {
    setTimeout(() => {
      setIsHidden(true);
    }, 2000);
  }
  return (
    <div
      className={`
      fixed w-[150px] bottom-5 right-8 flex flex-col
      justify-center items-center transition-all
      bg-neutral-800 rounded-sm
      ${isHidden ? hidden : notHidden}`}
    >
      <div className="h-1 bg-green-700 w-full" />
      <p>Email Copied!</p>
    </div>
  );
}
