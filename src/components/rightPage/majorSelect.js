export default function MajorSelect() {
  return (
    <div className="grid justify-items-center text-center">
      <label className="my-4 text-textP justify-self-start ml-4  font-bold">
        select your major
      </label>
      <select
        className="rounded-xl p-2 w-[300px] h-[40px] mx-4 shadow-sm focus:border-none focus:outline-none focus:shadow-md hover:shadow-md duration-500 "
        id="majors"
      >
        <option value="1">Math</option>
        <option value="2">ICS</option>
        <option value="3">COE</option>
      </select>
    </div>
  );
}