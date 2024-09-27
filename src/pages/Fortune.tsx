import React, { useState } from 'react';
import axios from 'axios';
import Container from '../components/css/Container';
import Header from '../components/form/Header';
import Contents from '../components/css/Contents';
import theme from 'styles/theme';
import styled, { keyframes } from 'styled-components';
import { userAtom } from 'recoil/userAtom';
import { useRecoilState } from 'recoil';
const Fortune: React.FC = () => {
  // const [user, setUser] = useRecoilState(userAtom);
  const [fortune, setFortune] = useState('');
  const [gender, setGender] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [isResultPage, setIsResultPage] = useState(false); // 화면 전환을 위한 상태 추가

  const user = { nickName: '히잉' };// 임시
  console.log(user);
  // 현재 날짜를 "YYYY년 MM월 DD일" 형식으로 포맷하는 함수
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1; // 월은 0부터 시작하므로 +1 필요
    const day = today.getDate();

    return `${year}년 ${month}월 ${day}일`;
  };

  const getFortune = async () => {
    const currentDate = getCurrentDate(); // 현재 날짜 계산

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'user',
              content: `성별은 ${gender}이고, 생년월일은 ${birthdate}야. 오늘은 ${currentDate}인데, 오늘의 운세를 알려줘! 말투는 반말로하고, 운세 다음 줄바꿈하고 행운 점수를 표시해`,
            },
          ],
          max_tokens: 300,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );
      // OpenAI API의 응답에서 운세 텍스트를 추출해 상태에 저장
      setFortune(response.data.choices[0].message.content);
      setIsResultPage(true); // 결과 페이지로 전환
    } catch (error) {
      console.error('운세를 가져오는 중 오류 발생:', error);
      setFortune('운세를 가져오는 데 문제가 발생했습니다. 다시 시도해 주세요.');
    }
  };

  const resetForm = () => {
    setGender(''); // 성별 입력값 초기화
    setBirthdate(''); // 생년월일 입력값 초기화
    setIsResultPage(false); // 입력 화면으로 전환
  };

  // 운세 결과 화면
  if (isResultPage) {
    return (
      <Container>
        <Header>{'오늘의 운세 결과'}</Header>
        <Contents
          style={{
            background:
              'linear-gradient(180deg, rgba(255,212,93,0.42622986694677867) 24%, rgba(218,113,113,0.8379945728291316) 100%)',
            justifyContent: 'flex-end',
            paddingBottom: '5%',
          }}
        >
          <ResultCard>
            <InnerCard>
              <CardImage src="/path-to-heart-image.png" alt="Heart" />
              <CardTitle>{user.nickName}님의 운세</CardTitle>
              <CardDescription
                style={{ whiteSpace: 'pre-line', textAlign: 'left' }}
              >
                {fortune}
              </CardDescription>
            </InnerCard>
          </ResultCard>
          <FortuneSubmit onClick={resetForm}>다시 보기</FortuneSubmit>
        </Contents>
      </Container>
    );
  }

  // 입력 화면
  return (
    <Container>
      <Header>{'오늘의 운세를 무너보살'}</Header>
      <Contents
        style={{
          background:
            'linear-gradient(180deg, rgba(255,212,93,0.42622986694677867) 24%, rgba(218,113,113,0.8379945728291316) 100%)',
          justifyContent: 'flex-end',
          paddingBottom: '5%',
        }}
      >
        <ImgSection>
          {' '}
          <GlowingImage
            src={`${process.env.PUBLIC_URL}/images/fortune/fortune.png`}
          />
        </ImgSection>
        <div
          style={{
            fontSize: '1.4em',
            fontFamily: 'Pretendard',
            fontWeight: '900',
            marginTop: '10px',
          }}
        >
          오늘 당신에게는 무슨 일이?
        </div>
        <div style={{ fontSize: '0.9em', lineHeight: '1.7' }}>
          간단한 입력으로{' '}
          <span style={{ color: `${theme.color.mainColor} ` }}>
            오늘의 운세
          </span>
          를 알아보세요.
        </div>
        <div style={{ width: '100%', margin: '20px auto 30px' }}>
          <InputContainer>
            <MiniTitle>성별</MiniTitle>
            <input
              type="text"
              placeholder="성별 입력 (예: 남성, 여성)"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <MiniTitle>생년월일</MiniTitle>
            <input
              type="text"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
            />
          </InputContainer>
        </div>
        <FortuneSubmit onClick={getFortune}>운세 보기</FortuneSubmit>
      </Contents>
    </Container>
  );
};

export default Fortune;

// 빛이 퍼지는 애니메이션 정의
const glowAnimation = keyframes`
  0% {
    filter: drop-shadow(-20px 0px 30px rgba(255, 255, 255, 0.7)) 
            drop-shadow(20px 0px 30px rgba(255, 255, 255, 0.7));
  }
  50% {
    filter: drop-shadow(-50px 0px 40px rgba(128, 126, 255, 0.692)) 
            drop-shadow(50px 0px 40px rgba(128, 126, 255, 0.692));
  }
  100% {
    filter: drop-shadow(-20px 0px 30px rgba(255, 255, 255, 0.7)) 
            drop-shadow(20px 0px 30px rgba(255, 255, 255, 0.7));
  }`;
const ImgSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40%;
  width: 50%;
  margin: 3% auto 2%;
  position: relative;
`;

const GlowingImage = styled.img`
  width: 100%;
  position: relative;
  animation: ${glowAnimation} 4s infinite;
  margin: 5% 0;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background-color: rgb(255, 255, 255);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    animation: ${glowAnimation} 4s infinite;
  }
`;
const InputContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 2% auto;
  gap: 10px;
  input {
    font-size: 1em;
    padding: 4%;
    border: none;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.49);
  }
`;
const MiniTitle = styled.div`
  font-size: 1em;
  color: #fff;
  margin-left: 10px;
`;
const FortuneSubmit = styled.button`
  font-family: 'Pretendard';
  width: 90%;
  color: ${theme.color.mainColor};
  background-color: #fff;
  font-size: 1.4em;
  font-weight: 900;
  padding: 3%;
  border-radius: 10px;
`;
const ResultCard = styled.div`
  position: relative;
  width: 65%;
  max-width: 400px;
  padding: 20px;
  margin: 20px auto;
  background-color: #fff;
  border-radius: 20px;
  border: 3px double #fff;
  box-shadow: -5 -5px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const InnerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 20px;
  border: 2px solid ${theme.color.mainColor};
`;

const CardImage = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

const CardTitle = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 10px;
`;

const CardDescription = styled.div`
  font-size: 0.9em;
  line-height: 1.6;
  color: #555;
`;
