// pages/_error.js
import React from 'react';
import Custom404 from './404';

const ErrorPage = ({ statusCode }) => {
  if (statusCode === 404) {
    return <Custom404 />;
  }
  return <div>An error occurred</div>;
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;
  return { statusCode };
};

export default ErrorPage;
