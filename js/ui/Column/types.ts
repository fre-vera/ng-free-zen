export type CategorieData = {
  name: string;
  links: LinkData[];
};

export type LinkData = {
  url: string;
  content: ContentData;
};

export type ContentData = {
  type: string;
  data: string;
};
