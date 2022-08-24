import SearchCard from "../components/rightPage/searchCard";
import MajorSelect from "../components/rightPage/majorSelect";
export default function RightPage() {
  return (
    <section
      className="container rounded-3xl grid  justify-items-center
     h-screen bg-grayb w-[400px] p-2 "
    >
      <MajorSelect />
      <hr className=" border-textP w-[300px] rounded-full my-8" />
      <SearchCard />
    </section>
  );
}
