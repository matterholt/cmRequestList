import React, { useState, useReducer } from 'react';
import { SimpleGrid, Box, Button } from '@chakra-ui/react';
// list of reqeust that have been submitted and completed
import { ListView, StatusBasedView } from './CmViewRequest';

const ViewController = (props) => {
  const { view, cmRequest } = props;
  switch (view) {
    case 'standard':
      return <ListView cmRequest={cmRequest} />;
    case 'statusView':
      return <StatusBasedView cmRequest={cmRequest} />;
    default:
      throw new Error('This should be impossible');
  }
};

// Fetch From API
export const CmDataView = (props) => {
  const { cmRequest, userViewPreferance } = props;
  const [view, setView] = useState('statusView');



  function SortedModelList() {
    // switch statement and
    // sort by modelName, default and name value
    // sort by baseModel,
  }

  function handleViewController() {
    // how user would like to view the list
    // status
    // priority
    // default is the full list organized by model name
  }
  return <ViewController view={view} cmRequest={cmRequest} />;
};
