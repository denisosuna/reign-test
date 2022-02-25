import * as React from "react";
import { newsTypes } from "../../constants/types/news.type";
import HeartFill from "../icons/heart/HeartFill";
import WatchIcon from "../icons/WatchIcon";
import { dateFormater } from "../../helpers/util";

import "./card.css";

const Card: React.FC<newsTypes> = ({
  author,
  story_title,
  story_url,
  created_at,
}) => {
  const onHearPress = () => {
    if (localStorage.favoriteNews) {
      const favoriteNews: newsTypes[] = JSON.parse(localStorage.favoriteNews);
      if (
        favoriteNews.find((item) => item.story_url === story_url) === undefined
      ) {
        favoriteNews.push({
          author,
          story_title,
          story_url,
          created_at,
        });
        localStorage.setItem("favoriteNews", JSON.stringify(favoriteNews));
      }
    } else {
      localStorage.setItem(
        "favoriteNews",
        JSON.stringify([
          {
            author,
            story_title,
            story_url,
            created_at,
          },
        ])
      );
    }
  };
  return (
    <div className="cardContainer">
      <a
        className="cardContent"
        href={story_url}
        target="_blank"
        rel="noreferrer"
      >
        <p className="newsHeader">
          <WatchIcon /> {dateFormater(created_at)} By {author}
        </p>
        <p className="newstitle">{story_title}</p>
      </a>
      <div className="cardIconContainer">
        <span onClick={onHearPress}>
          <HeartFill />
        </span>
      </div>
    </div>
  );
};

export default Card;
