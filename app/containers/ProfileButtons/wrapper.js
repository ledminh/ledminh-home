import styled from 'styled-components';

const Wrapper = styled.div`
    border: 2px solid #afafaf;
    margin-top: 10px;
    padding: 5px;
    background-color: white;

    @media screen and (max-width: 700px){
      text-align: center;
      margin: 10px;
      border-radius: 5px;
    }
`;

export default Wrapper;
