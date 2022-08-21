import SearchCard from "../components/searchCard";
import MajorSelect from "../components/majorSelect";

export default function RightPage() {
  return (
    <div className="container h-screen bg-grayb w-[600px] p-2 ">
      <MajorSelect />
      <hr className="rounded w-30 m-8 bg-textP" />
        <SearchCard />
    </div>
  );
}
