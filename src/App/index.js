import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import AppLayout from './AppLayout';

const MyButton = styled.button`
  color: green;
  &:hover {
    color: blue;
    cursor: pointer;
  }
`;

const TomatoButton = styled(MyButton)`
  color: tomato;
`;

class App extends Component {
  render() {
    return (
      <AppLayout>
        <h1>Welcome to CryptoDash</h1>
      </AppLayout>
    );
  }
}

export default App;
