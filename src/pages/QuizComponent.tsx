import React, { useState, useEffect } from 'react';
interface Quiz {
  id: number;
  question: string;
  options: string[];
  answer: number;
}

const QuizComponent = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  // JSON 파일에서 퀴즈 데이터를 불러오기
  useEffect(() => {
    fetch('/assets/quiz.json') // public 폴더 내부 접근 경로
      .then((res) => res.json())
      .then((data) => setQuizzes(data))
      .catch((err) => console.error(err));
  }, []);

  // 선택한 답을 제출하는 함수
  const handleSubmitAnswer = () => {
    if (selectedOption === quizzes[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion < quizzes.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsQuizFinished(true);
    }
    setSelectedOption(null); // 다음 문제로 넘어갈 때 선택 초기화
  };

  // 카운트된 점수에 따른 이미지 보여주기
  const getResultImage = () => {
    if (score === quizzes.length) {
      return '/images/perfect-score.png';
    } else if (score >= quizzes.length / 2) {
      return '/images/good-score.png';
    } else {
      return '/images/bad-score.png';
    }
  };

  return (
    <div>
      {!isQuizFinished ? (
        <div>
          {quizzes.length > 0 && (
            <>
              <h2>{quizzes[currentQuestion].question}</h2>
              <div>
                {quizzes[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedOption(index)}
                    style={{
                      backgroundColor:
                        selectedOption === index ? 'lightblue' : 'white',
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <button onClick={handleSubmitAnswer}>Submit Answer</button>
            </>
          )}
        </div>
      ) : (
        <div>
          <h2>
            Your score: {score}/{quizzes.length}
          </h2>
          <img src={getResultImage()} alt="Result" />
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
