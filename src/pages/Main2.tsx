import React from 'react';
import styled from 'styled-components';
import Container from '../components/css/Container';

const Main2 = (props: any) => {
  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        overflow: 'auto',
      }}
    >
      <div
        style={{
          flex: '1',
          backgroundColor: '#c731ba',
          width: '100%',
          zIndex: '1',
        }}
      >
        이것은 헤더
      </div>
      <IntroStyle>
        <img
          src={`${process.env.PUBLIC_URL}/images/main/HiMoono.png`}
          alt="Hi Moono"
        />
        <TextOverlay>
          <div style={{ textAlign: 'center', fontSize: '32px' }}>
            안녕? 나는 무너야
          </div>
          <div style={{ textAlign: 'center', fontSize: '20px', fontWeight:'400' }}>
            내 이야기를 들어줄래?
          </div>
        </TextOverlay>
      </IntroStyle>
      <div style={{ flex: '5.6', backgroundColor: 'green', width: '100%' }}>
        이것은 메뉴
      </div>
      <div style={{ flex: '1', backgroundColor: 'yellow', width: '100%' }}>
        이것은 푸터
      </div>
    </Container>
  );
};

export default Main2;

const IntroStyle = styled.div`
  flex: 2.5;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; /* 가로 중앙 정렬 */
  justify-content: center; /* 세로 중앙 정렬 */
  position: relative; /* 가상 요소의 기준을 잡기 위한 설정 */
  background-image: linear-gradient(to top, #ffffff 50%, #c731ba 50%);
  margin: auto;
  padding-bottom: 5dvh;

  img {
    width: 300px;
    margin: 0 auto; /* 이미지도 중앙에 위치 */
    z-index: 1;
  }
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flexbox;
  flex-direction: column;
  z-index: 2;
  color: #121212; /* 텍스트 색상 */
  font-size: 1.2rem;
  text-align: center;
  font-family: 'Cafe24Ssurround';
  letter-spacing: -0.5px;
  align-content: center;
  top: 30%;
`;
