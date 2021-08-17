import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

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
      <div className="App">
        <MyButton>Hello World</MyButton>
        <TomatoButton>Yessir!</TomatoButton>
      </div>
    );
  }
}

export default App;
