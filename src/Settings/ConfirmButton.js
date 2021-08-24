import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import { fontSize1, greenBoxShadow, color3 } from '../Shared/Styles';

const ConfirmButtonStyled = styled.div`
  margin: 10px;
  color: ${color3};
  ${fontSize1}
  padding: 15px;
  cursor: pointer;
  &:hover {
    ${greenBoxShadow}
  }
`;

export const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;

export default function ConfirmButton({ clickHandler }) {
  return (
    <CenterDiv>
      <ConfirmButtonStyled onClick={clickHandler}>
        Confirm Favorites
      </ConfirmButtonStyled>
    </CenterDiv>
  );
}
