import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = props => (
  <ContentLoader
    height={120}
    width={400}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="4" ry="4" width="60" height="60" />
    <rect x="80" y="0" rx="3" ry="3" width="300" height="6" />
    <rect x="80" y="15" rx="3" ry="3" width="60" height="6" />
    <rect x="80" y="35" rx="3" ry="3" width="300" height="6" />
    <rect x="80" y="50" rx="3" ry="3" width="300" height="6" />
  </ContentLoader>
);

export default MyLoader;
