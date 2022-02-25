import React from "react";
import Card from "../card";
import { newsTypes } from "../../constants/types/news.type";

import "./CardContainer.css";

const CardContainer: React.FC<{
  newsData: Array<newsTypes>;
  currentView: boolean;
}> = ({ newsData, currentView }) => {
  const favoriteNews = localStorage.favoriteNews ? JSON.parse(localStorage.favoriteNews) : [];

  const dataByView: newsTypes[] = currentView ? newsData : favoriteNews;

  const cards = dataByView.map(
    ({ author, story_title, story_url, created_at }) =>
      author &&
      story_title &&
      story_url &&
      created_at && (
        <Card
          author={author}
          story_title={story_title}
          story_url={story_url}
          created_at={created_at}
        />
      )
  );

  return <div className="cardGridContainer">{cards}</div>;
};

export default CardContainer;
