import { TextField } from '@mui/material';
import styled from 'styled-components';
import theme from 'styles/theme';
const RegistInput = (props: any) => {
  return <RegistInputField {...props} />;
};

export default RegistInput;

const RegistInputField = styled(TextField)`
  width: 350px;
  height: 40px;

  /* 입력 필드의 글자 색상 및 크기 */
  & .MuiInputBase-input {
    font-size: 16px; /* 입력된 값의 글자 크기 */
    color: black; /* 입력하는 글자의 색상을 검은색으로 지정 */
    padding-left: 10px;
  }

  /* 기본 상태의 라벨 색상 */
  & .MuiInputLabel-root {
    font-size: 16px; /* 라벨 글자 크기 */
    padding-left: 10px;
    color: #b5b5b5; /* 라벨이 내려가 있을 때 색상 (회색) */
  }

  /* 라벨이 축소되어 올라갔을 때의 스타일 */
  & .MuiInputLabel-shrink {
    font-size: 14px; /* 축소된 라벨의 글자 크기 */
    transform: translate(0px, -10px) scale(0.8);
    color: #898a8d !important; /* 라벨이 올라갈 때 색상 (짙은 회색) */
  }

  /* 언더라인 기본 상태 */
  & .MuiInput-underline:before {
    border-bottom: 2px solid lightgray; /* 기본 상태: 연한 회색 언더라인 */
  }

  /* 포커스 시 언더라인 색상 */
  & .MuiInput-underline:after {
    border-bottom: 3px solid ${theme.color.mainColor}; /* 포커스 시 핑크색 언더라인 */
  }

  /* 언더라인에 마우스를 올렸을 때 */
  & .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: 2px solid gray; /* 마우스를 올렸을 때 회색 언더라인 */
  }
`;
