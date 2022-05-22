import React, { Component } from "react";
import "./css/newsItem.css";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date } = this.props;
    return (
      <div className="news-item">
        <div className="news-item-container">
          <div className="img">
            <img
              src={
                !imageUrl
                  ? "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
                  : imageUrl
              }
              alt="newsImage"
            />
          </div>
          <div className="news-intor">
            <h3 className="news-title">{title}</h3>
            <div>
              <p className="news-decreption">{description} </p>
              <p className="news-date">
                <small>
                  By {author} on {new Date(date).toLocaleString()}
                </small>
              </p>
              <a
                className="read-more"
                href={newsUrl}
                target="_blank"
                rel="noreferrer"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
