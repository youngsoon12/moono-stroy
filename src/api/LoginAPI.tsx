import axios from 'axios';

// 로그인 API 함수
export const loginAPI = async (userInfo: object) => {
  try {
    const response = await axios.post('http://localhost:8080/api/user/login', userInfo);
    return response.data; // 로그인 성공 시 데이터 반환
  } catch (error) {
    console.error('로그인 실패:', error);
    throw error; // 오류 발생 시 예외를 던져서 처리
  }
};
