import React, { Fragment, Component } from 'react';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';

class Post extends Component {
  static propTypes = {
    data: PropTypes.object
  };

  static async getInitialProps({ query }) {
    const data = await fetch(`//api.tvmaze.com/shows/${query.id}`).then(
      (response) => response.json()
    );
    return { data };
  }

  render() {
    const { data } = this.props;
    return (
      <Fragment>
        <h1>{data.name}</h1>
        <p>{data.summary.replace(/<[/]?p>/g, '')}</p>
        <img src={data.image.medium} alt="batman" />
      </Fragment>
    );
  }
}

export default withRouter(Post);
