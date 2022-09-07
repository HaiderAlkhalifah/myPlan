export default function Navbaru() {
  return (
    <div className="container flex justify-between mb-3">
      <div className="container flex items-center w-full h-auto p-2 justify-between bg-white text-textP">
        <h1 className="text-bold text-7xl">MyPlan</h1>

        <div className="grid grid-cols-3 rounded-lg px-9 justify-items-center shadow-inner bg-greyb container h-auto w-auto p-3">
          <div className=" grid justify-items-center m-2">
            <div className="text-5xl text-bold">143</div>
            <div className="text-md">CH Completed</div>
          </div>
          <div className=" h-auto border bg-textP border-y-2 b"></div>
          <div className=" grid justify-items-center m-2">
            <div className="text-5xl text-bold">143</div>
            <div className="text-md">CH Remaining</div>
          </div>
        </div>
      </div>
    </div>
  );
}
