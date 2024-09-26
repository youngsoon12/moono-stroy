import React from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

// Props에 onClick 함수 타입 추가
interface IntroProps {
  children: React.ReactNode;
  onClick: () => void; // onClick 이벤트 핸들러 추가
}

const IntroduceBtn: React.FC<IntroProps> = ({ children, onClick }) => {
  return <BtnStyle onClick={onClick}>{children}</BtnStyle>;
};

export default IntroduceBtn;

const BtnStyle = styled.button`
  width: 90%;
  color: #fff;
  height: 10%;
  max-height: 60px;
  border-radius: 40px;
  font-size: 1.4em;
  font-weight: 700;
  justify-content: flex-end;
  margin-bottom: 5%;
  background-color: #969696;
  text-align: center;
  cursor: pointer; // 버튼에 마우스 커서 적용
  &:hover {
    background-color: ${theme.color.mainColor}; // hover 시 색상 변화 추가
  }
`;
