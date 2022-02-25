import React from "react";
import Select from "../../components/buttons/select";
import CardContainer from "../../components/cardContainer";
import PageToggle from "../../components/selectPageToggle";
import { UseNews } from "../../hooks/useNews";
import "./home.css";

const home = () => {
  const {News}=UseNews();

  const {hits,page,nbPages,hitsPerPage}=News;

  console.log(hits);
  return <div className="main">
    <PageToggle />
    <Select/>
    <CardContainer data={hits} />
    
    
    </div>;
};

export default home;
