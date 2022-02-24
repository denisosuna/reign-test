import * as React from "react";
import HeartFill from "../icons/heart/HeartFill";
import WatchIcon from "../icons/WatchIcon";
import "./card.css";
interface CardProps {
  author: string;
  story_title: string;
  story_url: string;
  created_at: string;
}

const Card: React.FC<CardProps> = ({
  author,
  story_title,
  story_url,
  created_at,
}) => {
  return (
    <div className="cardContainer">
      <div className="cardContent">
        <a href={story_url} target="_blank" rel="noreferrer">
          <p>
            <WatchIcon /> {created_at} By {author}
          </p>
          <p>{story_title}</p>
        </a>
      </div>
      <div className="cardIcon"><HeartFill/></div>
    </div>
  );
};

export default Card;
