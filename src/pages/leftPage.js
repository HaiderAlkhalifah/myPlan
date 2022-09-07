
import Navbaru from "../components/leftPage/navbar";
import Termsq from "../components/leftPage/termSq";
export default function LeftPage() {
  return (
    <div className="w-full overflow-y-auto scrollbar-hide bg-b2 h-screen p-6 gap-4 grid justify-items-center ">
      <Navbaru />
      <hr className="justify-self-start rounded-full bg-textP border w-[1000px]"></hr>
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
