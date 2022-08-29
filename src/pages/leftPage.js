import Termsq from "../components/leftPage/termSq";
export default function LeftPage() {
  return (
    <div className="w-full overflow-y-auto scrollbar-hide bg-b2 h-screen p-6 gap-4 grid justify-items-center ">
      <div className="container flex justify-between items-center mb-3">
        <div className="container flex items-center w-full shadow-sm rounded-xl h-[90px] p-2 justify-between bg-purp text-white">
        <h1 className="text-bold text-4xl">MyPlan</h1>

          <div>143</div>
          <div className="">CH remaining</div>
        </div>
      </div>
      <div className="w-full grid grid-cols-4 justify-items-center gap-4 items-center">
        <Termsq />
        <Termsq />
        <Termsq />
        <Termsq />
        <Termsq />
        <Termsq />
        <Termsq />
      </div>

      <div>footer</div>
    </div>
  );
}
