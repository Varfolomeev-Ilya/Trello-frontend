import styled from 'styled-components';

const StyledSection = styled.section`
  max-width: 900px;
  margin: 0 auto;
`;

const StyledH1 = styled.h1`
  color: #172b4d;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -.01em;
  line-height: 28px;
  max-width: 530px;
  margin: 0 auto;
  text-align: center;
  background-color: #f4f5f7;
`;

const StyledDiv = styled.div`
  max-width: 530px;
  margin: 0 auto;
`;

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 0 0 355px;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-flex: 0 0 260px;
`;

const StyledLabel = styled.label`
  color: #172b4d;
  font-size: 20px;
  font-weight: 600;
  margin-top: 28px;
  margin-bottom: 20px;
`;

const StyledH3 = styled.h3`
  color: #172b4d;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -.008em;
  line-height: 24px;
  margin-top: 28px;
  font-weight: 500;
  line-height: 26px;
  max-width: 530px;
`;

const StyledHr = styled.hr`
  color: #172b4d;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -.008em;
  line-height: 24px;
  font-weight: 500;
  line-height: 26px;
  width: 100%;
`;

const StyledInput = styled.input`
  background-color: #5aac44;
  box-shadow: none;
  border: none;
  color: #fff;
  margin-right: 0;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  cursor: pointer;
  text-decoration: none;
  transition-property: background-color,border-color,box-shadow;
  transition-duration: 85ms;
  transition-timing-function: ease;
  width: 250px;
  padding: 6px 12px;
  margin-bottom: 10px;
`;

const StyledDivBtn = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
`;

const StyledContainer = styled.div`
  margin: 0 auto;
  height: auto;
`;

export { 
  StyledSection, StyledH1, StyledForm,
  StyledLabel, StyledHr, StyledInput,
  StyledDiv, StyledH3, StyledDivBtn,
  StyledContainer
 };