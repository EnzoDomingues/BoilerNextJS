// pages/_app.js
import React from 'react';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import Router from 'next/router';
import PropTypes from 'prop-types';
import initStore from 'javascripts/store/store';
import { loading } from 'javascripts/actions/loading';

import 'isomorphic-unfetch';

import Layout from 'javascripts/layout/layout';

class MyApp extends App {
  static async getInitialProps({ Component, ctx, isServer }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    Router.onRouteChangeStart = (url) => {
      ctx.store.dispatch(loading(true));
    };

    Router.onRouteChangeComplete = () => {
      ctx.store.dispatch(loading(false));
    };

    return { pageProps };
  }

  static propTypes = {
    dispatch: PropTypes.func
  };

  componentDidMount() {}

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </Container>
    );
  }
}

export default withRedux(initStore)(MyApp);
