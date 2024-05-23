export interface APIResponse {
  name: Name;
  tld?: string[];
  cca2: string;
  ccn3?: string;
  cca3: string;
  cioc?: string;
  independent?: boolean;
  status: Status;
  unMember: boolean;
  currencies?: Currencies;
  idd: Idd;
  capital?: string[];
  altSpellings: string[];
  region: Region;
  subregion?: string;
  languages?: { [key: string]: string };
  translations: { [key: string]: Translation };
  latlng: number[];
  landlocked: boolean;
  borders?: string[];
  area: number;
  demonyms?: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini?: { [key: string]: number };
  fifa?: string;
  car: Car;
  timezones: string[];
  continents: Continent[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: StartOfWeek;
  capitalInfo: CapitalInfo;
  postalCode?: PostalCode;
}

export interface CapitalInfo {
  latlng?: number[];
}

export interface Car {
  signs?: string[];
  side: Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export enum Continent {
  Africa = "Africa",
  Antarctica = "Antarctica",
  Asia = "Asia",
  Europe = "Europe",
  NorthAmerica = "North America",
  Oceania = "Oceania",
  SouthAmerica = "South America",
}

export interface Currencies {
  mdl?: Aed;
  usd?: Aed;
  eur?: Aed;
  aud?: Aed;
  mzn?: Aed;
  brl?: Aed;
  cve?: Aed;
  xaf?: Aed;
  all?: Aed;
  nzd?: Aed;
  ngn?: Aed;
  gmd?: Aed;
  sos?: Aed;
  yer?: Aed;
  myr?: Aed;
  xcd?: Aed;
  gbp?: Aed;
  mga?: Aed;
  dzd?: Aed;
  mad?: Aed;
  mru?: Aed;
  pyg?: Aed;
  lkr?: Aed;
  zar?: Aed;
  kwd?: Aed;
  sll?: Aed;
  rwf?: Aed;
  syp?: Aed;
  hnl?: Aed;
  jod?: Aed;
  tvd?: Aed;
  npr?: Aed;
  lrd?: Aed;
  ggp?: Aed;
  djf?: Aed;
  fjd?: Aed;
  nok?: Aed;
  fkp?: Aed;
  kzt?: Aed;
  tmt?: Aed;
  bgn?: Aed;
  xpf?: Aed;
  bbd?: Aed;
  stn?: Aed;
  bnd?: Aed;
  sgd?: Aed;
  btn?: Aed;
  inr?: Aed;
  ars?: Aed;
  azn?: Aed;
  mxn?: Aed;
  gtq?: Aed;
  kes?: Aed;
  czk?: Aed;
  gip?: Aed;
  awg?: Aed;
  aed?: Aed;
  ssp?: Aed;
  xof?: Aed;
  shp?: Aed;
  bwp?: Aed;
  uzs?: Aed;
  tnd?: Aed;
  hkd?: Aed;
  mkd?: Aed;
  srd?: Aed;
  sbd?: Aed;
  uah?: Aed;
  bam?: BAM;
  irr?: Aed;
  cuc?: Aed;
  cup?: Aed;
  ern?: Aed;
  try?: Aed;
  php?: Aed;
  vuv?: Aed;
  bob?: Aed;
  ron?: Aed;
  khr?: Aed;
  zwl?: Aed;
  jep?: Aed;
  kgs?: Aed;
  gyd?: Aed;
  amd?: Aed;
  lbp?: Aed;
  dkk?: Aed;
  pgk?: Aed;
  zmw?: Aed;
  ttd?: Aed;
  pen?: Aed;
  sek?: Aed;
  sdg?: BAM;
  omr?: Aed;
  twd?: Aed;
  mnt?: Aed;
  tzs?: Aed;
  cad?: Aed;
  crc?: Aed;
  cny?: Aed;
  cop?: Aed;
  mmk?: Aed;
  rub?: Aed;
  kpw?: Aed;
  kyd?: Aed;
  byn?: Aed;
  szl?: Aed;
  pln?: Aed;
  chf?: Aed;
  ves?: Aed;
  pab?: Aed;
  wst?: Aed;
  fok?: Aed;
  thb?: Aed;
  bsd?: Aed;
  top?: Aed;
  bif?: Aed;
  bhd?: Aed;
  imp?: Aed;
  htg?: Aed;
  afn?: Aed;
  ils?: Aed;
  lyd?: Aed;
  uyu?: Aed;
  nio?: Aed;
  ckd?: Aed;
  lak?: Aed;
  kid?: Aed;
  ang?: Aed;
  jmd?: Aed;
  egp?: Aed;
  clp?: Aed;
  lsl?: Aed;
  ghs?: Aed;
  scr?: Aed;
  aoa?: Aed;
  bmd?: Aed;
  pkr?: Aed;
  sar?: Aed;
  krw?: Aed;
  etb?: Aed;
  bdt?: Aed;
  kmf?: Aed;
  bzd?: Aed;
  ugx?: Aed;
  huf?: Aed;
  isk?: Aed;
  tjs?: Aed;
  nad?: Aed;
  rsd?: Aed;
  mur?: Aed;
  mop?: Aed;
  mvr?: Aed;
  idr?: Aed;
  cdf?: Aed;
  vnd?: Aed;
  gnf?: Aed;
  gel?: Aed;
  mwk?: Aed;
  iqd?: Aed;
  jpy?: Aed;
  dop?: Aed;
  qar?: Aed;
}

export interface Aed {
  name: string;
  symbol: string;
}

export interface BAM {
  name: string;
}

export interface Demonyms {
  eng: Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt?: string;
}

export interface Idd {
  root?: string;
  suffixes?: string[];
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName?: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common: string;
}

export interface PostalCode {
  format: string;
  regex?: string;
}

export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Antarctic = "Antarctic",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
}

export enum StartOfWeek {
  Monday = "monday",
  Saturday = "saturday",
  Sunday = "sunday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
  UserAssigned = "user-assigned",
}
