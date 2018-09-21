import React, { Component } from 'react';

import { Link } from 'javascripts/routes/routes';

class Posts extends Component {
  static async getInitialProps() {
    const data = await fetch('//api.tvmaze.com/search/shows?q=batman').then(
      (response) => response.json()
    );
    return { data };
  }

  render() {
    return (
      <ul>
        {this.props.data.map(({ show }) => (
          <li key={show.id}>
            <Link route={`/post/${show.id}`}>
              <a href=" # ">{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default Posts;
