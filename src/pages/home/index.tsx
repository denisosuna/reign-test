import React from "react";
import Card from "../../components/card";
import "./home.css";

const home = () => {
  return <div className="main"><Card author="author" story_title="story_title" story_url="story_url" created_at="created_at" /></div>;
};

export default home;
