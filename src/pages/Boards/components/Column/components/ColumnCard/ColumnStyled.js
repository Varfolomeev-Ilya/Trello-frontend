import styled from 'styled-components';

const StyledCard = styled.div`
    background-color: #ebecf0;
    border-radius: 3px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    max-height: 100%;
    position: relative;
    white-space: normal;
    margin-left: 8px;
    width: 277px;
    flex-direction: column;
`;

const StyledTitle = styled.div`
    flex: 0 0 auto;
    position: relative;
    min-height: 20px;
    width:100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const StyledP = styled.p`
    background: transparent;
    border-radius: 3px;
    box-shadow: none;
    font-weight: 600;
    margin: -4px 0;
    height: 20px;
    min-height: 20px;
    padding: 8px 10px;
    resize: none;
    max-height: 256px;
`;

const StyledDiv = styled.div`
    min-height: 38px;
    max-height: 38px;
    display: flex;
    justify-content: space-around;
`;

const StyledSpan = styled.span`
    border-radius: 3px;
    color: #5e6c84;
    display: block;
    flex: 1 0 auto;
    margin: 2px 0 8px 8px;
    padding: 4px 8px;
    position: relative;
    text-decoration: none;
    -webkit-user-select: none;
    user-select: none;
`;

const StyledA = styled.a`
    overflow: hidden;
    padding: 6px 8px 2px;
    position: relative;
    z-index: 10;
`;

const StyledTask = styled.div`
    clear: both;
    display: block;
    margin: 0 0 4px;
    overflow: hidden;
    text-decoration: none;
    word-wrap: break-word;
    color: #172b4d;
`;

export { StyledCard, StyledTitle, StyledP, StyledTask, StyledDiv, StyledSpan, StyledA }