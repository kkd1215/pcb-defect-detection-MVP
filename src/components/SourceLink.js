import React from 'react';

const SourceLink = props => {
  /* eslint-disable jsx-a11y/anchor-has-content */
  return (
    <a href='https://electrospection-dashboard.vercel.app' target="_blank" rel="noopener noreferrer" {...props} />
  );
};

export default SourceLink;
