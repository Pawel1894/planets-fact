export type TPlanet = {
  name: string;
  overview: TOverview;
  structure: TOverview;
  geology: TOverview;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: TImages;
};

export type TImages = {
  planet: string;
  internal: string;
  geology: string;
};

export type TOverview = {
  content: string;
  source: string;
};
