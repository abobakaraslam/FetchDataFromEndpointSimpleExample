//File: Comp.jsx

import { useEffect, useState } from "react";

function Comp() {
  const [newsData, setNewsData] = useState("txt");
  const [articles, setArticles] = useState([]);

  const getDataFromApi = async () => {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=e1512acaf2c048bfa4b39862800a611d";
    let data = await fetch(url); /* Must wait to get data */
    let parsedData = await data.json(); /* Must wait for data.json */
    console.log("received parseData: ", parsedData);
    console.log("parsedData Status: ", parsedData.status);
    //parsedData cannot be directly pass to JSX, Therefore need state
    console.log("componentDidMount is called");

    console.log("out dated newsData: ", newsData); // display newsData=txt

    setNewsData(parsedData.status);
    setArticles(parsedData.articles);

    console.log("current newsData: ", newsData); // display newsData=txt, NOT Display updated value
  };

  useEffect(() => {
    getDataFromApi();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>APIs Data</h1>
      <p>state.newsDate</p>
      {newsData} {/* Display updated value as parseData.status */}
      <h1>News are below</h1>
      {articles.map((element) => {
        // As articles is array, therefore, use loop to display
        return (
          <div key={element.id}>
            <p>News Title: {element.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Comp;
