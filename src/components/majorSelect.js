export default function MajorSelect() {
  return (
    <div className="grid justify-items-center text-center">
      <label className="my-4 text-textP text-left ml-4  font-bold">
        select your major
      </label>
      <select
        className="rounded  w-[340px] h-[30px] mx-4 shadow-sm focus:border-none focus:outline-none  "
        id="majors"
      >
        <option value="1">Math</option>
        <option value="2">ICS</option>
        <option value="3">COE</option>
      </select>
    </div>
  );
}
