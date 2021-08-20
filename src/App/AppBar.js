import React from 'react';
import styled, { css } from 'styled-components';
import { AppContext } from './AppProvider';

const Logo = styled.div`
  font-size: 1.5em;
`;

const Bar = styled.div`
  display: grid;
  margin-bottom: 40px;
  grid-template-columns: 180px auto 100px 100px;
`;

const ControlButtonElem = styled.div`
  cursor: pointer;
  &:hover {
    text-shadow: 0px 0px 20px #03ff30;
  }
  ${(props) =>
    props.active &&
    css`
      text-shadow: 0px 0px 10px #03ff30;
    `}
`;

function toProperCase(lower) {
  return lower.charAt(0).toUpperCase() + lower.substr(1);
}

function ControlButton({ name }) {
  return (
    <AppContext.Consumer>
      {({ page, setPage, setFilteredCoins }) => (
        <ControlButtonElem
          active={page === name}
          onClick={() => {
            setFilteredCoins(null);
            setPage(name);
          }}
        >
          {toProperCase(name)}
        </ControlButtonElem>
      )}
    </AppContext.Consumer>
  );
}

export default function AppBar() {
  return (
    <Bar>
      <Logo> CryptoDash </Logo>
      <div />
      <ControlButton active name="dashboard" />
      <ControlButton name="settings" />
    </Bar>
  );
}
