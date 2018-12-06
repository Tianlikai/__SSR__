import React from 'react';
import ContentLoader from 'react-content-loader';

const LoadingHeader = props => (
  <ContentLoader
    height={120}
    width={400}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="10" rx="4" ry="4" width="117" height="6.4" />
    <rect x="0" y="30" rx="3" ry="3" width="85" height="6.4" />
    <rect x="0" y="60" rx="3" ry="3" width="350" height="6.4" />
    <rect x="0" y="80" rx="3" ry="3" width="380" height="6.4" />
    <rect x="0" y="100" rx="3" ry="3" width="201" height="6.4" />
  </ContentLoader>
);

export default LoadingHeader;
