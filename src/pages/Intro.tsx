import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Container from '../components/css/Container';

const Intro = () => {
  const navigate = useNavigate();

  return (
    <Container
      style={{
        height: '100dvh',
        backgroundColor: '#171717',
        color: '#fff',
        position: 'relative',
      }}
    >
      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '80%',
        }}
      >
        <Toptext>
          <span style={{ fontSize: '16px', fontWeight: '200' }}>
            내 <span style={{ color: '#9ffb4b' }}>이야기</span> 들어줄래?
          </span>
          <div
            style={{
              textAlign: 'center',
              fontSize: '1.4em',
              fontWeight: '500',
              margin: '2vh 0',
              lineHeight: '3vh',
            }}
          >
            <div>
              <span style={{ color: '#E947AE' }}>당신</span>에게 들려주는
            </div>
            <div
              style={{ fontSize: '1.1em', color: '#E947AE', fontWeight: '800' }}
            >
              무너 이야기
            </div>
          </div>
        </Toptext>

        <ImgContainer>
          <img
            src={`${process.env.PUBLIC_URL}/images/intro/HotPink.png`}
            alt="Hot Pink"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/intro/LogoLess2.png`}
            alt="Logo"
          />
        </ImgContainer>
      </div>
      <StartButton
        onClick={() => {
          navigate('/login');
        }}
      >
        로그인하기
      </StartButton>
    </Container>
  );
};

export default Intro;

// bounce-in-top 애니메이션 정의
const bounceInTop = keyframes`
  0% {
    transform: translateY(-50vh);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    transform: translateY(0);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    transform: translateY(-10vh);
    animation-timing-function: ease-in;
  }
  72% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  81% {
    transform: translateY(-5vh);
    animation-timing-function: ease-in;
  }
  90% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  95% {
    transform: translateY(-2vh);
    animation-timing-function: ease-in;
  }
  100% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
`;

// ImgContainer는 로고 이미지를 담는 컨테이너
const ImgContainer = styled.div`
  position: relative;
  width: 90vw; /* 이미지를 뷰포트 너비의 60%로 설정 */
  /* height: 45dvh; */
  max-height: auto;
  max-width: 400px; /* 최대 너비 400px */
  margin: 0 auto; /* 가운데 정렬 */

  img {
    position: absolute;
    width: 100%; /* 컨테이너의 100% 너비를 가짐 */
    height: auto;
    top: 0;
    left: 0;
  }

  /* HotPink 이미지에 애니메이션 적용 */
  img:nth-child(1) {
    z-index: 1;
    top: 15%;
    animation: ${bounceInTop} 1.1s both;
  }

  /* 로고 이미지 */
  img:nth-child(2) {
    position: relative;
    z-index: 2;
    width: 87%; /* 로고 이미지는 컨테이너의 80% 너비로 설정 */
    max-width: 460px; /* 최대 너비 300px */
    height: auto;
    left: 10%;
  }
`;

const StartButton = styled.button`
  z-index: 2;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #e947ae;
  height: 13%;
  border: none;
  border-radius: 30px 30px 0 0;
  font-size: 1.5em;
  font-weight: 900;
  color: #171717;
  text-align: center;
  justify-content: center;
  align-items: center;
  letter-spacing: 3px;
  display: flex;
  cursor: pointer;
  &&:hover {
    color: #9ffb4b;
    font-weight: 800;
  }
`;

const Toptext = styled.div`
  margin: 5% 0;
  text-align: center;
`;
