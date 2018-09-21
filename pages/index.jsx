import React from 'react';
import {
  startClock,
  addCount,
  serverRenderClock
} from 'javascripts/actions/clock';
import { connect } from 'react-redux';
import Page from 'javascripts/components/page';

class Counter extends React.Component {
  static getInitialProps({ store, isServer }) {
    store.dispatch(serverRenderClock(isServer));
    store.dispatch(addCount());

    return { isServer };
  }

  componentDidMount() {
    this.timer = this.props.dispatch(startClock());
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <Page title="Index Page" linkTo="/other" />;
  }
}

export default connect()(Counter);
