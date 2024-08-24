export type TitleData = {
  content: string;
  priority: number;
};

export type LinkData = {
  name: string;
  url: string;
};

export type ImageData = {
  source: string;
  description: string;
};

export type DownloadData = {
  title: TitleData;
  texts: string[];
  links: LinkData[];
  image: ImageData;
};
