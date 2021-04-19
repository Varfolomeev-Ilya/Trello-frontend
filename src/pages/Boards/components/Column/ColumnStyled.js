import styled from 'styled-components';

const StyledMain = styled.div`
    width: 100%;
    height: auto;
    margin: 0 auto;
    overflow-x: auto;
`;

const StyledContainer = styled.div`
    width: 100;
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const StyledMenu = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 15px;
    background: #ebecf0;
`;

const StyledP = styled.p`
    color: black;
    margin-left: 25px;
`;

const StyledSection = styled.section`
    width: 100%;
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const StyledBoard = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    margin-bottom: 8px;
    padding-bottom: 8px;
    white-space: nowrap;    
`;

export { StyledMain, StyledContainer, StyledMenu, StyledP, StyledSection, StyledBoard }