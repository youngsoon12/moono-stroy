import Header from '../components/css/Header';
import Container from '../components/css/Container';
import Contents from '../components/css/Contents';
import React from 'react';
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import InfoInput from '../components/form/InfoInput';

const BoardPage: React.FC = () => {
  const navigate = useNavigate();

  const onBackBtn = () => {
    // 뒤로 가기 함수
    navigate('/main');
  };

  return (
    <Container>
      <Header style={{ position: 'relative' }}>
        <ArrowBackIosNewSharpIcon onClick={onBackBtn} />
        <HeaderTitle>무너 응원하기</HeaderTitle>
      </Header>
      <Contents>
        <ImgArea></ImgArea>
        <BoardArea></BoardArea>
        <InputArea>
          <InputText />
          <InputBtn>버튼</InputBtn>
        </InputArea>
      </Contents>
    </Container>
  );
};

export default BoardPage;

const HeaderTitle = styled.span`
  position: sticky;
  left: 50%;
  transform: translateX(-50%);
`;

const ImgArea = styled.div`
  width: 400px;
  height: 260px;
  border: 1px solid black;
  margin-bottom: 30px;
`;
const BoardArea = styled.div`
  width: 380px;
  height: 220px;
  border: 1px solid black;
  margin-bottom: 30px;
`;
const InputText = styled(InfoInput)`
  width: 300px;
  height: 44px;
  margin-right: 10px;
`;

const InputArea = styled.div``;

const InputBtn = styled.button`
  align-items: center;
  appearance: none;
  background-color: #fff;
  border-radius: 24px;
  border-style: none;
  box-shadow:
    rgba(0, 0, 0, 0.2) 0 3px 5px -1px,
    rgba(0, 0, 0, 0.14) 0 6px 10px 0,
    rgba(0, 0, 0, 0.12) 0 1px 18px 0;
  box-sizing: border-box;
  color: #3c4043;
  cursor: pointer;
  display: inline-flex;
  fill: currentcolor;
  font-family: 'Google Sans', Roboto, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 36px;
  justify-content: center;
  letter-spacing: 0.25px;
  line-height: normal;
  max-width: 100%;
  overflow: visible;
  padding: 0px 16px;
  position: relative;
  text-align: center;
  text-transform: none;
  transition:
    box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 15ms linear 30ms,
    transform 270ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
  will-change: transform, opacity;
  z-index: 0;

  &:hover {
    background: #f6f9fe;
    color: #174ea6;
  }

  &:active {
    box-shadow:
      0 4px 4px 0 rgb(60 64 67 / 30%),
      0 8px 12px 6px rgb(60 64 67 / 15%);
    outline: none;
  }

  &:focus {
    outline: none;
    border: 2px solid #4285f4;
  }

  &:not(:disabled) {
    box-shadow:
      rgba(60, 64, 67, 0.3) 0 1px 3px 0,
      rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
  }

  &:not(:disabled):hover {
    box-shadow:
      rgba(60, 64, 67, 0.3) 0 2px 3px 0,
      rgba(60, 64, 67, 0.15) 0 6px 10px 4px;
  }

  &:not(:disabled):focus {
    box-shadow:
      rgba(60, 64, 67, 0.3) 0 1px 3px 0,
      rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
  }

  &:not(:disabled):active {
    box-shadow:
      rgba(60, 64, 67, 0.3) 0 4px 4px 0,
      rgba(60, 64, 67, 0.15) 0 8px 12px 6px;
  }

  &:disabled {
    box-shadow:
      rgba(60, 64, 67, 0.3) 0 1px 3px 0,
      rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
  }
`;
