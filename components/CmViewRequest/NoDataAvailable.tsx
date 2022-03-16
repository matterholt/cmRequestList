import React from 'react';

export const NoDataAvailable = (props) => {
  const { msg = 'NOT A THING AVAILABLE' } = props;
  return <h2>{msg}</h2>;
};
