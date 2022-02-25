import { useEffect, useState } from "react";
import { fetchData } from "../constants/types/news.type";
import { getNews } from "../services/hackerNews";
const INITIAL_PAGE = 0;
const initial_data = {
  hits: [],
  hitsPerPage: 0,
  nbHits: 0,
  nbPages: 0,
  page: 0,
};

export function UseNews( keyword: string ) {
  const [News, setNews] = useState<fetchData>(initial_data);
  
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  let keywordToUSe = keyword || localStorage.lastKeyword || "angular";

  useEffect(() => {
    setLoading(true);
    getNews({ keyword: keywordToUSe, page }).then((news) => {
      setNews(news);
      setLoading(false);
      localStorage.lastKeyword = keywordToUSe;
    });
  }, [keyword,page, keywordToUSe, setNews]);


  return { loading,  News, setPage, page };
}
