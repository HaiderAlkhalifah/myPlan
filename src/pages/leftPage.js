import Termsq from "../components/leftPage/termSq";
export default function LeftPage() {
  return (
    <div className="w-full overflow-y-auto grid grid-cols-3 justify-items-center items-center scrollbar-hide bg-zinc-900 h-screen p-6 gap-4 ">
      <Termsq/>
      <Termsq/>
      <Termsq/>
      <Termsq/>
  
    </div>
  );
}
