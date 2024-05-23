import { Oval } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router";
import ArrowIcon from "../../assets/arrow-back-outline.svg";
import { useCountryDetails } from "../../hooks/countries";
import NotFound from "../NotFound/NotFound";

const CardDetails = () => {
  const navigate = useNavigate();
  const params = useParams() as { country: string };
  const { isLoading, countryDetails } = useCountryDetails(params.country);

  const handleClick = () => {
    navigate("/");
  };

  if (!isLoading && !countryDetails) return <NotFound />;

  if (isLoading)
    return (
      <div className="h-full px-20 flex justify-center items-center py-10">
        <Oval height="80" width="80" color="#4fa94d" ariaLabel="oval-loading" />
      </div>
    );

  return (
    <>
      {countryDetails && (
        <div className="px-20 py-10">
          <label className="flex w-fit cursor-pointer items-center gap-2 rounded-md bg-white dark:bg-dark-blue px-8 py-2 shadow-lg">
            <img src={ArrowIcon} alt="🔙" className="h-5 dark:invert" />
            <button onClick={handleClick} className="dark:text-white">
              Back
            </button>
          </label>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-20 pt-16">
            <img src={countryDetails.flag} alt="" className="" />
            <div className="dark:text-white">
              <h1 className="text-3xl font-bold">{countryDetails.name}</h1>
              <div className="flex gap-16 py-5">
                <div className="flex flex-col gap-2">
                  <span>
                    <strong>Native Name: </strong>
                    {countryDetails.nativeName}
                  </span>
                  <span>
                    <strong>Population: </strong>
                    {countryDetails.population.toLocaleString("en-US")}
                  </span>
                  <span>
                    <strong>Region: </strong>
                    {countryDetails.region}
                  </span>
                  <span>
                    <strong>Sub Region: </strong>
                    {countryDetails.subRegion}
                  </span>
                  <span>
                    <strong>Capital: </strong>
                    {countryDetails.capital}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span>
                    <strong>Top Level Domain: </strong>
                    {countryDetails.topLevelDomain}
                  </span>
                  <span>
                    <strong>Currencies: </strong>
                    {countryDetails.currencies.join(", ")}
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <strong>Languages: </strong>
                {countryDetails.languages.map((lang) => (
                  <div
                    key={lang}
                    className="rounded-md bg-white dark:bg-dark-blue px-6 py-1 shadow-md"
                  >
                    {lang}
                  </div>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-4">
                <strong>Borders: </strong>
                {countryDetails.borders.map((border) => (
                  <div
                    key={border}
                    className="rounded-md bg-white dark:bg-dark-blue px-6  shadow-md py-1"
                  >
                    {border}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardDetails;
