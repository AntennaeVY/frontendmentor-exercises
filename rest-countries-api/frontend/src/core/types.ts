export type Nullable<T> = T | null;

export interface CardData {
  id: string;
  flag: string;
  country: string;
  population: number;
  region: string;
  capital: string;
}

export interface CardDetailsData {
  flag: string;
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subRegion: string;
  capital: string;
  topLevelDomain: string;
  currencies: string[];
  languages: string[];
  borders: string[];
}
