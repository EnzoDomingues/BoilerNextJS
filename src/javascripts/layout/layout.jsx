import React from 'react';
import Head from 'next/head';

import ga from 'javascripts/analytics/ga';
import Header from 'javascripts/components/header';
import Loading from 'javascripts/components/loading';
// import Footer from '../components/Footer'

import 'styles/style';

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>Boiler NextJs</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <script dangerouslySetInnerHTML={{ __html: ga }} />
      <link rel="stylesheet" href="/_next/static/style.css" />
    </Head>
    <Header />
    <Loading />
    {children}
  </div>
);

export default Layout;
