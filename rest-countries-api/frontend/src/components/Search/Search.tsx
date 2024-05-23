import { ChangeEvent } from "react";
import SearchIcon from "../../assets/search-outline.svg";

interface SearchProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Search = ({ search, setSearch }: SearchProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.trim());
  };

  return (
    <label className="flex justify-center items-center gap-6 pl-8 py-4 bg-white dark:bg-dark-blue w-full max-w-md rounded-md shadow-md">
      <img src={SearchIcon} alt="🔍" className="w-5 h-5 dark:invert" />
      <input
        type="text"
        placeholder="Search for a country..."
        className="w-full focus:outline-none dark:bg-dark-blue dark:text-white"
        value={search}
        onChange={handleChange}
      />
    </label>
  );
};

export default Search;
