import styled from 'styled-components';
import InfoInput from '../components/form/InfoInput';
import LoginBtn from '../components/form/LoginBtn';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAPI } from 'api/LoginAPI';
import Container from '../components/css/Container';

const LoginPage = (props: any) => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    id: '',
    pwd: '',
  });

  const onChangeInfo = (e: any) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const onClickLogin = async () => {
    if (!userInfo.id || !userInfo.pwd) {
      alert('아이디, 비밀번호를 모두 입력하세요.');
      return;
    }
    try {
      const data = await loginAPI(userInfo); // 로그인 API 호출
      sessionStorage.setItem('token', data.token);
      navigate('/success');
    } catch (error) {
      console.error('로그인 실패:', error);
      alert('로그인에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <Container>
      <TitleArea>
        <ColorSpan style={{ fontSize: '0.6em' }}>TMI</ColorSpan>
        <br />
        <ColorSpan>무너</ColorSpan>의 고향은 용궁입니다.
      </TitleArea>
      <InfoInput placeholder="아이디" name="id" onChange={onChangeInfo} />
      <InfoInput
        placeholder="비밀번호"
        type="password"
        name="pwd"
        onChange={onChangeInfo}
      />
      <LoginBtn variant="contained" onClick={onClickLogin}>
        로그인
      </LoginBtn>
      <FootArea>
        <span
          style={{ margin: '0 40px 0 92px', cursor: 'pointer' }}
          onClick={() => {
            alert(
              '단순 오류에 의하여 해결중에 있습니다. 불편을 끼쳐 죄송합니다.'
            );
          }}
        >
          ID/PW 찾기
        </span>
        <span
          style={{ cursor: 'pointer' }}
          onClick={() => {
            navigate('/register');
          }}
        >
          회원가입
        </span>
      </FootArea>
    </Container>
  );
};

export default LoginPage;

const TitleArea = styled.div`
  width: 350px;
  padding-left: 20px;
  margin-bottom: 20px;
  font-size: 1.4em;
  font-weight: bold;
`;

const ColorSpan = styled.span`
  // Login 페이지 글자 색 바꾸는 용도
  font-size: 1.1em;
  color: #e947ae;
`;

const FootArea = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0px;
  width: 350px;
  font-weight: normal;
  color: #6b6b6b;
  margin-top: 11px;
  font-size: 13px;
`;
