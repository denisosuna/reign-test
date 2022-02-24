import { useEffect, useState } from "react";
import { getNews } from "../services/hackerNews";

const INITIAL_PAGE = 0;

export function UseNews({ keyword } = { keyword: null }) {
  const [ News, setNews ] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  let keywordToUSe = keyword || localStorage.lastKeyword || "react";

  useEffect(() => {
    setLoading(true);
    //Recuperamos la keyword del localStorage
    getNews({ keyword: keywordToUSe }).then((news) => {
      setNews(news);
      setLoading(false);
      localStorage.lastKeyword = keywordToUSe;
    });
  }, [keyword, keywordToUSe, setNews]);

  useEffect(() => {
    if (page !== INITIAL_PAGE) {
      setLoadingNextPage(true);
      getNews({ keyword: keywordToUSe, page }).then((news) => {
        setNews((prevNews) => prevNews.concat(news));
        setLoadingNextPage(false);
        localStorage.lastKeyword = keywordToUSe;
      });
    }
  }, [keyword, page, keywordToUSe, setNews]);

  return { loading, loadingNextPage, News, setPage, page };
}
