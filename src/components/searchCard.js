import MajorCard from "./majorCard";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function SearchCard() {
  return (
    <section className=" grid justify-items-center content-start container h-[600px] mx-4 p-4 rounded-xl bg-whiteb shadow-md w-[340px] ">
      <div className="container h-9 rounded-xl border border-textP shadow-sm">
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
          className="rounded-md p-1 border-none  focus:outline-none "
        />
      </div>

      <MajorCard />
    </section>
  );
}
