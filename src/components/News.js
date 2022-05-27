import React, { Component } from "react";
import NewsItem from "./NewsItem";
import "./css/news.css";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
      loading: true,
      pageToLoad: 0,
    };
  }

  componentDidMount() {
    this.props.setProgress(0);
    this.getNews();
    console.log(process.env.REACT_API_KEY);
  }

  getNews = async () => {
    this.props.setProgress(10);
    this.setState({ loading: true });
    let response = await fetch(
      `https://newsdata.io/api/1/news?apikey=pub_764121485abe0c1907f83110757006d8d540&page=${this.state.pageToLoad}&country=in&language=en&category=${this.props.category}`
    );
    this.props.setProgress(25);
    let news = await response.json();
    // console.log(news);
    this.props.setProgress(50);
    this.updateState(news);
  };

  updateState = (news) => {
    this.setState({
      loading: false,
      articles: this.state.articles.concat(news.results),
      pageToLoad: news.nextPage,
    });
    this.props.setProgress(100);
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  limitString = (string) => {
    if (!string) return;
    return string.slice(0, 200).concat("...");
  };

  render() {
    return (
      <div className="news">
        <h1>
          News Monkey - {this.capitalizeFirstLetter(this.props.category)}{" "}
          Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.getNews}
          hasMore={this.state.pageToLoad != null && !this.state.loading}
          loader={<Spinner />}
        >
          <div className="news-container">
            {this.state.articles.map((element) => {
              if (element.image_url) {
                return (
                  <NewsItem
                    title={element.title}
                    description={this.limitString(element.description)}
                    imageUrl={element.image_url}
                    key={element.link}
                    newsUrl={element.link}
                    author={element.creator ? element.creator : "Unknown"}
                    date={element.pubDate}
                  />
                );
              }
            })}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}
