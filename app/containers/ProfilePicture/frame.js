import styled from 'styled-components';


const Frame = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;

  &:hover {
    box-shadow: 0px 0px 30px;
  }

  @media screen and (max-width: 700px){
    background-color: #e2e2e2;
    text-align: center;

    &:hover {
      box-shadow: none;
    }
  }

`;

export default Frame;
