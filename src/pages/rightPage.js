import SearchCard from "../components/rightPage/searchCard";
import MajorSelect from "../components/rightPage/majorSelect";
export default function RightPage() {
  return (
    <section
      className="container rounded-bl-3xl rounded-tl-3xl grid  justify-items-center items-start
     h-screen bg-greyb w-[400px] p-2 "
    >
      <MajorSelect />
      <hr className=" h-2 border-textP w-[300px] p1 rounded my-4" />
      <SearchCard />
  </section>
  );
}
