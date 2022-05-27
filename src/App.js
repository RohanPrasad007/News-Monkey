import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      progress: 0,
    };
  }

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <Router>
          <LoadingBar color="#0d6efd" progress={this.state.progress} />
          <Header />
          <Routes>
            <Route
              exact
              path="/business"
              element={
                <News
                  pageSize={12}
                  country="in"
                  category="business"
                  setProgress={this.setProgress}
                  key="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  pageSize={12}
                  country="in"
                  category="entertainment"
                  setProgress={this.setProgress}
                  key="entertainment"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  pageSize={12}
                  country="in"
                  category="health"
                  setProgress={this.setProgress}
                  key="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  pageSize={12}
                  country="in"
                  category="science"
                  setProgress={this.setProgress}
                  key="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  pageSize={12}
                  country="in"
                  category="sports"
                  setProgress={this.setProgress}
                  key="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  pageSize={12}
                  country="in"
                  category="technology"
                  setProgress={this.setProgress}
                  key="technology"
                />
              }
            />
            <Route
              exact
              path="/"
              element={
                <News
                  pageSize={12}
                  country="in"
                  category="top"
                  setProgress={this.setProgress}
                  key="general"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
