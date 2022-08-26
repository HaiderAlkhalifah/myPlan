import MajorCard from "./majorCard";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function SearchCard() {
  return (
    <section className=" grid justify-items-center content-start container h-[600px] mx-4 p-4 rounded-xl bg-zinc-800 shadow-md w-[300px]   ">
      <div className="container mb-4 h-9 rounded-xl border shadow-inner  bg-zinc-700 border-none">
        {" "}
        <FontAwesomeIcon
          icon={faSearch}
          color="grey"
          flip="horizontal"
          className="mr-2 mx-2  "
        />
        <input
          type="text"
          placeholder="Search Courses"
          className="rounded-md p-1 border-none focus:outline-none bg-transparent text-white "
        />
      </div>
      <div className="overflow-y-scroll scrollbar-hide h-[500px] w-full">
        <MajorCard />
        <MajorCard />
        <MajorCard />
        <MajorCard />
      </div>
    </section>
  );
}
