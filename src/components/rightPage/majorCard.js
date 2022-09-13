export default function MajorCard() {
  return (
    <div
      className="grid grid-rows-2 content-between my-2 h-auto w-auto text-white bg-[#224C63] m-2 p-2 rounded-lg shadow-sm
    hover:shadow-xl hover:bg-textP duration-300"
    >
      <div className="justify-self-left text-bold">Math101</div>
      <div className=" flex justify-between">
        <div className="text-left">Lab</div>
        <div className=" text-right">2</div>
      </div>
    </div>
  );
}
