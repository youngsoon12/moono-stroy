import Container from '../components/css/Container';
import styled from 'styled-components';
import Header from '../components/css/Header';
const Main = (props: any) => {
  return (
    <Container
      style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}
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
      <img src={`${process.env.PUBLIC_URL}/images/main/둥둥무너2.png`} />
      <div>
        <div>안녕? 나는 무너야</div>
        <div>내 이야기를 들어줄래?</div>
      </div>
      <div>
        <span style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
          <MiddleMenu></MiddleMenu>
          <MiddleMenu></MiddleMenu>
        </span>
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
