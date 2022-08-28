import Termsq from "../components/leftPage/termSq";
export default function LeftPage() {
  return (
    <div className="w-full overflow-y-auto scrollbar-hide bg-b2 h-screen p-6 gap-4 grid justify-items-center ">
      <div className="container flex items-between mb-8">
        <div>MyPlan</div>
        <div className="container shadow-sm p-2 justify-items-center bg-white">
          <div>total cridts</div>
          <div>143</div>
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
