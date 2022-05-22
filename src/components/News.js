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
      totalResults: 0,
      page: 1,
      hasMore: true,
      pageToLoad: 1,
    };
  }

  componentDidMount() {
    this.props.setProgress(0);
    this.getNews();
  }

  getNews = async () => {
    this.props.setProgress(10);
    this.setState({ page: this.state.page + 1 });
    let response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_API_KEY}&page=${this.state.page}&pagesize=${this.props.pageSize}`
    );
    this.props.setProgress(25);
    let news = await response.json();
    console.log(news);
    this.props.setProgress(50);
    this.updateState(news);
  };

  updateState = (news) => {
    this.setState({
      articles: this.state.articles.concat(news.articles),
      totalResults: news.totalResults,
      loading: false,
    });
    this.setState({
      hasMore: this.state.articles.length !== this.state.totalResults,
      pageToLoad:
        Math.ceil(this.state.totalResults / this.props.pageSize) -
        this.state.page,
    });
    this.props.setProgress(100);
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  render() {
    return (
      <div className="news">
        <h1>
          News Monkey - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
          Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.page}
          next={this.getNews}
          hasMore={this.state.pageToLoad > 0 && !this.state.loading}
          loader={<Spinner />}
        >
          <div className="news-container">
            {this.state.articles.map((element) => {
              return (
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  key={element.url}
                  newsUrl={element.url}
                  author={element.author ? element.author : "Unknown"}
                  date={element.publishedAt}
                />
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}
