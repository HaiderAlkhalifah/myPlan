import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function SearchCard() {
  return (
    <section className=" container h-[600px] mx-4 p-4 rounded-xl bg-whiteb shadow-md w-auto align-middle">
      <form className="shadow-sm rounded-xl">
        {" "}
        <FontAwesomeIcon
          icon={faSearch}
          color="grey"
          flip="horizontal"
          className="mr-2 mx-2  "
        />
        <input
          form="novalidatedform"
          id="search"
          placeholder="Search Courses"
          className="rounded-md p-1 border-none outline-transparent"
        />
      </form>
    </section>
  );
}
