import * as React from "react";
import { newsTypes } from "../../constants/types/news.type";
import HeartFill from "../icons/heart/HeartFill";
import WatchIcon from "../icons/WatchIcon";
import "./card.css";

const Card: React.FC<newsTypes> = ({
  author,
  story_title,
  story_url,
  created_at,
}) => {
  return (
    <div className="cardContainer">
      <a
        className="cardContent"
        href={story_url}
        target="_blank"
        rel="noreferrer"
      >
        <p className="newsHeader">
          <WatchIcon /> {created_at} By {author}
        </p>
        <p className="newstitle">{story_title}</p>
      </a>
      <div className="cardIcon">
        <HeartFill />
      </div>
    </div>
  );
};

export default Card;
