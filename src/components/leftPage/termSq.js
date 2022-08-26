import MajorCard from "../rightPage/majorCard";
export default function Termsq() {
  return (
    <div className="container bg-white shadow-xl m-1 py-4  h-auto rounded-xl items-start justify-items-center">
      <div className="text-bold text-center text-textP text-xl">Freshman</div>
      <hr className="border-textP m-4"></hr>
      <div className="grid grid-cols-2 content-evenly">
        <div className=" text-bold text-textP justify-self-center ">1st</div>
        <div className=" text-bold text-textP justify-self-center">2nd</div>
      </div>
      <div className="p-2  grid grid-cols-2 justify-items-center items-center  ">
        <div className="container shadow-inner px-2 py-2  bg-greyb w-[120px] h-[500px] rounded-xl content-center">
          <MajorCard />
          <MajorCard />
          <MajorCard />
          <MajorCard />
          <MajorCard />
        </div>
        <div className="container shadow-inner  bg-greyb w-[120px] h-[500px] rounded-xl content-center"></div>
      </div>
      <div className="grid grid-cols-2 content-evenly">
        <div className=" text-bold text-textP justify-self-center ">18</div>
        <div className=" text-bold text-textP justify-self-center">15</div>
      </div>
    </div>
  );
}
