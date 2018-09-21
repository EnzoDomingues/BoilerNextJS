import React, { Component } from 'react';
import { Link } from 'javascripts/routes/routes';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.addActiveClass = this.addActiveClass.bind(this);
    this.removeActiveClass = this.removeActiveClass.bind(this);
    this.state = {
      active: false
    };
  }

  addActiveClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  removeActiveClass() {
    this.setState({ active: false });
  }

  render() {
    return (
      <header
        className={
          this.state.active ? 'header ' + 'header--nav-active' : 'header'
        }
      >
        <div className="logo">
          <Link route="/">
            <a href=" # ">Logo</a>
          </Link>
        </div>
        <nav className="header-nav">
          <ul className="header-nav-menu">
            <li className="menu-item">
              <Link route="/">
                <a href=" # " onClick={() => this.removeActiveClass()}>
                  Home
                </a>
              </Link>
            </li>
            <li className="menu-item">
              <Link route="/posts">
                <a href=" # " onClick={() => this.removeActiveClass()}>
                  Batman
                </a>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-buttons">
          <button
            type="button"
            className="header-toggle"
            onClick={this.addActiveClass}
          >
            <span className="header-toggle-wrapper">
              <i className="header-toggle__bar" />
              <i className="header-toggle__bar" />
              <i className="header-toggle__bar" />
            </span>
          </button>
        </div>
      </header>
    );
  }
}
