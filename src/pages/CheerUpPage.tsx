import Header from '../components/css/HeaderArea';
import Container from '../components/css/Container';
import Contents from '../components/css/Contents';
import React from 'react';
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import BoardInput from '../components/form/BoardInput';
import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userAtom } from 'recoil/userAtom';
import { GetBoardAPI, PostBoardAPI, DeleteBoardAPI } from 'api/BoardAPI';

const CheerUpPage: React.FC = () => {
  const navigate = useNavigate();
  const [user] = useRecoilState(userAtom);
  const [textList, setTextList] = useState([]);
  const [postText, setPostText] = useState({
    userId: user.sub,
    content: '',
    title: user.nickName,
  });
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const data = await GetBoardAPI();
      setTextList(data);
    };
    getData();
  }, [refresh]);
  // ------------ 함수 존 시작 --------------------------------------------------------
  const onBackBtn = () => {
    // 뒤로 가기 함수
    navigate('/main');
  };
  console.log(textList);
  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostText({
      ...postText,
      userId: user.sub,
      content: e.target.value,
      title: user.nickName,
    });
  };

  const onClickInputBtn = async () => {
    try {
      const postData = await PostBoardAPI(postText);
      setRefresh(!refresh);
      setPostText({ ...postData, content: '' });
    } catch (error) {
      console.error('에러 입니다:', error);
    }
  };

  const onClickDeleteBtn = async (e: any) => {
    try {
      await DeleteBoardAPI(e);
      setRefresh(!refresh);
    } catch (error) {
      console.error('에러 입니다:', error);
    }
  };
  // ------------ 함수 존 끝 --------------------------------------------------------

  return (
    <Container>
      <Header style={{ position: 'relative' }}>
        <ArrowBackIosNewSharpIcon onClick={onBackBtn} />
        <HeaderTitle>무너 응원하기</HeaderTitle>
      </Header>
      <Contents>
        <ImgArea>
          <img
            src={`${process.env.PUBLIC_URL}/images/moono/하이무너.png`}
            alt="무퀴즈"
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
            }}
          />
        </ImgArea>
        <BoardArea>
          {textList &&
            textList.map((data: any, idx) => {
              return (
                <TextLine key={idx}>
                  <span>
                    <span style={{ fontWeight: 'bold', fontSize: '14px' }}>
                      {data.title}{' '}
                    </span>
                    <span
                      style={{
                        fontWeight: 'normal',
                        fontSize: '14px',
                        color: 'fff',
                      }}
                    >
                      : {data.content}{' '}
                    </span>
                  </span>
                  {data.userId === user.sub && (
                    <span>
                      <InputBtn onClick={onClickDeleteBtn} name={data.postId}>
                        삭제
                      </InputBtn>
                    </span>
                  )}
                </TextLine>
              );
            })}
        </BoardArea>
        <InputArea>
          <BoardInput onChange={onChangeText} value={postText.content} />
          <InputBtn onClick={onClickInputBtn}>입력</InputBtn>
        </InputArea>
      </Contents>
    </Container>
  );
};

export default CheerUpPage;

const HeaderTitle = styled.span`
  position: sticky;
  left: 50%;
  transform: translateX(-50%);
`;

const ImgArea = styled.div`
  width: 400px;
  height: 260px;
  background-color: lightgrey;
  margin-top: 30px;
  margin-bottom: 30px;
`;
const BoardArea = styled.div`
  width: 400px;
  height: 220px;
  background-color: lightgrey;
  margin-bottom: 30px;
  overflow: auto;
  /* 스크롤바 숨기기 (크롬, 사파리, 오페라) */
  &::-webkit-scrollbar {
    display: none;
  }

  /* 스크롤바 숨기기 (IE, 엣지) */
  -ms-overflow-style: none;

  /* 스크롤바 숨기기 (파이어폭스) */
  scrollbar-width: none;
`;

const InputArea = styled.div`
  display: flex;
`;

const InputBtn = styled.button`
  align-items: center;
  appearance: none;
  background-color: #ea3636;
  border-style: none;
  box-shadow:
    rgba(0, 0, 0, 0.2) 0 3px 5px -1px,
    rgba(0, 0, 0, 0.14) 0 6px 10px 0,
    rgba(0, 0, 0, 0.12) 0 1px 18px 0;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-flex;
  fill: currentcolor;
  font-family: 'Google Sans', Roboto, Arial, sans-serif;
  justify-content: center;
  letter-spacing: 0.25px;
  line-height: normal;
  max-width: 100%;
  overflow: visible;
  position: relative;
  text-align: center;
  text-transform: none;
  transition:
    box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 15ms linear 30ms,
    transform 270ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
  will-change: transform, opacity;
  z-index: 0;

  &:hover {
    color: #000;
    background-color: #fff;
  }

  &:active {
    box-shadow:
      0 4px 4px 0 rgb(60 64 67 / 30%),
      0 8px 12px 6px rgb(60 64 67 / 15%);
    outline: none;
  }

  &:focus {
    outline: none;
    border: 2px solid #4285f4;
  }

  &:not(:disabled) {
    box-shadow:
      rgba(60, 64, 67, 0.3) 0 1px 3px 0,
      rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
  }

  &:not(:disabled):hover {
    box-shadow:
      rgba(60, 64, 67, 0.3) 0 2px 3px 0,
      rgba(60, 64, 67, 0.15) 0 6px 10px 4px;
  }

  &:not(:disabled):focus {
    box-shadow:
      rgba(60, 64, 67, 0.3) 0 1px 3px 0,
      rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
  }

  &:not(:disabled):active {
    box-shadow:
      rgba(60, 64, 67, 0.3) 0 4px 4px 0,
      rgba(60, 64, 67, 0.15) 0 8px 12px 6px;
  }

  &:disabled {
    box-shadow:
      rgba(60, 64, 67, 0.3) 0 1px 3px 0,
      rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
  }
`;

const TextLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;
