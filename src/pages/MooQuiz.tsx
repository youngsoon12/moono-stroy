import styled from 'styled-components';
import Comtainer from '../components/css/Container';
import Header from '../components/css/Header';
import Contents from '../components/css/Contents';

const MooQuiz = () => {
  return (
    <Comtainer>
      <Header>
        <span style={{ flex: '0.5' }}>
          <HeaderIcon
            src={`${process.env.PUBLIC_URL}/images/header/back.png`}
          />
        </span>
        <span
          style={{ textAlign: 'center', fontSize: '20px', fontWeight: '700' }}
        >
          무퀴즈
        </span>
        <span style={{ display: 'flex', gap: '10px' }}>
          {/* <span
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <HeaderIcon
              src={`${process.env.PUBLIC_URL}/images/header/stamp.png`}
              style={{ width: '26px' }}
            />
          </span> */}
          {/* <span
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div style={{ fontSize: '20px', fontWeight:'800' }}>반가워요.</div>
            <div>퀸가비님</div>
          </span> */}
        </span>
      </Header>
      <Contents>
        <MQuizContainer>
          <div
            style={{
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              gap: '10px',
            }}
          >
            <div
              style={{
                margin: '0 auto',
                display: 'flex',
                textAlign: 'center',
                fontSize: '36px',
                alignItems: 'flex-end',
                color: '#e947ae',
              }}
            >
              <span>01</span>
              <span
                style={{
                  fontSize: '14px',
                  justifyContent: 'flex-end',
                  marginBottom: '5px',
                  color: '#afafaf',
                }}
              >
                /10
              </span>
            </div>
            <div
              style={{ fontSize: '24px', padding: '10px', margin: '0 auto' }}
            >
              무너의 고향은 어디일까요?
            </div>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/images/quiz/Desertisland.png`}
            style={{ width: '183px', margin: '30px auto' }}
          />
          <div style={{ margin: '0 auto', display: 'flex', gap: '15px' }}>
            <QuizBtn>천국</QuizBtn>
            <QuizBtn style={{ color: '#e947ae', backgroundColor: '#f7f7f7' }}>
              용궁
            </QuizBtn>
          </div>
        </MQuizContainer>
      </Contents>
    </Comtainer>
  );
};
export default MooQuiz;
const HeaderIcon = styled.img`
  width: 15px;
  /* height: 30px; */
`;

const MQuizContainer = styled.div`
  width: 100%;
  height: 550px;
  font-family: Cafe24Ssurround;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
const QuizBtn = styled.button`
  font-family: Cafe24Ssurround;
  width: 150px;
  height: 200px;
  border-radius: 20px;
  /* box-shadow:
    inset 0px 0px 5px rgba(253, 253, 253, 0.753),
    0px 4px 4px #00000025; */
  box-shadow:
    0 10px 20px rgba(37, 37, 37, 0.05),
    0 6px 10px rgba(0, 0, 0, 0.158);
  color: white;
  font-size: 24px;
  font-weight: 800;
  background-color: #e947ae;
  &&:hover {
    box-shadow:
      0 10px 20px rgba(0, 0, 0, 0.2),
      0 6px 4px rgba(0, 0, 0, 0.2);
  }
`;
