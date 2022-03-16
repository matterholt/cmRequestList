import React, { useState, useEffect, useReducer } from 'react';
import { CmDataView, AddRequest, MenuBar } from '../components';

const Dashboard = () => {
  const [logedInUser, setLogedInUser] = useState({
    profile: { userName: 'James' },
    preferances: { CmDataView: 'table' },
  });
  const [cmRequest, updateRequest] = useState([
    {
      id: 1,
      modelName: 'V00R00',
      description: 'Make it better',
      modelBase: 'new model',
      status: 'completed',
      priority: 'low',
    },
    {
      id: 2,
      modelName: 'V01R00',
      description: 'improve the quaity and make it lower weight Make it better',
      modelBase: 'V00R00',
      status: 'inProgress',
      priority: 'medium',
    },
    {
      id: 3,
      modelName: 'V02R00',
      description: 'Make it better by adding a bead, increase thickness',
      modelBase: 'V01R00',
      status: 'pending',
      priority: 'high',
    },
    {
      id: 4,
      modelName: 'V03R00',
      description: 'Make it better by adding a bead, increase thickness',
      modelBase: 'V02R00',
      status: 'pending',
      priority: 'high',
    },
    {
      id: 5,
      modelName: 'V04R00',
      description: 'Make it better by adding a bead, increase thickness',
      modelBase: 'V02R00',
      status: 'pending',
      priority: 'low',
    },
  ]);
  const [activeAddRequest, setActiveAddRequest] = useState(false);
  
  const [currentView, setCurrentView] = useState('name');

  useEffect(() => {
    console.log(
      'file has been updated and has been pushed to server and saved to local storage'
    );
    console.log(cmRequest.length);
  }, [cmRequest]);

  function addCounterMesasure(newRequest) {
    updateRequest([...cmRequest, newRequest]);
  }

  return (
    <div style={{ margin: '20px' }}>
      <div>
        <p style={{ fontSize: '25px' }}>
          Reqeust for{' '}
          <span style={{ fontWeight: 900 }}>
            {logedInUser.profile.userName}
          </span>
        </p>
      </div>
      <MenuBar />
      {activeAddRequest ? (
        <AddRequest addCounterMesasure={addCounterMesasure} />
      ) : null}
      <CmDataView
        cmRequest={cmRequest}
        userViewPreferance={logedInUser.preferances}
      />
    </div>
  );
};

export default Dashboard;
