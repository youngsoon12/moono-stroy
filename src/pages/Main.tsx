import { useMatch, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../components/css/Container';
import theme from 'styles/theme';

const Main = (props: any) => {
  const navigate = useNavigate();

  const handleButtonClick = (id: string) => {
    navigate(`/contIntro/${id}`);
  };
  return (
    <Container style={{}}>
      {/* 첫 번째 섹션 */}
      <MainHeaderStyle>
        <Logo
          src={`${process.env.PUBLIC_URL}/images/header/Logo.png`}
          alt="MOOS 로고"
        />
        <UserInfo>
          <Stamp
            src={`${process.env.PUBLIC_URL}/images/header/stamp.png`}
            alt="스탬프"
          />
          <div>반가워요</div>
          <div style={{ fontSize: '0.7em' }}>김찡찡님</div>
        </UserInfo>
      </MainHeaderStyle>
      <GradientDiv>
        <img
          src={`${process.env.PUBLIC_URL}/images/main/HiMoono.png`}
          style={{
            position: 'absolute',
            height: '35dvh',
            zIndex: '2',
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
  height: 31dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 3dvh;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 19dvh;
    background-color: ${theme.color.mainColor}; /* 상단 70% 분홍색 */
    z-index: 1; /* 상단 배경 요소의 z-index를 낮게 설정 */
  }
`;
const MenuContainer = styled.div`
  width: 100%;
  height: 59dvh;
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
  height: 13dvh;
  font-size: 1.2em;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.329);
  font-weight: bold;
  color: #121212; /* 이렇게 설정해주지 않으면 모바일 웹에서 버튼 text색이 파란색으로 나옴 */
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
  width: 100;
  height: 7vh; /* 상대적인 vh 단위를 사용하여 반응형으로 설정 */
  display: flex;
  align-items: center; /* 세로 가운데 정렬 */
  justify-content: space-between; /* 좌우로 균등한 간격 배분 */
  background-color: ${theme.color.mainColor}; /* 헤더 배경 색 */
  z-index: 2;
  padding: 0 5%;
`;

const Logo = styled.img`
  width: 25%; /* 로고 크기 조정 */
`;

const Stamp = styled.img`
  width: 25%; /* 스탬프 크기 고정 */
  float: left;
`;

const UserInfo = styled.div`
  text-align: right; /* 텍스트 오른쪽 정렬 */
  font-size: 1.4em;
  /* font-family: 'Cafe24Ssurround'; */
  /* line-height: 1.2em; */
  font-weight: 900;
  color: white;
  white-space: nowrap; /* 텍스트가 줄바꿈되지 않도록 설정 */
  text-align: center;
`;
