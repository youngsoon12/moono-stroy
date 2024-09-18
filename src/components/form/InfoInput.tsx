import { Input } from '@mui/material';
import styled from 'styled-components';
import theme from 'styles/theme';

const InfoInput = (props: any) => {
  return <InfoText {...props} />;
};

export default InfoInput;

const InfoText = styled(Input)`
  width: 350px;
  height: 40px;
  font-size: 16px;
  padding-left: 10px;
  margin-bottom: 20px;

  &.MuiInput-underline:before {
    border-bottom: 2px solid lightgray; /* 기본 상태: 연한 회색 */
    transition: border-color 0.3s ease; /* 부드러운 전환 효과 */
  }

  &.MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: 2px solid gray; /* 마우스를 올렸을 때 */
  }

  &.MuiInput-underline:after {
    border-bottom: 2px solid ${theme.color.mainColor}; /* 포커스 상태 */
  }
`;
