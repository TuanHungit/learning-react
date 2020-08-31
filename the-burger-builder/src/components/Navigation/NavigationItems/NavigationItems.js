import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link='/' exact>
      Burger Builder
    </NavigationItem>
    {props.isAuthencated ? (
      <NavigationItem link='/orders'>Orders</NavigationItem>
    ) : null}
    {props.isAuthencated ? (
      <NavigationItem link='/logout'>Logout</NavigationItem>
    ) : (
      <NavigationItem link='/auth'>Authencation</NavigationItem>
    )}
  </ul>
);

export default navigationItems;
