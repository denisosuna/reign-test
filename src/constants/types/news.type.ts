
export interface newsTypes {
  author: string;
  story_title: string;
  story_url: string;
  created_at: string;
}

export type fetchData = {
  hits: Array<newsTypes>;
  hitsPerPage: number;
  nbHits: number;
  nbPages: number;
  page: number;
};

export type InitialFetchData = {
  news:fetchData;
  
};
