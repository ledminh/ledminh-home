import styled from 'styled-components';

export default styled.div`
    width: 100%;
    height: 100%;
    opacity: 0;

    &:hover {
      opacity: 1;
    }

    @media screen and (max-width: 700px){
        opacity: 1;
    }
`
