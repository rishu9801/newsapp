import "./App.scss";
import Nav from "./components/Nav";
import axios from "axios";
import { useState, useEffect } from "react";
import Cards from "./components/Cards";

function App() {
  const [latestNews, setLatestNews] = useState();
  const apiKey = "41ef77f8822646adafd9720511a39792";
  useEffect(() => {
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`)
      .then((res) => setLatestNews(res.data));
  }, []);

  function handleClick(data) {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${data}&from=2022-01-12&sortBy=popularity&apiKey=${apiKey}`
      )
      .then((res) => setLatestNews(res.data));
  }

  if (!latestNews) return null;
  return (
    <div className="section pt-4">
      <Nav handleClick={handleClick}></Nav>
      <div className="section">
        <div className="columns is-multiline">
          {latestNews.articles.map((news, i) => {
            return (
              <div className="column is-3" key={i}>
                <Cards news={news}></Cards>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
