export type LogoData = {
  lightSource: string;
  darkSource: string;
};

export type BrandFromAPI = {
  name: string;
  logo: LogoData;
};

export type ClientsData = {
  brands: BrandFromAPI[];
};
