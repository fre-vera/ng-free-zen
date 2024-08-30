export type LogoData = {
  lightSource: string;
  darkSource: string;
};

export type BrandData = {
  name: string;
  logo: LogoData;
};

export type ClientsData = {
  brands: BrandData[];
};
