import React, { useState } from "react";
import Select from "../../components/buttons/select";
import CardContainer from "../../components/cardContainer";
import PageToggle from "../../components/selectPageToggle";
import { UseNews } from "../../hooks/useNews";
import "./home.css";

const Home = () => {
  const [activeTab, setActiveTab] = useState(true);
  const [keyWord, setKeyWord] = useState<string>("");
  const { News } = UseNews(keyWord);
  const { hits, page, nbPages, hitsPerPage } = News;

  return (
    <div className="main">
      <PageToggle active={activeTab} setActive={setActiveTab} />
      <Select keyWord={keyWord} setKeyWord={setKeyWord} />
      <CardContainer currentView={activeTab} newsData={hits} />
    </div>
  );
};

export default Home;
