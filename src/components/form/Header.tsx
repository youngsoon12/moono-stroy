import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
interface HeaderProps {
  children: React.ReactNode;
}
const Header: React.FC<HeaderProps> = ({ children }) => {
  const navigate = useNavigate();
  return (
    <HeaderStyle>
      <BackIcon onClick={() => navigate(-1)}>
        <img
          src={`${process.env.PUBLIC_URL}/images/header/back.png`}
          alt="Back"
          style={{ width: '80%' }}
        />
      </BackIcon>
      <Title style={{ marginRight: '2%' }}>{children}</Title>{' '}
      {/* children으로 타이틀을 받음 */}
    </HeaderStyle>
  );
};
export default Header;
const HeaderStyle = styled.div`
  position: absolute;
  top: 0;
  left: 50%; /* 화면의 50% 위치 */
  transform: translateX(-50%); /* 자신의 너비의 절반만큼 왼쪽으로 이동 */
  display: flex;
  align-items: center;
  width: 480px;
  height: 10%;
  max-width: 480px;
  padding: 2%;
  box-sizing: border-box;
  background-color: #fff;
`;
const BackIcon = styled.div`
  /* flex: 0.5; */
  cursor: pointer;
`;
const Title = styled.span`
  flex: 1;
  font-size: 1.2em;
  font-weight: 500;
  text-align: center;
  flex: 1;
`;
