import React from 'react';
import { AppContext } from '../App/AppProvider';

export default function Page({ name, children }) {
  return (
    <AppContext.Consumer>
      {({ state: { page } }) => {
        if (page !== name) {
          return null;
        }
        return <div> {children} </div>;
      }}
    </AppContext.Consumer>
  );
}
