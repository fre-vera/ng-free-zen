type LangData = {
  name: string;
  key: string;
};

type NavItemData = {
  name: string;
  key: string;
};

export type HeaderData = {
  langs: LangData[];
  navigation: NavItemData[];
};
