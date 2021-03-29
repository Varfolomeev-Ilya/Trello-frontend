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

const StyledP = styled.p`
  text-align: center;
  color: #5e6c84;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 8px;
  white-space: pre-line;
  background-color: #f4f5f7;
  max-width: 530px;
  margin: 20px auto;
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

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  flex: 0 0 70%;
  width: 100%;
  margin: 0 auto;
`;

const StyledDivUser = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
  margin-top: 0;
`;

const StyledSpanUser = styled.span`
  color: #172b4d;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -.003em;
  line-height: 16px;
  margin-bottom: 0;
`;

const StyledDivSpan = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  line-height: 12px;
  color: #5e6c84;
`;

const StyledSpan = styled.span`
  cursor: pointer;
  line-height: 12px;
  color: #172b4d
`;

const StyledSpanP = styled.span`
  cursor: pointer;
  line-height: 12px;
  color: #5e6c84;
`;

const StyledDivInput = styled.div`
  margin-bottom: 12px;
`;

const StyledInput = styled.input`
  outline: none;
  border: none;
  box-sizing: border-box;
  color: #172b4d;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  transition-property: background-color,border-color,box-shadow;
  transition-duration: 85ms;
  transition-timing-function: ease;
  border-radius: 3px;
  padding: 8px 12px;
  box-shadow: inset 0 0 0 2px #dfe1e6;
  background-color: #fafbfc;
  width: 100%;
  margin-bottom: 0;
`;

const StyledDivBio = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
  margin-top: 0;
`;

const StyledTextarea = styled.textarea`
  height: 72px;
  margin-bottom: 28px;
  resize: vertical;
  color: #5e6c84;
  background-color: #fafbfc;
  box-shadow: inset 0 0 0 2px #dfe1e6;
  border-radius: 3px;
  border: none;
`;

const StyledButton = styled.button`
  background-color: #5aac44;
  box-shadow: none;
  border: none;
  color: #fff;
  margin-top: 40px;
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
  padding: 6px 12px;
  text-decoration: none;
  transition-property: background-color,border-color,box-shadow;
  transition-duration: 85ms;
  transition-timing-function: ease;
  margin: 0 auto;
  width: 250px;
`;

export {
  StyledSection, StyledH1, StyledP,
  StyledH3, StyledHr, StyledDiv,
  StyledForm, StyledDivUser, StyledSpanUser,
  StyledDivSpan, StyledSpan, StyledSpanP,
  StyledDivInput, StyledInput, StyledDivBio,
  StyledTextarea, StyledButton
};