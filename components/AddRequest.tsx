import React, { useState } from 'react';

const FormInput = (props) => {
  const { label, children } = props;
  return (
    <label
      style={{
        margin: '2px',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {label}:{children}
    </label>
  );
};

export const AddRequest = (props) => {
  const { addCounterMesasure } = props;
  const [modelName, setModelName] = useState('v1000');
  const [baseModel, setBaseModel] = useState('v000');
  const [description, setDescription] = useState('bettersda');
  const [priority, setPriority] = useState('low');

  function clearForm() {
    setModelName('');
    setBaseModel('');
    setDescription('');
    setPriority('low');
  }

  function handelSubmit(e) {
    e.preventDefault();
    addCounterMesasure({
      modelName,
      baseModel,
      description,
      priority,
      status: 'pending',
    });
    clearForm();
  }

  return (
    <div
      style={{
        height: '250px',
        width: '350px',
        backgroundColor: 'lightgray',
        margin: '10px',
        padding: '10px',
      }}
    >
      <h2>Add Reqeust</h2>
      <form
        onSubmit={handelSubmit}
        style={{ display: 'flex', flexFlow: 'column' }}
      >
        <FormInput label="Model Name">
          <input
            type="text"
            required
            value={modelName}
            onChange={(e) => setModelName(e.target.value)}
          />
        </FormInput>

        <FormInput label="Base Name">
          <input
            type="text"
            required
            value={baseModel}
            onChange={(e) => setBaseModel(e.target.value)}
          />
        </FormInput>
        <FormInput label="Description">
          <input
            type="text"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormInput>
        <FormInput label="Priority">
          <input
            type="text"
            required
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          />
        </FormInput>
        <button
          style={{ backgroundColor: 'green', margin: '15px', height: '50px' }}
          type="submit"
        >
          ADD
        </button>
      </form>
    </div>
  );
};
