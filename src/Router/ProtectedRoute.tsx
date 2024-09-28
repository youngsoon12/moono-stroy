import { Navigate, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { userAtom } from 'recoil/userAtom';
import { useRecoilState } from 'recoil';
import parseJwt from '../components/hook/ParseJwt';
const ProtectedRoute = ({ children }: any) => {
  const token = sessionStorage.getItem('token'); // 세션 스토리지에서 JWT 토큰 가져옴
  const [, setUser] = useRecoilState(userAtom);
  useEffect(() => {
    if (token) {
      const decoded = parseJwt(token);
      setUser(decoded);
    }
  }, []);

  const isTokenExpired = (token: string | null) => {
    if (!token) return true; // 토큰이 없으면 만료로 처리

    try {
      const payloadBase64 = token.split('.')[1]; // JWT payload 부분 추출
      const decodedPayload = JSON.parse(atob(payloadBase64)); // Base64 디코딩

      const currentTime = Math.floor(Date.now() / 1000); // 현재 시간 (초 단위)
      return decodedPayload.exp < currentTime; // 만료된 경우 true 반환
    } catch (error) {
      console.error('토큰 파싱 중 오류 발생:', error);
      return true; // 토큰 파싱 실패 시 만료로 처리
    }
  };

  // 토큰이 없거나 만료된 경우
  if (!token || isTokenExpired(token)) {
    // 세션 만료 알림
    alert('세션이 만료되었습니다. 다시 로그인 해주세요.');
    // 로그인 페이지로 리디렉션
    return <Navigate to="/login" />;
  }

  // 토큰이 유효하면 자식 컴포넌트를 렌더링
  return <Outlet />;
};

export default ProtectedRoute;
