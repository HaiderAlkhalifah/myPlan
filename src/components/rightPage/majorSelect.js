export default function MajorSelect() {
  return (
    <div className="grid justify-items-center text-center">
      <label className="my-4 text-textP justify-self-start ml-4  font-bold">
        Select your major
      </label>
      <select
        className=" bg-white text-textP rounded-xl p-2 w-[300px] h-[40px] mx-4 shadow-soft-card focus:border-none focus:outline-none hover:shadow-3xl focus:shadow-3xl  duration-500 "
        id="majors"
      >
        <option value="1">Math</option>
        <option value="2">ICS</option>
        <option value="3">COE</option>
      </select>
    </div>
  );
}
