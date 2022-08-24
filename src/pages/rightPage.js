import SearchCard from "../components/searchCard";
import MajorSelect from "../components/majorSelect";
export default function RightPage() {
  return (
    <section
      className="container grid  justify-items-center
     h-screen bg-grayb w-[550px] p-2 "
    >
      <MajorSelect />
      <hr class=" border-textP w-[300px] rounded-full my-8" />
      <SearchCard />
    </section>
  );
}
