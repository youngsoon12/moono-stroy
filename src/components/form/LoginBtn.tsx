import { Button } from '@mui/material';
import styled from 'styled-components';
import theme from 'styles/theme';
const LoginBtn = (props: any) => {
  return <Btn {...props} />; // props를 Btn 컴포넌트에 전달
};

export default LoginBtn;

const Btn = styled(Button)`
  width: 350px;
  background-color: ${theme.color.mainColor} !important; /* 배경색 변경 */
  color: #ffffff !important; /* 텍스트 색상 변경 */
  height: 50px;
  font-size: 24px !important;
  font-weight: bold !important;
`;
