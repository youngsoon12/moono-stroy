import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Container from '../components/css/Container';
import Header from '../components/form/Header';
import Contents from '../components/css/Contents';
import IntroduceBtn from '../components/form/IntroduceBtn';
import { useTypingEffect } from '../components/hook/useTypingEffect';
import data from '../assets/introduce.json';

export const Introduce = (props: any) => {
  const [pageIndex, setPageIndex] = useState(0); // 현재 페이지 인덱스 상태
  const [currentData, setCurrentData] = useState(data[pageIndex]); // 현재 페이지 데이터 상태
  const [isDataLoaded, setIsDataLoaded] = useState(false); // 데이터 로드 여부 추가

  useEffect(() => {
    // 데이터가 로드되었음을 표시
    if (pageIndex >= 0) {
      setCurrentData(data[pageIndex]);
      setIsDataLoaded(true); // 데이터 로드 완료
    }
  }, [pageIndex]);

  // 타이핑 효과를 위한 훅 호출 (데이터 로드 후에만 실행)
  const { displayedText, handleClick } = useTypingEffect(
    isDataLoaded ? currentData.text : '', // 데이터 로드 후에 텍스트 전달
    100 // 타이핑 속도
  );

  const handleNextPage = () => {
    if (pageIndex < data.length - 1) {
      setPageIndex(pageIndex + 1); // 페이지 인덱스 증가
      setIsDataLoaded(false); // 페이지 이동 시 데이터 로드 초기화
    } else {
      setPageIndex(-1); // 마지막 페이지 이후 다른 화면으로 전환
    }
  };

  useEffect(() => {
    const handleGlobalClick = () => {
      handleClick(); // 클릭 시 전체 텍스트 보여주기
    };

    document.addEventListener('click', handleGlobalClick);

    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, [handleClick]);

  return (
    <Container>
      <Header>{'무너 소개서'}</Header>
      {pageIndex >= 0 ? (
        <StyledContents>
          <ContentSection>
            <TextSection style={{ whiteSpace: 'pre-wrap' }}>
              {displayedText && <span>{displayedText}</span>}{' '}
              {/* 타이핑된 텍스트 */}
            </TextSection>
            <ImgSection>
              <img src={currentData.img} alt="무너 이미지" />
            </ImgSection>
          </ContentSection>
          <IntroduceBtn onClick={handleNextPage}>
            {currentData.buttonText} {/* 버튼 텍스트 */}
          </IntroduceBtn>
        </StyledContents>
      ) : (
        <StyledContents
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,212,93,1) 100%)',
          }}
        >
          <ContentSection>
            <ContentsStyle>
              <SemiTitle style={{ fontSize: '1.6em' }}>Skill</SemiTitle>
              <ImgSection>
                <img
                  src={`${process.env.PUBLIC_URL}/images/intro/무너능력.png`}
                  alt="무너 능력치"
                  style={{
                    width: '65%',
                    marginTop: '10%',
                    justifyContent: 'center',
                  }}
                />
                <div style={{ textAlign: 'start' }}>
                  인내심 말고는 못하는게 없는 <br />
                  <span style={{ fontSize: '0.7em' }}>(거의)</span> 꽉 찬 오각형
                </div>
              </ImgSection>
            </ContentsStyle>
            <ContentsStyle
              style={{
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center',
                flexDirection: 'row',
              }}
            >
              <SemiTitle
                style={{ fontSize: '1.6em', marginRight: '10px', width: '20%' }}
              >
                MBTI
              </SemiTitle>
              <div style={{ fontSize: '1.2em' }}>ENTJ</div>
            </ContentsStyle>
          </ContentSection>
          <IntroduceBtn onClick={() => (window.location.href = '/main')}>
            메인으로
          </IntroduceBtn>
        </StyledContents>
      )}
    </Container>
  );
};

// 스타일 정의
const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  justify-content: center;
  align-items: center;
`;

const StyledContents = styled(Contents)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
`;

const TextSection = styled.div`
  font-size: 1.3em;
  height: 80px;
  font-weight: 700;
  text-align: center;
  line-height: 1.5;
`;

const ImgSection = styled.div`
  img {
    width: 270px;
    height: auto;
  }
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  width: 90%;
`;

const SemiTitle = styled.div`
  width: 100%;
  display: flex;
`;

const ContentsStyle = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-bottom: 5%;
`;
