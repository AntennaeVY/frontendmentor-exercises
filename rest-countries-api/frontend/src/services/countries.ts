import { APIResponse } from "../api/types";
import { CardData, CardDetailsData } from "../core/types";

const BASE_URL = "https://restcountries.com/v3.1";

export async function getCountries(): Promise<CardData[]> {
  const fetchData = await fetch(`${BASE_URL}/all`);
  const data = (await fetchData.json()) as APIResponse[];

  if (!fetchData.ok) return Promise.reject();

  const countries = data.map((country) => {
    return {
      id: country.cca2,
      capital: country.capital?.[0] || "",
      country: country.name.common,
      flag: country.flags.svg,
      population: country.population,
      region: country.region,
    };
  });

  return countries;
}

export async function getCountryDetails(
  country: string,
): Promise<CardDetailsData> {
  const fetchData = await fetch(`${BASE_URL}/name/${country}`);
  const data = (await fetchData.json()) as APIResponse[];

  if (!fetchData.ok) return Promise.reject();

  const mappedResponse: CardDetailsData[] = data.map((details) => {
    return {
      flag: details.flags.svg,
      name: details.name.common,
      nativeName:
        details.name.nativeName?.[Object.keys(details.name.nativeName)[0]]
          .common || details.name.common,
      population: details.population,
      region: details.region,
      subRegion: details.subregion || "",
      capital: details.capital?.[0] || "",
      topLevelDomain: details.tld?.[0] || "",
      currencies: Object.values(details.currencies || {}).map((x) => x.name),
      languages: Object.values(details.languages || {}),
      borders: details.borders || [],
    };
  });

  return mappedResponse[0];
}
