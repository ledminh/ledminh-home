import styled from 'styled-components';

const left = `
  overflow: hidden;
  &:hover {
    box-shadow: 0px 0px 30px;
  }
`;

const top = `
  background-color: #e2e2e2;  
  text-align: center;
`;

const Frame = styled.div`
  position: relative;
  width: 100%;

  ${(props) => (props.position === "left")? left : top }

`;

export default Frame;
