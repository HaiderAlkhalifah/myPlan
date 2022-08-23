export default function MajorSelect() {
  return (
    <div className="grid grid-cols-1 text-center">
      <label className="my-4 text-textP text-left ml-4  font-bold">
        select your major
      </label>
      <select className="rounded  h-[30px] mx-4 shadow-sm focus:border-none  " id="cars">
        <option value="1">Math</option>
        <option value="2">ICS</option>
        <option value="3">COE</option>
      </select>
    </div>

  );
}
