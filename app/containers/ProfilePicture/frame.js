import styled from 'styled-components';

const Frame = styled.div`
  position: relative;
  border: 4px double black;
  overflow: hidden;

  &:hover {
    box-shadow: 0px 0px 30px;
  }
`;

export default Frame;
