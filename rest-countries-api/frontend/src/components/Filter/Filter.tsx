import { ChangeEvent, FC } from "react";

interface FilterProps {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const Filter: FC<FilterProps> = ({ filter, setFilter }) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  return (
    <label className="h-full w-full max-w-52 rounded-md bg-white dark:bg-dark-blue p-4 shadow-md">
      <select
        className="h-full w-full focus:outline-none dark:bg-dark-blue dark:text-white"
        onChange={handleChange}
        value={filter}
      >
        <option value="">
          Filter by Region
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </label>
  );
};

export default Filter;
