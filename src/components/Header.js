import React, { Component } from "react";
import "./css/header.css";
import { Link } from "react-router-dom";

export default class Header extends Component {
  constructor() {
    super();

    this.state = {
      active: false,
    };
  }

  toggleNav = () => {
    this.setState({ active: !this.state.active });
  };

  componentDidUpdate() {
    if (this.state.active) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }

  render() {
    return (
      <div className="header">
        <div className="header-container">
          <div className="nav">
            <nav>
              <Link to="/">
                <div className="logo">News Monkey</div>
              </Link>
              <ul className={`${this.state.active ? "nav-active" : ""}`}>
                <li>
                  <Link to="/"> Home</Link>
                </li>
                <li>
                  <Link to="/business"> Business</Link>
                </li>
                <li>
                  <Link to="/entertainment"> Entertainment</Link>
                </li>
                <li>
                  <Link to="/health"> Health</Link>
                </li>
                <li>
                  <Link to="/science"> Science</Link>
                </li>
                <li>
                  <Link to="/sports"> Sports</Link>
                </li>
                <li>
                  <Link to="/technology"> Technology</Link>
                </li>
              </ul>
              <div
                className="burger"
                onClick={() => {
                  this.toggleNav();
                }}
              >
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
