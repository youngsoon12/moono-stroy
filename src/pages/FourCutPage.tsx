import React from 'react';
import Header from '../components/css/HeaderArea';
import Container from '../components/css/Container';
import Contents from '../components/css/Contents';
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import { useState } from 'react';

const backgroundList = [
  {
    address: `${process.env.PUBLIC_URL}/images/moono/무생네컷배경1.png`,
    name: 0,
  },
  {
    address: `${process.env.PUBLIC_URL}/images/moono/무생네컷배경2.png`,
    name: 1,
  },
  {
    address: `${process.env.PUBLIC_URL}/images/moono/무생네컷배경3.png`,
    name: 2,
  },
  {
    address: `${process.env.PUBLIC_URL}/images/moono/무생네컷배경4.png`,
    name: 3,
  },
];

const charList = [
  {
    address: `${process.env.PUBLIC_URL}/images/moono/무생네컷캐릭1.png`,
    name: 0,
  },
  {
    address: `${process.env.PUBLIC_URL}/images/moono/무생네컷캐릭2.png`,
    name: 1,
  },
  {
    address: `${process.env.PUBLIC_URL}/images/moono/무생네컷캐릭3.png`,
    name: 2,
  },
  {
    address: `${process.env.PUBLIC_URL}/images/moono/무생네컷캐릭4.png`,
    name: 3,
  },
];

const mainImg = [
  'linear-gradient(180deg, #FFDF53 17%, #FFFFFF 85%)',
  'linear-gradient(180deg, #68CCFF 17%, #FFFFFF 85%)',
  'linear-gradient(180deg, #EA3636 17%, #FFFFFF 85%)',
  'linear-gradient(180deg, #EBEBEB 17%, #FFFFFF 85%)',
];

const mainChar = [
  `${process.env.PUBLIC_URL}/images/moono/무생네컷무너1.png`,
  `${process.env.PUBLIC_URL}/images/moono/무생네컷무너2.png`,
  `${process.env.PUBLIC_URL}/images/moono/무생네컷무너3.png`,
  `${process.env.PUBLIC_URL}/images/moono/무생네컷무너4.png`,
];

const FourCutPage = () => {
  const navigate = useNavigate();
  const [currentBg, setCurrentBg] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [text, setText] = useState('');

  const onBackBtn = () => {
    navigate('/main');
  };

  const onClickImgBg = (e: any) => {
    setCurrentBg(e.target.getAttribute('data-name'));
  };
  const onClickImgChar = (e: any) => {
    setCurrentChar(e.target.getAttribute('data-name'));
  };

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <Container style={{ minWidth: '425px' }}>
      <Header style={{ position: 'relative', height: '9vh' }}>
        <ArrowBackIosNewSharpIcon
          onClick={onBackBtn}
          sx={{ fontSize: '16px', cursor: 'pointer' }}
        />
        <HeaderTitle>무생 네컷</HeaderTitle>
      </Header>
      <Contents style={{ display: 'inline-block', height: '91vh' }}>
        <div
          style={{
            marginTop: '2vh',
            fontSize: '2.5vh',
            fontWeight: '600',
            textAlign: 'center',
            marginBottom: '2vh',
          }}
        >
          나만의 무너를 만들고 <br /> 자랑해 보세요!
        </div>
        <ImgArea style={{ background: `${mainImg[currentBg]}` }}>
          <img src={`${mainChar[currentChar]}`} alt="무생 네컷" />
        </ImgArea>
        <InputArea>
          <TextInput onChange={onChangeText} />
          <TextRegistBtn variant="contained">저장</TextRegistBtn>
        </InputArea>
        <AlbumArea>
          <AlbumTitle>배경</AlbumTitle>
          <AlbumImgListArea>
            {backgroundList.map((img, idx) => (
              <img
                key={idx}
                src={img.address}
                alt=""
                style={{
                  cursor: 'pointer',
                  width: '92.5px',
                  height: '10.5vh',
                }}
                data-name={img.name}
                onClick={onClickImgBg}
              />
            ))}
          </AlbumImgListArea>
        </AlbumArea>
        <AlbumArea>
          <AlbumTitle>캐릭터</AlbumTitle>
          <AlbumImgListArea>
            {charList.map((img, idx) => (
              <img
                key={idx}
                src={img.address}
                alt=""
                style={{
                  cursor: 'pointer',
                  width: '92.5px',
                  height: '10.5vh',
                }}
                data-name={img.name}
                onClick={onClickImgChar}
              />
            ))}
          </AlbumImgListArea>
        </AlbumArea>
      </Contents>
    </Container>
  );
};

export default FourCutPage;

const HeaderTitle = styled.span`
  position: sticky;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2.3vh;
  font-weight: 300;
`;

const ImgArea = styled.div`
  width: 75vw;
  max-width: 425px;
  height: 40vh;
  margin: 0 auto;
  margin-bottom: 2.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 8px solid #c53232;
  position: relative;

  img {
    position: absolute;
    top: 50%;
    transform: translateY(-35%);
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

const InputArea = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AlbumArea = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  flex-direction: column;
  margin-top: 2vh;
`;

const TextRegistBtn = styled(Button)`
  color: #fff !important;
  background-color: #c43232 !important;
  width: 8vh;
  height: 6vh;
  border-radius: 0px 7px 7px 0px !important;
`;

const TextInput = styled(TextField)`
  width: 320px;

  & .MuiInputBase-root {
    height: 100%;
    border-radius: 7px 0px 0px 7px !important;
    height: 6vh !important;
  }
`;

const AlbumTitle = styled.div`
  width: 80vw;
  max-width: 350px;
  font-size: 2.2vh;
  font-weight: 300;
  color: #6b6b6b;
  border-bottom: 1px solid #c7c7c7;
  margin: 0 auto;
  margin-bottom: 1vh;
`;

const AlbumImgListArea = styled.div`
  display: flex;
  justify-content: center;
  width: 35vh;
  gap: 1vh;
  margin: 0 auto;
`;
