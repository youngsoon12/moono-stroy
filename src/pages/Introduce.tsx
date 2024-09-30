import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Container from '../components/css/Container';
import Header from '../components/form/Header';
import Contents from '../components/css/Contents';
import IntroduceBtn from '../components/form/IntroduceBtn';
import { useTypingEffect } from '../components/hook/useTypingEffect';
import data from '../assets/introduce.json';
import theme from 'styles/theme';
import { userAtom } from 'recoil/userAtom';
import { useRecoilState } from 'recoil';
import { UserInfoAPI } from '../api/UserInfoAPI';
import { StampAPI } from 'api/StampAPI';
import { modeAtom } from 'recoil/modeAtom';
import ChatBubble from '../components/form/ChatBubble';
interface Message {
  text: string;
  isButton: boolean;
}

export const Introduce = (props: any) => {
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [currentData, setCurrentData] = useState(data[pageIndex]);
  const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false);
  const [user, setUser] = useRecoilState(userAtom);

  const [stampStatus, setStampStatus] = useState({
    id: '',
    nickName: '',
    oneMission: false,
    twoMission: false,
    threeMission: false,
    fourMission: false,
    fiveMission: false,
  });

  const [isDarkMode] = useRecoilState(modeAtom); // 다크모드 상태
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (user && user.sub) {
      UserInfoAPI(user.sub)
        .then((data) => {
          setStampStatus({
            id: data.id,
            nickName: data.nickName,
            oneMission: true,
            twoMission: data.twoMission,
            threeMission: data.threeMission,
            fourMission: data.fourMission,
            fiveMission: data.fiveMission,
          });
        })
        .catch((error) => {
          console.error('유저 정보 API 호출 실패:', error);
        });
    }
  }, [user]);

  useEffect(() => {
    if (pageIndex >= 0) {
      setCurrentData(data[pageIndex]);
      setIsDataLoaded(true);
    }
  }, [pageIndex]);

  const { displayedText, handleClick } = useTypingEffect(
    isDataLoaded ? currentData.text : '',
    100
  );

  const handleNextPage = () => {
    if (pageIndex < data.length - 1) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: displayedText, isButton: false },
        { text: currentData.buttonText, isButton: true },
      ]);
      setPageIndex(pageIndex + 1);
      setIsDataLoaded(false);
    } else {
      setPageIndex(-1);
    }
  };

  useEffect(() => {
    const handleGlobalClick = () => {
      handleClick();
    };

    document.addEventListener('click', handleGlobalClick);

    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, [handleClick]);

  const goToMain = () => {
    StampAPI(stampStatus)
      .then((data) => {
        console.log('스템 API 호출 성공:', data);
        alert('무너 소개 미션 완료 !');
        window.location.href = '/main';
      })
      .catch((error) => {
        console.error('스템 API 호출 실패:', error);
      });
  };
  return (
    <Container isDarkMode={isDarkMode}>
      <Header
        iconSrc={
          isDarkMode
            ? `${process.env.PUBLIC_URL}/images/header/whiteBack.png`
            : `${process.env.PUBLIC_URL}/images/header/blackBack.png`
        }
        bgColor={isDarkMode ? '#20232a' : '#fff'}
      >
        {'무너 소개서'}
      </Header>

      {pageIndex >= 0 ? (
        <StyledContents isDarkMode={isDarkMode}>
          <ContentSection style={{ height: '50%' }}>
            {/* <TextSection style={{ whiteSpace: 'pre-wrap' }}>
              {displayedText && <span>{displayedText}</span>}{' '}
            </TextSection> */}
            <ImgSection>
              <img src={currentData.img} alt="무너 이미지" />
            </ImgSection>
          </ContentSection>
          <ChattingContainer>
            <WelcomeMessage isDarkMode={isDarkMode}>
              채팅방에 입장하셨습니다.
            </WelcomeMessage>{' '}
            {/* 추가된 부분 */}
            {messages.map((message, index) => (
              <ChatBubble key={index} isButton={message.isButton}>
                {message.text}
              </ChatBubble>
            ))}
            {isDataLoaded && (
              <ChatBubble isButton={false}>{displayedText}</ChatBubble>
            )}
            {pageIndex != 5 ? (
              <IntroduceBtn onClick={handleNextPage} isDarkMode={isDarkMode}>
                {currentData.buttonText} {/* 버튼 텍스트 */}
              </IntroduceBtn>
            ) : (
              <GoTMI onClick={handleNextPage}>TMI보러가기</GoTMI>
            )}
          </ChattingContainer>
        </StyledContents>
      ) : (
        <StyledContents isDarkMode={isDarkMode}>
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              marginTop: '17%',
            }}
          >
            <ContentSection style={{ textAlign: 'center' }}>
              <ContentsStyle>
                <ImgSection>
                  <SemiTitle>SKILL</SemiTitle>
                  <img
                    src={
                      isDarkMode
                        ? `${process.env.PUBLIC_URL}/images/intro/DarkModeSkill.png`
                        : `${process.env.PUBLIC_URL}/images/intro/무너능력.png`
                    }
                    alt="무너 능력치"
                  />
                </ImgSection>
                <SkillText isDarkMode={isDarkMode}>
                  인내심 말고는 못하는게 없는 <br />
                  <span style={{ fontSize: '0.7em' }}>(거의)</span> 꽉 찬 오각형
                </SkillText>
              </ContentsStyle>
              <ContentsStyle>
                <TMIStyle isDarkMode={isDarkMode}>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/intro/alien.png`}
                  />
                  무너의 MBTI는 ENTJ이다.
                </TMIStyle>
                <ImgSection style={{ margin: 'auto' }}>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/intro/moo3.png`}
                    style={{
                      width: '170px',
                    }}
                  />
                </ImgSection>
              </ContentsStyle>
            </ContentSection>
          </div>
          <GoTMI onClick={goToMain} style={{ marginBottom: '20px' }}>
            미션 완료
          </GoTMI>
        </StyledContents>
      )}
    </Container>
  );
};
const WelcomeMessage = styled.div<{ isDarkMode: boolean }>`
  margin: 0 auto;
  width: 50%;
  text-align: center;
  padding: 10px 0;
  font-size: 10px;
  color: ${({ isDarkMode }: { isDarkMode: boolean }) =>
    isDarkMode ? '#fff' : '#000'};
  margin-bottom: 10px; /* 아래쪽 여백 추가 */
  background-color: #e4e4e465;
  border-radius: 10px;
`;
// 스타일 정의
const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const StyledContents = styled(Contents)`
  /* display: flex; */

  align-items: center;
  justify-content: center;
  /* margin-top: 15%; */
`;

const TextSection = styled.div`
  height: 50px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  line-height: 1.3;
  /* margin-bottom: 10%; */
`;

const ImgSection = styled.div`
  /* width: 100%; */
  img {
    width: 90%;
    max-width: 250px;
    height: auto;
  }
  display: flex;
  margin: 0 auto;
  align-items: center;
`;

const SemiTitle = styled.div`
  font-size: 1em;
  text-align: center;
  display: flex;
  font-family: 'RixInooAriDuriR';
  font-weight: 900;
  color: #fff;
  background-color: ${theme.color.mainColor};
  margin: auto;
  padding: 5px 10px;
  border-radius: 20px;
`;

const ContentsStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3%;
  width: 80%;
  font-weight: 400;
  line-height: 1.3;
  font-size: 12px;
`;

const SkillText = styled.div<{ isDarkMode: any }>`
  width: 100%;
  margin: auto;
  color: ${({ isDarkMode }) => (isDarkMode ? '#000' : '#000')};
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#fff' : '#f3f3f3')};
  border-radius: 0 20px 0 20px;
  padding: 6% 0;
  text-align: center;
  margin: 3% auto 0%;
`;

const TMIStyle = styled.div<{ isDarkMode: any }>`
  display: flex;
  text-align: center;
  color: #6d6d6d;
  font-size: 0.9em;
  justify-content: center;
  color: ${({ isDarkMode }) => (isDarkMode ? '#fff' : '#000')};

  img {
    width: 1.3em;
    margin-right: 5px;
  }
`;

const GoTMI = styled.button`
  position: absolute;
  bottom: 10px;
  left: 50%;
  width: 70%;
  max-width: 430px;
  font-weight: 400;
  font-size: 1.4em;
  transform: translateX(-50%);
  background-color: ${theme.color.mainColor};
  color: #fff;
  padding: 1%;
  border-radius: 10px;
  margin: 0 auto;
`;
const ChattingContainer = styled.div`
  width: 80%;
  height: 50%;
  height: 600px;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
  margin-bottom: 20%;
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera에서 스크롤바 숨기기 */
  }
`;
