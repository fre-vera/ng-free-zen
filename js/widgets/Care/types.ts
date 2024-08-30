export type TitleData = {
  content: string;
  priority: number;
};

export type ImageData = {
  source: string;
  description: string;
};

export type СareData = {
  title: TitleData;
  texts: string[];
  image: ImageData;
};
