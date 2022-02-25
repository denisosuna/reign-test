import React, { useEffect, useRef, useState, useCallback } from "react";
import Select from "../../components/buttons/select";
import CardContainer from "../../components/cardContainer";
import PageToggle from "../../components/selectPageToggle";
import { UseNews } from "../../hooks/useNews";
import useNearScreen from "../../hooks/useNearScreen";
import Spinner from "../../components/spinner";

import debounce from "lodash.debounce";
import "./home.css";

const Home = () => {
  const [activeTab, setActiveTab] = useState(true);
  const [keyWord, setKeyWord] = useState<string>("");
  const { loading, News, setPage } = UseNews(keyWord);
  const { hits } = News;
  const externalRef = useRef<HTMLDivElement>(null);
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceNextPage = useCallback(
    debounce(() => setPage((prev) => prev + 1), 2000),
    []
  );
  useEffect(function () {
    if (isNearScreen) debounceNextPage();
  });

  return (
    <div className="main">
      <PageToggle active={activeTab} setActive={setActiveTab} />
      <Select keyWord={keyWord} setKeyWord={setKeyWord} />
      <CardContainer currentView={activeTab} newsData={hits} />
      {loading && <Spinner />}
      <div ref={externalRef} />
    </div>
  );
};

export default Home;
