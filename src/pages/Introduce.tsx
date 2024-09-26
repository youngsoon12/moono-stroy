import { useState } from 'react';
import styled from 'styled-components';
import Container from '../components/css/Container';
import Header from '../components/form/Header';
import Contents from '../components/css/Contents';
import IntroduceBtn from '../components/form/IntroduceBtn';
import { useTypingEffect } from '../components/hook/useTypingEffect';
import data from '../assets/introduce.json';

export const Introduce = (props: any) => {
  const [pageIndex, setPageIndex] = useState(0);
  const { text, img, buttonText } = data[pageIndex];
  const typedText = useTypingEffect(text, 60); // 타이핑 효과 적용

  const handleNextPage = () => {
    if (pageIndex < data.length - 1) {
      setPageIndex(pageIndex + 1);
    }
  };

  return (
    <Container>
      <Header>{'무너 소개서'}</Header>
      <StyledContents>
        <ContentSection>
          <TextSection>{typedText}</TextSection>
          <ImgSection>
            <img src={img} alt="무너 이미지" />
          </ImgSection>
        </ContentSection>
        <IntroduceBtn onClick={handleNextPage}>{buttonText}</IntroduceBtn>
      </StyledContents>
    </Container>
  );
};

// 스타일 정의
const ContentSection = styled.div`
  display: flex;
  height: 80%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledContents = styled(Contents)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextSection = styled.div`
  font-size: 1.5em;
  margin-bottom: 20px;
  height: 80px; /* 타이핑 효과 시 텍스트가 변경되어도 위치가 고정되도록 높이 설정 */
`;

const ImgSection = styled.div`
  img {
    width: 200px;
    height: auto;
  }
`;
