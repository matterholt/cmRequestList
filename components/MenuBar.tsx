import React, { useState, useEffect, useReducer } from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'

// TODO
//  Have current display Highlighted
//  Component handle the stete
// have the menu bar be expanded,
// reafactor

const defaultListStyle = {
  backgroundColor: 'rgb(132, 186, 171)',
  cursor: 'pointer',
  padding: '5px',
};
const activeListStyle = {
  color: 'rgb(132, 186, 171)',
  backgroundColor: 'white',
  cursor: 'pointer',
  padding: '5px',
};

const MenuItems = (props) => {
  const { currentView, nameView, menuAction, setCurrentView } = props;

  return (
    <li
      style={currentView == menuAction ? defaultListStyle : activeListStyle}
      onClick={() => setCurrentView(menuAction)}
    >
      {nameView}
    </li>
  );
};

export const MenuBar = (props) => {
  const {} = props;
  const [currentView, setCurrentView] = useState('name');
  function HandleViewUpdate() {}

  return (
    <div >
      <div style={{ marginRight: '15px' }}>
        <p>Add CM</p>
      </div>
    <Menu  >
        <MenuButton >VIEW</MenuButton >
        <MenuList>
          <MenuItem>All</MenuItem>
          <MenuItem>ID</MenuItem>
          <MenuItem>STATUS</MenuItem>
          <MenuItem>PRIORITY</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};
