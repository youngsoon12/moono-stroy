import React from 'react';
import { useNavigate } from 'react-router-dom';
import { userAtom } from 'recoil/userAtom';
import styled from 'styled-components';
import Container from '../components/css/Container';
import theme from 'styles/theme';
import { useRecoilState } from 'recoil';
const Main3 = (props: any) => {
  const navigate = useNavigate();
  const [user] = useRecoilState(userAtom);

  console.log(user);

  const handleButtonClick = (id: string) => {
    navigate(`/contIntro/${id}`);
  };

  const hadleStampClick = () => {
    navigate('/stamp');
  };
  return (
    <Container style={{ padding: '15px', overflowY: 'scroll' }}>
      <HederStyled>
        <LogoStyled>MOOS</LogoStyled>
        <LogoRightSection>
          <img
            src={`${process.env.PUBLIC_URL}/images/main/stamp.png`}
            alt="스탬프"
            onClick={() => hadleStampClick()}
            style={{ cursor: 'pointer' }}
          />

          <img
            src={`${process.env.PUBLIC_URL}/images/main/bell.png`}
            alt="알람"
          />

          <img
            src={`${process.env.PUBLIC_URL}/images/main/user.png`}
            alt="알람"
          />
        </LogoRightSection>
      </HederStyled>
      <IntroMoo>
        <IntroText style={{ fontFamily: 'Pretendard' }}>
          <div style={{ fontSize: '1.6em', letterSpacing: '-1px' }}>안녕?</div>
          <div style={{ fontSize: '1.6em', letterSpacing: '-1px' }}>
            나는 무너야 : )
          </div>
          <div
            style={{
              fontSize: '1em',
              fontWeight: '500',
              lineHeight: '2.3em',
            }}
          >
            내 이야기를 들어줄래?
          </div>
        </IntroText>
        <IntroMooImg>
          <img
            src={`${process.env.PUBLIC_URL}/images/moono/하이무너.png`}
            alt="알람"
          />
        </IntroMooImg>
      </IntroMoo>
      <MenuContanier>
        <FirstColButon>
          <Menubutton
            style={{
              // backgroundColor: '#6b6b6b',
              backgroundColor: '#72dcfc',
              textAlign: 'left',
              flexDirection: 'column',
              fontSize: '1.2em',
              color: '#fff',
              // border: '1px solid #0000007b',
            }}
            onClick={() => handleButtonClick('introduce')}
          >
            <div style={{ height: '35%', letterSpacing: '-1px' }}>
              안녕?
              <br />
              나를 소개할게
            </div>
            <div style={{ height: '70%' }}>
              <img
                src={`${process.env.PUBLIC_URL}/images/moono/2D하이.png`}
                alt="무퀴즈"
                style={{
                  height:'190%',
                  display: 'flex',
                  marginLeft:'10%'
                }}
              />
            </div>
          </Menubutton>
          <Menubutton
            style={{
              display: 'flex',
              backgroundColor: '#c9c9c9',
              fontWeight: '700',
              textAlign: 'left',
              flexDirection: 'column',
              color: '#fff',
            }}
            onClick={() => handleButtonClick('mooQuiz')}
          >
            <div
              style={{
                letterSpacing: '-1px',
                height: '20%',
                marginBottom: '5%',
              }}
            >
              나에 대해서
              <br />
              얼마나 알고 있어?
            </div>
            <div style={{}}>
              <img
                src={`${process.env.PUBLIC_URL}/images/moono/2D헤드셋.png`}
                alt="무퀴즈"
                style={{
                  width: '100%',
                  marginLeft: '20%',
                  marginTop: '5%',
                }}
              />
            </div>
          </Menubutton>
        </FirstColButon>
        <LargeButton
          style={{
            backgroundColor: `${theme.color.mainColor}`,
            display: 'flex',
          }}
          onClick={() => handleButtonClick('cheerup')}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/moono/2D둥둥.png`}
              alt="무퀴즈"
              style={{
                width: '80%', // 이미지가 div의 너비에 맞게 조정
                marginLeft: '25%',
              }}
            />
            <div
              style={{
                color: '#fff',
                zIndex: 2,
                position: 'absolute',
                top: '0',
                left: '0',
                fontSize: '1.2em',
                textAlign: 'left',
              }}
            >
              무너를
              <br />
              응원해줘!
            </div>
          </div>
        </LargeButton>
        <ThirdButton>
          <Menubutton
            style={{
              backgroundColor: `${theme.color.pointColor}`,
              textAlign: 'left',
              fontWeight: '700', // 여기서 font-weight를 설정
              display: 'inline-block',
            }}
            onClick={() => handleButtonClick('fortune')}
            bgImage={`${process.env.PUBLIC_URL}/images/main/clover2.png`}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <div style={{ flexDirection: 'column', width: '100%' }}>
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: '500',
                  }}
                >
                  오늘의 나는? 어떨까?
                </div>
                <span
                  style={{
                    color: `${theme.color.mainColor}`,
                    fontSize: '20px',
                    fontWeight: '800',
                  }}
                >
                  오늘의 운세
                </span>
              </div>
            </div>
          </Menubutton>

          <Menubutton
            onClick={() => handleButtonClick('fourcut')}
            style={{ textAlign: 'left' }}
          >
            {' '}
            <div style={{}}>
              <div
                style={{
                  fontSize: '20px',
                  fontWeight: '800',
                  color: `${theme.color.mainColor}`,
                }}
              >
                무너 만들기
              </div>
              <div style={{ fontSize: '12px', fontWeight: '500' }}>
                나만의 무너를 만들어봐
              </div>
            </div>
          </Menubutton>
        </ThirdButton>
      </MenuContanier>
    </Container>
  );
};

export default Main3;

interface MenubuttonProps {
  bgImage?: string; // 배경 이미지 프로퍼티 추가
}
const HederStyled = styled.div`
  display: flex;
  width: 100%;
  height: 7%;
`;

const IntroMoo = styled.div`
  display: flex;
  width: 100%;
  height: 25%;
`;

const MenuContanier = styled.div`
  height: 63%;
  display: flex;
  grid-gap: 2%;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
`;
const FirstColButon = styled.div`
  display: flex;
  flex: 1;
  gap: 3%;
  width: 100%; /* 전체 너비 사용 */
  height: 40%;
`;
const Menubutton = styled.button<MenubuttonProps>`
  flex: 1;
  border-radius: 15px;
  font-size: 1.1em;
  font-weight: 600;
  color: #121212;
  overflow: hidden;
  padding: 5%;

  background-image: url(${(props) => props.bgImage}); /* 배경 이미지 설정 */
  background-size: contain; /* 배경 이미지 크기 조정 */
  background-repeat: no-repeat;
  background-position: 105% 50%; // 위치 조정
  /* background-position: top right; // 위치 조정 */
`;
const LargeButton = styled(Menubutton)`
  flex: 0.6;
  margin: auto 0;
`;
const ThirdButton = styled.div`
  display: flex;
  flex: 0.6;
  gap: 3%;
  margin: auto 0;
  width: 100%; /* 전체 너비 사용 */
`;

const LogoStyled = styled.div`
  /* font-family: Pretendard; */
  font-weight: 900;
  color: ${theme.color.mainColor};
  font-size: 2em;
  letter-spacing: -4px;
  width: 60%;
`;
const LogoRightSection = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-end; /* 우측 정렬 */
  img {
    height: 55%;
    margin-left: 10%;
  }
`;
const IntroText = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center; /* 세로 중앙 정렬 */
  line-height: 2em;
  width: 100%;
  font-weight: bold;
  margin-left: 5%;
`;
const IntroMooImg = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  /* margin-left: 5%; */
  img {
    height: 100%;
  }
`;
