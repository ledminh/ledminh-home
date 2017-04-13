import styled from 'styled-components';

export default styled.div`
  position: absolute;
  right: -103px;
  top: -12px;
  background-color: #414175;
  color: white;
  padding: 5px;
  font-size: 14px;
  font-weight: bold;

  cursor: pointer;

  border-radius: 12px 12px 0px 0px;
  box-shadow: 5px 0px 10px black;
  transform-origin: bottom left;
  transform: rotate(90deg);

  cursor: pointer;
  
  &:hover {
    background-color: #5959a3;
  }
`;
