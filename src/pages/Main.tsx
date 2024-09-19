import { useMatch, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../components/css/Container';
import theme from 'styles/theme';
import { useRecoilState } from 'recoil';
import { userAtom } from 'recoil/userAtom';
import { useEffect } from 'react';

const Main = (props: any) => {
  const navigate = useNavigate();
  const [user] = useRecoilState(userAtom);

  console.log(user);

  const handleButtonClick = (id: string) => {
    navigate(`/contIntro/${id}`);
  };
  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      {/* 첫 번째 섹션 */}
      <GradientDiv>
        <MainHeaderStyle
          style={{
            width: '100%',
            height: '7vh',
            zIndex: '2',
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            alignContent: 'center',
            border: '1px solid',
            fontWeight: '900',
          }}
        >
          <div
            style={{
              gridColumn: '3',
              fontSize: '1.2em ',
              fontWeight: '900',
            }}
          >
            MOOS
          </div>
          <div>도장</div>
          <div>이름</div>
        </MainHeaderStyle>
        <img
          src={`${process.env.PUBLIC_URL}/images/main/HiMoono.png`}
          style={{
            position: 'absolute',
            height: '38vh',
            zIndex: '2',
            top: '4vh',
          }}
        />
        <IntroText>
          <span>
            <span style={{ color: `${theme.color.mainColor}` }}>안녕? </span>
            나는 <span style={{ color: `${theme.color.mainColor}` }}>무너</span>
            야
          </span>
          <span style={{ fontSize: '0.7em', fontWeight: 400 }}>
            내 <span style={{ color: '#f7c111' }}>이야기</span>를 들어줄래?
          </span>
        </IntroText>
      </GradientDiv>

      {/* 두 번째 섹션 */}
      <MenuContainer>
        <ButtonContainer>
          {/* 상단 2개의 버튼 */}
          <MenuButton onClick={() => handleButtonClick('introduce')}>
            무너소개서
          </MenuButton>
          <MenuButton onClick={() => handleButtonClick('mooQuiz')}>
            무 퀴즈~?!
          </MenuButton>

          {/* 가운데 큰 버튼 */}
          <LargeButton onClick={() => handleButtonClick('cheerup')}>
            무너를 응원해줘!
          </LargeButton>

          {/* 하단 2개의 버튼 */}
          <MenuButton onClick={() => handleButtonClick('fourcut')}>
            무너네컷
          </MenuButton>
          <MenuButton onClick={() => handleButtonClick('fortune')}>
            오늘의 운세
          </MenuButton>
        </ButtonContainer>
      </MenuContainer>
    </Container>
  );
};

export default Main;

// GradientDiv 스타일
const GradientDiv = styled.div`
  width: 100%;
  height: 38vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 5dvh;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 26vh;
    background-color: ${theme.color.mainColor}; /* 상단 70% 분홍색 */
    z-index: 1; /* 상단 배경 요소의 z-index를 낮게 설정 */
  }
`;
const MenuContainer = styled.div`
  width: 100%;
  height: 58vh;
  display: flex;
  flex-direction: column;
`;
const IntroText = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  top: 96%;
  font-size: 1.8em;
  font-family: 'Cafe24Ssurround';
  text-align: center;
  letter-spacing: -0.07em;
  line-height: 1.05em;
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2열로 구성 */
  grid-gap: 2vh;
  width: 100%;
  padding: 10% 5%;
  box-sizing: border-box;
`;

const MenuButton = styled.button`
  background-color: #fff;
  border-radius: 10px;
  height: 12vh;
  font-size: 1.2em;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.329);
  font-weight: bold;
  &&:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.562);
  }
`;

const LargeButton = styled(MenuButton)`
  grid-column: span 2; /* 2칸을 차지하도록 설정 */
  background-color: ${theme.color.mainColor}; /* 핑크색 배경 */
  color: #fff; /* 글자색 흰색 */
  font-weight: bold;
  height: 14vh;
  font-size: 1.5em;
`;

const MainHeaderStyle = styled.div`
  /* position: absolute; */
  top: 0;
  display: flex;
  /* box-sizing: border-box; */
  overflow: auto;
  font-weight: 900;
  align-items: flex-start;
`;
