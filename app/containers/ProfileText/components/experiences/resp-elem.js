import React from 'react';
import styled from 'styled-components';

const Style = styled.div`
  position: relative;
  margin-bottom: 15px;

  &:hover {
    box-shadow: 0px 0px 20px;

    & > div {
      background-color: #c3cee0;
    }
  }


`;

const Bullet = styled.div`
  position: absolute;
  top: 50%;
  left: 4px;
  transform: translate(0%, -50%);
  border: 1px solid black;
  width: 10px;
  height: 10px;
`;

const Inner = styled.div`
  margin-left: 27px;
  padding: 5px;
`;
const RespElem = ({children}) => (
  <Style>
      <Bullet />
      <Inner>{children}</Inner>
  </Style>
);

export default RespElem;
