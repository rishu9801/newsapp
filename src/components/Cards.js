import React from "react";

const Cards = (props) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={props.news.urlToImage} alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <h4 className="title is-4">{props.news.title}</h4>

        <div className="content">
          {props.news.description}
          <br />
          <a
            className="button is-small is-info"
            href={props.news.url}
            target="_blank"
          >
            Read More
          </a>
        </div>
        <time dateTime="2016-1-1">{props.news.publishedAt}</time>
      </div>
    </div>
  );
};

export default Cards;
