import { useState } from "react";
import { Oval } from "react-loader-spinner";
import Card from "../../components/Card/Card";
import Filter from "../../components/Filter/Filter";
import Search from "../../components/Search/Search";
import { useCountries } from "../../hooks/countries";

const CardListing = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const { isLoading, countries } = useCountries({ search, filter });

  return (
    <>
      <div className="flex items-center justify-between gap-8 px-20 py-10">
        <Search search={search} setSearch={setSearch} />
        <Filter filter={filter} setFilter={setFilter} />
      </div>

      {isLoading ? (
        <div className="h-full px-20 flex justify-center items-center">
          <Oval
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="oval-loading"
          />
        </div>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(256px,1fr))] gap-11 px-20 pb-14">
          {countries.map((data) => (
            <Card data={data} key={data.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default CardListing;
