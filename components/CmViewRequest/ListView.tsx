import React, { useState, useReducer } from 'react';
import { RowItem } from './RowItem';
import { RowHeading } from './RowHeading';

export const ListView = (props) => {
  const { cmRequest } = props;

  return (
    <ul style={{ listStyle: 'none' }}>
      <RowHeading />
      {cmRequest.map((model) => (
        <RowItem model={model} />
      ))}
    </ul>
  );
};
