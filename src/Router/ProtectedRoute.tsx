import { Navigate, Outlet } from 'react-router-dom';
import parseJwt from '../components/hook/ParseJwt';
import { useRecoilState } from 'recoil';
import { userAtom } from 'recoil/userAtom';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }: any) => {
  const [user, setUser] = useRecoilState(userAtom);
  const token = sessionStorage.getItem('token'); // 세션 스토리지에서 JWT 토큰 가져옴
  useEffect(() => {
    const decodedPayload = parseJwt(token);
    setUser(decodedPayload); // 디코딩된 페이로드를 전역 상태에 저장
  }, [token]);
  const isTokenExpired = (token: string | null) => {
    if (!token) return true; // 토큰이 없으면 만료로 처리

    const decodedPayload = parseJwt(token); // parseJwt를 사용하여 토큰 디코딩
    if (!decodedPayload) return true; // 디코딩 실패 시 만료로 처리

    const currentTime = Math.floor(Date.now() / 1000); // 현재 시간 (초 단위)
    return decodedPayload.exp < currentTime; // 만료된 경우 true 반환
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
