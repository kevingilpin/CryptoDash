import React from 'react';
import { AppContext } from '../App/AppProvider';

export default function WelcomeMessage({ firstVisit }) {
  return (
    <AppContext.Consumer>
      {({ firstVisit }) => {
        console.log(firstVisit);
        return firstVisit ? <h1>Welcome to CryptoDash</h1> : null;
      }}
    </AppContext.Consumer>
  );
}
