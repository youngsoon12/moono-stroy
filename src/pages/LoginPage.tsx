import styled from 'styled-components';
import InfoInput from '../components/form/InfoInput';
import LoginBtn from '../components/form/LoginBtn';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAPI } from 'api/LoginAPI';
import Container from '../components/css/Container';
import theme from 'styles/theme';
import { useMutation } from '@tanstack/react-query';

interface InputInfo {
  id: string;
  pwd: string;
}
interface LoginResponse {
  token: string;
}

const LoginPage = () => {
  const navigate = useNavigate();
  const [inputInfo, setInputInfo] = useState<InputInfo>({
    id: '',
    pwd: '',
  });

  const DarkMode: boolean = localStorage.getItem('darkMode') === 'true'; // 로컬 스토리지에서 darkMode가 true인지를 확인

  const onChangeInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 입력할 때 마다 값 수정하는 함수
    setInputInfo({ ...inputInfo, [e.target.name]: e.target.value });
  };

  const onKeyDownLogin = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // 로그인 할 때 엔터키 입력 함수
    if (e.key === 'Enter') {
      onClickLogin();
    }
  };

  // useMutation 훅을 사용하여 로그인 API 호출 관리
  const mutation = useMutation<LoginResponse, Error, InputInfo>({
    mutationFn: loginAPI,
    onSuccess: (data) => {
      // 로그인 성공 시 처리 로직
      sessionStorage.setItem('token', data.token);
      navigate('/main');
    },
    onError: (error) => {
      // 로그인 실패 시 처리 로직
      console.error('로그인 실패:', error);
      alert('로그인에 실패했습니다. 다시 시도해주세요.');
    },
  });

  const onClickLogin = () => {
    if (!inputInfo.id || !inputInfo.pwd) {
      alert('아이디, 비밀번호를 모두 입력하세요.');
      return;
    }

    // useMutation을 사용하여 로그인 시도
    mutation.mutate(inputInfo);
  };

  return (
    <Container isDarkMode={DarkMode}>
      <TitleArea>
        <ColorSpan
          style={{
            alignItems: 'center',
            fontSize: '0.6em',
            backgroundColor: `${theme.color.mainColor}`,
            color: '#fff',
            padding: '1% 3%',
            borderRadius: '30px',
            width: '10%',
            textAlign: 'center',
            margin: '10px auto',
          }}
        >
          TMI
        </ColorSpan>
        <ColorSpan>
          <span style={{ color: `${theme.color.mainColor}` }}>무너</span>의
          고향은 용궁입니다.
        </ColorSpan>
      </TitleArea>
      <InfoInput2
        placeholder="아이디"
        name="id"
        onChange={onChangeInfo}
        onKeyDown={onKeyDownLogin}
        style={{ color: `${DarkMode ? '#ffffff' : '#000000'}` }}
      />
      <InfoInput2
        placeholder="비밀번호"
        type="password"
        name="pwd"
        onChange={onChangeInfo}
        onKeyDown={onKeyDownLogin}
        style={{ color: `${DarkMode ? '#ffffff' : '#000000'}` }}
      />
      <LoginBtn
        variant="contained"
        onClick={onClickLogin}
        style={{
          fontSize: '1.3em',
          fontWeight: '600',
          letterSpacing: 'px',
          color: '#fff',
        }}
      >
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
const InfoInput2 = styled(InfoInput)`
  ::placeholder {
    /* color: #fff; */
    font-size: 12px;
  }
`;
const TitleArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  padding-left: 20px;
  margin-bottom: 20px;
  font-size: 1.4em;
  font-weight: 900;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const ColorSpan = styled.span`
  // Login 페이지 글자 색 바꾸는 용도
  font-size: 1.1em;
  font-weight: 700;
`;

const FootArea = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0px;
  width: 350px;
  font-weight: 600;
  color: #6b6b6b;
  margin-top: 11px;
  font-size: 13px;
`;
