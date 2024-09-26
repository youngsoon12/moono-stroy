import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Container from '../components/css/Container';
import Header from '../components/form/Header';
import Contents from '../components/css/Contents';
import IntroduceBtn from '../components/form/IntroduceBtn';
import { useTypingEffect } from '../components/hook/useTypingEffect';
import data from '../assets/introduce.json';
import theme from 'styles/theme';

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
          <ContentSection style={{ height: '70%' }}>
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
            backgroundColor: '#f3f3f3',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              marginTop: '17%',
            }}
          >
            <ContentSection style={{ textAlign: 'center' }}>
              <ContentsStyle>
                <ImgSection>
                  <SemiTitle>SKILL</SemiTitle>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/intro/무너능력.png`}
                    alt="무너 능력치"
                  />
                </ImgSection>
                <SkillText>
                  인내심 말고는 못하는게 없는 <br />
                  <span style={{ fontSize: '0.7em' }}>(거의)</span> 꽉 찬 오각형
                </SkillText>
              </ContentsStyle>
              <ContentsStyle>
                <TMIStyle>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/intro/alien.png`}
                  />
                  무너의 MBTI는 ENTJ이다.
                </TMIStyle>
                <ImgSection style={{ margin: 'auto' }}>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/intro/moo3.png`}
                    style={{
                      width: '170px',
                    }}
                  />
                </ImgSection>
              </ContentsStyle>
            </ContentSection>
          </div>
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
  justify-content: center;
  align-items: center;
`;

const StyledContents = styled(Contents)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextSection = styled.div`
  height: 80px;
  font-size: 1.2em;
  font-weight: 600;
  text-align: center;
  margin-bottom: 10%;
  line-height: 1.5;
`;

const ImgSection = styled.div`
  /* width: 100%; */
  img {
    width: 290px;
    max-width: 90%;
    height: auto;
    margin: 5% 0;
  }
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SemiTitle = styled.div`
  font-size: 1em;
  text-align: center;
  display: flex;
  font-family: 'RixInooAriDuriR';
  font-weight: 900;
  color: #fff;
  background-color: ${theme.color.mainColor};
  margin: auto;
  padding: 5px 10px;
  border-radius: 20px;
`;

const ContentsStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3%;
`;

const SkillText = styled.div`
  width: 100%;
  margin: auto;
  background-color: #fff;
  border-radius: 0 20px 0 20px;
  padding: 7% 0;
  text-align: center;
  margin: 3% 0;
`;

const TMIStyle = styled.div`
  display: flex;
  text-align: center;
  color: #6d6d6d;
  font-size: 0.9em;
  justify-content: center;

  img {
    width: 1.3em;
    margin-right: 5px;
  }
`;
