import React from 'react';
import Header from '../components/css/HeaderArea';
import Container from '../components/css/Container';
import Contents from '../components/css/Contents';
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const FourCutPage = () => {
  const navigate = useNavigate();

  const onBackBtn = () => {
    // 뒤로 가기 함수
    navigate('/main');
  };
  return (
    <Container>
      <Header style={{ position: 'relative' }}>
        <ArrowBackIosNewSharpIcon onClick={onBackBtn} />
        <HeaderTitle>무생 ₩네컷</HeaderTitle>
      </Header>
      <Contents></Contents>
    </Container>
  );
};

export default FourCutPage;

const HeaderTitle = styled.span`
  position: sticky;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  font-weight: 300;
`;
