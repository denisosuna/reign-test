import * as React from "react";
import Card from "../card";
import { newsTypes } from "../../constants/types/news.type";


import "./CardContainer.css";


const CardContainer: React.FC<{data:Array<newsTypes>}> = ({data}) => {
  console.log(data);

 const cards = data.map((item) => 
    <Card
      author={item.author}
      story_title={item.story_title}
      story_url={item.story_url}
      created_at={item.created_at}
    />
 );

  return <div className="cardGridContainer">{cards}</div>;
};

export default CardContainer;
