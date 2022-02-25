import { useEffect, useState } from "react";
import { fetchData } from "../constants/types/news.type";
import { getNews } from "../services/hackerNews";
const INITIAL_PAGE = 0;
const initial_data = {
  hits: [],
  hitsPerPage: 0,
  nbHits: 0,
  nbPages: 0,
  page: INITIAL_PAGE,
};

export function UseNews({ keyword } = { keyword: null }) {
  const [News, setNews] = useState<fetchData>(initial_data);
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  let keywordToUSe = keyword || localStorage.lastKeyword || "react";

  useEffect(() => {
    setLoading(true);
    getNews({ keyword: keywordToUSe }).then((news) => {
      setNews(news);
      setLoading(false);
      localStorage.lastKeyword = keywordToUSe;
    });
  }, [keyword, keywordToUSe, setNews]);

  useEffect(() => {
    if (page !== INITIAL_PAGE) {
      setLoadingNextPage(true);
      getNews({ keyword: keywordToUSe, page }).then((NewNews) => {
        setNews(NewNews);
        setLoadingNextPage(false);
        localStorage.lastKeyword = keywordToUSe;
      });
    }
  }, [keyword, page, keywordToUSe, setNews]);

  return { loading, loadingNextPage, News, setPage, page };
}
