import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Container from '../components/css/Container';
const Intro = () => {
  const navigate = useNavigate();

  return (
    <Container
      style={{ height: '100dvh', backgroundColor: '#171717', color: '#fff' }}
    >
      <Toptext>
        <span style={{ fontSize: '16px', fontWeight: '200' }}>
          내 <span style={{ color: '#9ffb4b' }}>이야기</span> 들어줄래?
        </span>
        <div
          style={{
            textAlign: 'center',
            fontSize: '22px',
            fontWeight: '500',
            margin: '20px 0',
            lineHeight: '25px',
          }}
        >
          <div>
            <span style={{ color: '#E947AE' }}>당신</span>에게 들려주는
          </div>
          <div
            style={{ fontSize: '24px', color: '#E947AE', fontWeight: '800' }}
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
        transform: translateY(-500px);
        animation-timing-function: ease-in;
        opacity: 0;
      }
      38% {
        transform: translateY(0);
        animation-timing-function: ease-out;
        opacity: 1;
      }
      55% {
        transform: translateY(-65px);
        animation-timing-function: ease-in;
      }
      72% {
        transform: translateY(0);
        animation-timing-function: ease-out;
      }
      81% {
        transform: translateY(-28px);
        animation-timing-function: ease-in;
      }
      90% {
        transform: translateY(0);
        animation-timing-function: ease-out;
      }
      95% {
        transform: translateY(-8px);
        animation-timing-function: ease-in;
      }
      100% {
        transform: translateY(0);
        animation-timing-function: ease-out;
      }
    `;

// Container는 기본적으로 위치를 기준으로 삼기 위해 relative로 설정
// const Container = styled.div`
//   color: #fff;
//   max-width: 480px;
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin: 0 auto;
//   background-color: #171717;
//   position: relative;
//   overflow: hidden; /* 자식 요소가 Container를 벗어나지 않도록 */
//   height: calc(var(--vh, 1vh) * 100);
// `;

// ImgContainer는 로고 이미지를 담는 컨테이너
const ImgContainer = styled.div`
  position: relative; /* 이미지 겹치기 위한 기준점 */
  width: 400px; /* 필요한 경우 너비 조정 */
  height: 400px; /* 필요한 경우 높이 조정 */
  max-width: 90dvw;
  min-height: auto;
  flex: 1;
  /* min-height: 400px; 최소 높이 지정 */
  img {
    position: absolute; /* 이미지가 겹치도록 설정 */
    width: 100%; /* 이미지를 같은 크기로 설정 */
    height: auto;
    top: 0;
    left: 0;
  }

  /* HotPink 이미지에 애니메이션 적용 */
  img:nth-child(1) {
    z-index: 1; /* 첫 번째 이미지 아래쪽 */
    top: 10%;
    animation: ${bounceInTop} 1.1s both; /* 애니메이션 적용 */
  }

  img:nth-child(2) {
    z-index: 2; /* 두 번째 이미지 위쪽 */
    width: 350px;
    max-width: 85dvw;
    height: auto;
    left: 10%;
  }
`;
const StartButton = styled.button`
  width: 100%;
  display: flex;
  background-color: #e947ae;
  height: 13%;
  border: none;
  border-radius: 30px 30px 0 0;
  font-size: 26px;
  font-weight: 900;
  color: #171717;
  text-align: center;
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
  letter-spacing: 3px;
  &&:hover {
    color: #9ffb4b; /* hover 시 텍스트 색상 변경 */
    font-weight: 800; /* hover 시 폰트 두께 변경 */
    /* background-color: #fff; */
  }
`;
const Toptext = styled.div`
  margin: 15% 0 0 0;
  text-align: center;
`;
