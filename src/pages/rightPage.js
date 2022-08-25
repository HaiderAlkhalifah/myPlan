import SearchCard from "../components/rightPage/searchCard";
import MajorSelect from "../components/rightPage/majorSelect";
export default function RightPage() {
  return (
    <section
      className="container rounded-bl-3xl rounded-tl-3xl grid  justify-items-center
     h-screen bg-zinc-800 w-[400px] p-2 "
    >
      <MajorSelect />
      <hr className=" h-2 border-zinc-700 w-[300px] p1 rounded-full my-8" />
      <SearchCard />
    </section>
  );
}
