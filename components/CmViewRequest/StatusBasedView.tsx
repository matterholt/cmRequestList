import React, { useState, useReducer } from 'react';
import { NoDataAvailable } from './NoDataAvailable';
import { RowItem, RowHeading } from '.';

export const StatusBasedView = (props) => {
  const { cmRequest } = props;
  const [pendingReqeust, setPendingRequest] = useState(() =>
    cmRequest.filter((cmReq) => cmReq.status == 'pending')
  );
  const [completedReqeust, setCompletedRequest] = useState(() =>
    cmRequest.filter((cmReq) => cmReq.status == 'completed')
  );
  const [inProgressRequest, setInProgressRequest] = useState(() =>
    cmRequest.filter((cmReq) => cmReq.status == 'inProgress')
  );

  return (
    <div>
      <h2>Reqeust are in Progress</h2>
      <RowHeading />
      {inProgressRequest ? (
        inProgressRequest.map((model) => <RowItem model={model} />)
      ) : (
        <NoDataAvailable />
      )}

      <h2>Reqeust are Pending</h2>
      {pendingReqeust ? (
        pendingReqeust.map((model) => <RowItem model={model} />)
      ) : (
        <NoDataAvailable />
      )}
      <h2>Reqeust have been Completed</h2>
      {completedReqeust ? (
        completedReqeust.map((model) => <RowItem model={model} />)
      ) : (
        <NoDataAvailable />
      )}
    </div>
  );
};
