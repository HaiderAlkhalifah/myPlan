export default function LeftPage() {
  return (
    <div className="w-full overflow-y-auto grid grid-cols-3 justify-items-center items-center bg-background h-screen p-6 gap-4 ">
      <div className="container bg-zinc-800 shadow-md m-1 p-2 h-auto rounded-3xl items-start justify-items-center">
        <div className="text-bold text-center text-white text-xl">Freshman</div>
       <hr className="border-zinc-400 m-4"></hr>
        <div className="grid grid-cols-2 content-evenly">
          <div className=" text-bold text-white justify-self-center ">1st</div>
          <div className=" text-bold text-white justify-self-center">2nd</div>
        </div>
        <div className="p-2  grid grid-cols-2 justify-items-center items-center  ">
          <div className="container shadow-inner bg-zinc-700 w-[150px] h-[400px] rounded-3xl content-center"></div>
          <div className="container shadow-inner bg-zinc-700 w-[150px] h-[400px] rounded-3xl content-center"></div>
        </div>
      </div>
    </div>
  );
}
