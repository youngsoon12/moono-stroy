import React from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

interface ProfileProps {
  username: string; // 유저명을 받기 위한 props 추가
  onLogout: () => void; // 로그아웃 버튼을 위한 콜백 함수
}

export const ProfilePopover: React.FC<ProfileProps> = ({ username, onLogout }) => {
  return (
    <ContainerStyle>
      <TextSection>
        <div>어서오세요</div>
        <div>{username}님</div>
      </TextSection>
      <LogoutBtn onClick={onLogout}>로그아웃</LogoutBtn>
    </ContainerStyle>
  );
};

const ContainerStyle = styled.div`
  width: 200px;
  border: 1px solid lavender;
  border-radius: 10px;
  padding: 10px;
  background-color: #fff; /* 배경색 추가 */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* 약간의 그림자 추가 */
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  font-size: 1em;
  color: #121212;
`;

const LogoutBtn = styled.button`
  width: 100%;
  padding: 8px;
  background-color: ${theme.color.mainColor};
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1em;
  cursor: pointer;

  &:hover {
    background-color: ${theme.color.pointColor}; /* 버튼 호버 시 색상 변경 */
  }
`;
