export default function MajorCard() {
  return (
    <div
      className="grid grid-rows-2 gap-4  content-between my-3 h-20 w-[240px] text-whiteb bg-reda m-2 p-2 rounded-lg shadow-md
    hover:shadow-xl duration-300"
    >
      <div className="justify-self-left text-bold">Math101</div>
      <div className=" flex justify-between">
        <div className="text-left">Lab</div>
        <div className=" text-right">2</div>
      </div>
    </div>
  );
}
