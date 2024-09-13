import Container from '../components/css/Container';
import styled from 'styled-components';
import Header from '../components/css/Header';

const Main = (props: any) => {
  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        backgroundColor: '#FAFAFA',
        overflow: 'scroll',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          display: 'flex',
          zIndex: '2',
          width: '100%',
          height: '210px',
          backgroundColor: '#e947ae',
        }}
      >
        <Header>헤더입니다.</Header>
      </div>

      <div style={{ position: 'relative', marginTop: '80px' }}>
        {/* 이미지가 분홍색과 흰색 경계에 위치하도록 조정 */}
        <img
          src={`${process.env.PUBLIC_URL}/images/main/둥둥무너2.png`}
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: '3', // 헤더보다 위에 배치
            width: 'auto',
            height: '113px', // 적당한 크기로 설정
          }}
          alt="/"
        />
        <div
          style={{
            textAlign: 'center',
            margin: '100px 0',
            fontFamily: 'Cafe24Ssurround',
          }}
        >
          <div style={{ fontSize: '32px' }}>안녕? 나는 무너야</div>
          <div style={{ fontSize: '20px' }}>내 이야기를 들어줄래?</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <span style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
            <MiddleMenu></MiddleMenu>
            <MiddleMenu></MiddleMenu>
          </span>
          <MiddleMenu style={{ width: '100%' }}></MiddleMenu>
          <span style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
            <MiddleMenu></MiddleMenu>
            <MiddleMenu></MiddleMenu>
          </span>
        </div>
      </div>
    </Container>
  );
};

export default Main;

const MiddleMenu = styled.button`
  width: 180px;
  height: 150px;
  border-radius: 20px;
  background-color: white;
  color: #292929;
  box-shadow:
    0 10px 20px rgba(37, 37, 37, 0.05),
    0 6px 10px rgba(0, 0, 0, 0.158);
`;
