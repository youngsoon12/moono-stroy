import Container from '../components/css/Container';
import styled from 'styled-components';
import theme from '../styles/theme';
import { useParams, useNavigate } from 'react-router-dom';

export const ContentIntro = (props: any) => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  // id에 따라 이미지 경로를 변경
  const getImageSrc = () => {
    switch (id) {
      case 'introduce':
        return `${process.env.PUBLIC_URL}/images/moono/하이무너.png`;
      case 'mooQuiz':
        return `${process.env.PUBLIC_URL}/images/moono/헤드셋무너.png`;
      case 'cheerup':
        return `${process.env.PUBLIC_URL}/images/moono/축하무너.png`;
      case 'fourcut':
        return `${process.env.PUBLIC_URL}/images/moono/심쿵무너.png`;
      case 'fortune':
        return `${process.env.PUBLIC_URL}/images/moono/머쓱무너.png`;
    }
  };
  const handleStartButton = () => {
    navigate(`/${id}`);
  };
  return (
    <Container>
      <div
        style={{
          height: '100%',
          justifyContent: 'center',
          alignContent: 'center',
          width: '100%',
        }}
      >
        <BackImg src={getImageSrc()} alt="Logo" />
        <ContentButtonStyle onClick={() => handleStartButton()}>
          하이
        </ContentButtonStyle>
      </div>
    </Container>
  );
};
const ContentButtonStyle = styled.button`
  display: flex;
  width: 80%;
  height: 10%;
  background-color: ${theme.color.mainColor};
  /* border: 1px solid ${theme.color.mainColor}; */
  border-radius: 0.5em;
  color: white;
  z-index: 2;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  font-size: 1.5em;
  top: 10%;
`;
const BackImg = styled.img`
  width: 100%;
`;
