import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: any) => {
  const token = sessionStorage.getItem('token'); // 세션 스토리지에서 JWT 토큰 가져옴

  const isTokenExpired = (token: any) => {
    if (!token) return true; // 토큰이 없으면 만료로 처리

    const payloadBase64 = token.split('.')[1]; // JWT payload 부분 추출
    const decodedPayload = JSON.parse(atob(payloadBase64));
    const currentTime = Math.floor(Date.now() / 1000); // 현재 시간 (초 단위)

    return decodedPayload.exp < currentTime; // 만료된 경우 true 반환
  };

  // 토큰이 없거나 만료된 경우
  if (!token || isTokenExpired(token)) {
    // 세션 만료 알림
    alert('세션이 만료되었습니다. 다시 로그인 해주세요.');

    // 로그인 페이지로 리디렉션
    return <Navigate to="/" />;
  }

  // 토큰이 유효하면 자식 컴포넌트를 렌더링
  return children;
};

export default ProtectedRoute;
