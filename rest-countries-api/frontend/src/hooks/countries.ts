import { useEffect, useState } from "react";
import { CardData, CardDetailsData, Nullable } from "../core/types";
import { getCountries, getCountryDetails } from "../services/countries";

export function useCountries({ search = "", filter = "" }) {
  const [countries, setCountries] = useState<CardData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCountries()
      .then((countries) => {
        setCountries(countries);
      })
      .catch(() => {
        setCountries([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const filteredCountries = countries.filter((country) => {
    return (
      country.country.toLowerCase().startsWith(search.toLowerCase()) &&
      country.region.toLowerCase().startsWith(filter.toLowerCase())
    );
  });

  return { isLoading, countries: filteredCountries };
}

export function useCountryDetails(country: string) {
  const [countryDetails, setCountryDetails] =
    useState<Nullable<CardDetailsData>>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCountryDetails(country)
      .then((details) => {
        setCountryDetails(details);
      })
      .catch(() => {
        setCountryDetails(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [country]);

  return { isLoading, countryDetails };
}
