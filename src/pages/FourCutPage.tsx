import React from 'react';
import Header from '../components/css/HeaderArea';
import Container from '../components/css/Container';
import Contents from '../components/css/Contents';
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import { useState, useEffect, useRef } from 'react';
import { Stage, Layer, Text, Image } from 'react-konva';

const albumList = [
  { address: `${process.env.PUBLIC_URL}/images/moono/무너앨범1.png`, name: 0 },
  { address: `${process.env.PUBLIC_URL}/images/moono/무너앨범2.png`, name: 1 },
  { address: `${process.env.PUBLIC_URL}/images/moono/무너앨범3.png`, name: 2 },
  { address: `${process.env.PUBLIC_URL}/images/moono/무너앨범4.png`, name: 3 },
];

const mainImg = [
  `${process.env.PUBLIC_URL}/images/moono/무생네컷사진1.png`,
  `${process.env.PUBLIC_URL}/images/moono/무생네컷사진2.png`,
  `${process.env.PUBLIC_URL}/images/moono/무생네컷사진3.png`,
  `${process.env.PUBLIC_URL}/images/moono/무생네컷사진4.png`,
];

const FourCutPage = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [text, setText] = useState('');

  const onBackBtn = () => {
    navigate('/main');
  };

  const onClickImg = (e: any) => {
    setCurrent(e.target.getAttribute('data-name'));
  };

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <Container>
      <Header style={{ position: 'relative', height: '10vh' }}>
        <ArrowBackIosNewSharpIcon
          onClick={onBackBtn}
          sx={{ fontSize: '16px', cursor: 'pointer' }}
        />
        <HeaderTitle>무생 네컷</HeaderTitle>
      </Header>
      <Contents style={{ display: 'inline-block', height: '90vh' }}>
        <div
          style={{
            marginTop: '5vh',
            fontSize: '3vh',
            fontWeight: '600',
            textAlign: 'center',
            marginBottom: '5vh',
          }}
        >
          나만의 무너를 만들고 <br /> 자랑해 보세요!
        </div>
        <ImgArea>
          <img src={mainImg[current]} alt="무생 네컷" />
        </ImgArea>
        <InputArea>
          <TextInput onChange={onChangeText} />
          <TextRegistBtn variant="contained">저장</TextRegistBtn>
        </InputArea>
        <AlbumArea>
          <AlbumTitle>앨범</AlbumTitle>
          <AlbumImgListArea>
            {albumList.map((img, idx) => (
              <img
                key={idx}
                src={img.address}
                alt=""
                style={{ cursor: 'pointer', width: '18vw' }}
                data-name={img.name}
                onClick={onClickImg}
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
  font-size: 2.5vh;
  font-weight: 300;
`;

const ImgArea = styled.div`
  width: 100%;
  margin-bottom: 2vh;
  text-align: center;

  img {
    width: 100%;
    max-width: 300px;
  }
`;

const InputArea = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10vh;
`;

const AlbumArea = styled.div`
  display: flex;
  justify-content: center;
  height: 5vh;
  width: 100%;
  flex-direction: column;
`;

const TextRegistBtn = styled(Button)`
  color: #fff !important;
  background-color: #c43232 !important;
  width: 7vh;
  height: 5vh;
  border-radius: 0px 7px 7px 0px !important;
`;

const TextInput = styled(TextField)`
  width: 300px;

  & .MuiInputBase-root {
    height: 100%;
    border-radius: 7px 0px 0px 7px !important;
    height: 5vh !important;
  }
`;

const AlbumTitle = styled.div`
  width: 300px;
  font-size: 2vh;
  font-weight: 300;
  color: #6b6b6b;
  border-bottom: 1px solid #c7c7c7;
  margin: 0 auto;
  padding-bottom: 1vh;
  margin-bottom: 1.8vh;
`;

const AlbumImgListArea = styled.div`
  display: flex;
  justify-content: center;
  width: 35vh;
  gap: 1vh;
  margin: 0 auto;
`;
