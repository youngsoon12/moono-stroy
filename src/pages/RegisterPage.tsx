import { styled } from 'styled-components';
import Container from '../components/css/Container';
import RegistInput from '../components/form/RegistInput';
import LoginBtn from '../components/form/LoginBtn';
import { useState } from 'react';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

const RegisterPage = () => {
  // 회원가입 정보 및 단계 관리
  const [step, setStep] = useState(1);
  const [registInfo, setRegistInfo] = useState({
    id: '',
    pwd: '',
    nickName: '',
  });

  // 입력값 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegistInfo({
      ...registInfo,
      [e.target.name]: e.target.value,
    });
  };

  // 다음 단계로 이동
  const nextStep = () => {
    setStep(step + 1);
  };

  return (
    <Container>
      <CheckArea>
        {step >= 2 && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              fontSize: '14px',
              flexDirection: 'column',
              gap: '13px',
            }}
          >
            <div>
              {'아이디'}
              <CheckRoundedIcon sx={{ fontSize: '18px', color: '#34A853', verticalAlign: 'middle' }} />
            </div>
            <CheckInfo>{registInfo.id}</CheckInfo>
          </div>
        )}
        {step === 3 && (
          <div style={{ display: 'flex', justifyContent: 'center', fontSize: '14px', flexDirection: 'column' }}>
            <div>
              {'비밀번호'}
              <CheckRoundedIcon sx={{ fontSize: '18px', color: '#34A853', verticalAlign: 'middle' }} />
            </div>
            <CheckInfo>{registInfo.pwd}</CheckInfo>
          </div>
        )}
      </CheckArea>
      {step === 1 && (
        <>
          <TitleArea>아이디를 입력해주세요.</TitleArea>
          <RegistInput
            label="아이디"
            variant="standard"
            name="id"
            value={registInfo.id}
            onChange={handleChange}
            sx={{ marginBottom: '20px' }}
          />
          <LoginBtn onClick={nextStep}>확인</LoginBtn>
        </>
      )}

      {step === 2 && (
        <>
          <TitleArea>비밀번호를 입력해주세요.</TitleArea>
          <RegistInput
            label="비밀번호"
            variant="standard"
            name="pwd"
            type="password"
            value={registInfo.pwd}
            onChange={handleChange}
            sx={{ marginBottom: '20px' }}
          />
          <LoginBtn onClick={nextStep}>확인</LoginBtn>
        </>
      )}

      {step === 3 && (
        <>
          <TitleArea>닉네임을 입력해주세요.</TitleArea>
          <RegistInput
            label="닉네임"
            variant="standard"
            name="nickName"
            value={registInfo.nickName}
            onChange={handleChange}
            sx={{ marginBottom: '20px' }}
          />
          <LoginBtn>가입 완료</LoginBtn>
        </>
      )}
    </Container>
  );
};

export default RegisterPage;

const TitleArea = styled.div`
  width: 350px;
  padding-left: 20px;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 600;
`;

const CheckArea = styled.div`
  display: flex;
  height: 120px;
  justify-content: center;
  flex-direction: column;
  width: 350px;
`;

const CheckInfo = styled.div`
  font-size: 24px;
  color: #e947ae;
  font-weight: bold;
`;
