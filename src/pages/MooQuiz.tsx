import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Container from '../components/css/Container';
import Header from '../components/form/Header';
import Contents from '../components/css/Contents';
import theme from 'styles/theme';
import QuizData from '../assets/quiz.json';

const MooQuiz = () => {
  const [quizIndex, setQuizIndex] = useState(0); // 현재 퀴즈 인덱스
  const [score, setScore] = useState(0); // 맞은 개수
  const [showResult, setShowResult] = useState(false); // 결과 화면 여부
  const quiz = QuizData.quiz;

  // useEffect(() => {
  //   // 카카오톡 SDK 초기화
  //   window.Kakao.init('YOUR_APP_KEY'); // 자신의 카카오 앱 키로 변경
  // }, []);

  const handleAnswerClick = (optionIndex: number) => {
    // 정답인지 확인
    if (optionIndex === quiz[quizIndex].answer) {
      setScore(score + 1); // 정답일 경우 점수 증가
    }

    // 마지막 문제인지 확인
    if (quizIndex < quiz.length - 1) {
      setQuizIndex(quizIndex + 1); // 다음 문제로 이동
    } else {
      setShowResult(true); // 결과 화면 표시
    }
  };
  // const handleShareClick = () => {
  //   const shareUrl = 'https://yourwebsite.com/quiz'; // 공유할 URL
  //   const shareText = `무퀴즈를 푸세요! 총 ${quiz.length}문제 중 ${score}문제를 맞췄어요!`;

  //   window.Kakao.Share.sendDefault({
  //     objectType: 'feed',
  //     content: {
  //       title: '무퀴즈',
  //       description: shareText,
  //       imageUrl: `${process.env.PUBLIC_URL}/images/quiz/Desertisland.png`,
  //       link: {
  //         webUrl: shareUrl,
  //         mobileWebUrl: shareUrl,
  //       },
  //     },
  //     buttons: [
  //       {
  //         title: '바로가기',
  //         link: {
  //           webUrl: shareUrl,
  //           mobileWebUrl: shareUrl,
  //         },
  //       },
  //     ],
  //   });
  // };

  return (
    <Container>
      <Header>무퀴즈</Header>
      <Contents>
        {showResult ? (
          <ResultContainer>
            <div>퀴즈 종료!</div>
            <div>
              총 {quiz.length}문제 중 {score}문제를 맞췄어요!
            </div>
            {/* <ShareButton onClick={handleShareClick}>공유하기</ShareButton> */}
          </ResultContainer>
        ) : (
          <MQuizContainer>
            <div
              style={{
                margin: 'auto',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                gap: '6%',
              }}
            >
              <div
                style={{
                  margin: '0 auto',
                  display: 'flex',
                  textAlign: 'center',
                  fontSize: '36px',
                  alignItems: 'flex-end',
                  color: `${theme.color.mainColor}`,
                }}
              >
                <span>{quizIndex + 1}</span>
                <span
                  style={{
                    fontSize: '14px',
                    justifyContent: 'flex-end',
                    marginBottom: '5px',
                    color: '#afafaf',
                  }}
                >
                  / {quiz.length}
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  fontSize: '1.4em',
                  padding: '10px',
                  margin: '0 auto',
                  height: '8dvh',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {quiz[quizIndex].question}
              </div>
            </div>
            <img
              src={`${process.env.PUBLIC_URL}/images/quiz/Desertisland.png`}
              style={{ width: '150px', margin: '7% auto' }}
              alt="quiz illustration"
            />
            <div style={{ margin: '0 auto', display: 'flex', gap: '15px' }}>
              {quiz[quizIndex].options.map((option: string, index: number) => (
                <QuizBtn
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  style={{
                    color:
                      index === quiz[quizIndex].answer
                        ? `${theme.color.mainColor}`
                        : 'white',
                    backgroundColor:
                      index === quiz[quizIndex].answer
                        ? '#f7f7f7'
                        : `${theme.color.mainColor}`,
                  }}
                >
                  {option}
                </QuizBtn>
              ))}
            </div>
          </MQuizContainer>
        )}
      </Contents>
    </Container>
  );
};

export default MooQuiz;

const MQuizContainer = styled.div`
  width: 100%;
  height: 85%;
  /* padding: 5% 0; */
  font-family: Cafe24Ssurround;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: auto;
`;

const QuizBtn = styled.button`
  font-family: Cafe24Ssurround;
  width: 150px;
  height: 200px;
  border-radius: 20px;
  box-shadow:
    0 10px 20px rgba(37, 37, 37, 0.05),
    0 6px 10px rgba(0, 0, 0, 0.158);
  color: white;
  font-size: 24px;
  font-weight: 800;
  background-color: ${theme.color.mainColor};
  &&:hover {
    box-shadow:
      0 10px 20px rgba(0, 0, 0, 0.2),
      0 6px 4px rgba(0, 0, 0, 0.2);
  }
`;

const ResultContainer = styled.div`
  text-align: center;
  font-size: 24px;
  color: ${theme.color.mainColor};
  font-weight: 900;
`;
