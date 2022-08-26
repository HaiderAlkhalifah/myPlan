import MajorCard from "../rightPage/majorCard";
export default function Termsq() {
  return (
<div className="container bg-zinc-800 shadow-md m-1 py-4  h-auto rounded-3xl items-start justify-items-center">
        <div className="text-bold text-center text-white text-xl">Freshman</div>
       <hr className="border-zinc-400 m-4"></hr>
        <div className="grid grid-cols-2 content-evenly">
          <div className=" text-bold text-white justify-self-center ">1st</div>
          <div className=" text-bold text-white justify-self-center">2nd</div>
        </div>
        <div className="p-2  grid grid-cols-2 justify-items-center items-center  ">
          <div className="container shadow-inner px-2 py-2  bg-zinc-900 w-[150px] h-[500px] rounded-xl content-center">
          <MajorCard />
          <MajorCard/>
          <MajorCard/>
          <MajorCard/>
          <MajorCard/>

          </div>
          <div className="container shadow-inner  bg-zinc-900 w-[150px] h-[500px] rounded-xl content-center"></div>
        </div>
      </div>  );
}
