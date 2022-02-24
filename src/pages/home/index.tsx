import React from "react";
import Card from "../../components/card";
import PageToggle from "../../components/selectPageToggle";
import { UseNews } from "../../hooks/useNews";
import "./home.css";

const home = () => {
  const {News}=UseNews();
  console.log(News);
  return <div className="main">
    <PageToggle />
    <Card author="author" story_title="story_title" story_url="story_url" created_at="created_at" />
    
    
    </div>;
};

export default home;
