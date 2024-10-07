import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URL;

interface InputInfo {
  id: string;
  pwd: string;
}

interface LoginResponse {
  token: string;
}

// 로그인 API 함수
export const loginAPI = async (userInfo: InputInfo): Promise<LoginResponse> => {
  try {
    const response = await axios.post<LoginResponse>(
      `${apiUrl}/api/user/login`,
      userInfo
    );
    return response.data; // 로그인 성공 시 데이터 반환
  } catch (error) {
    console.error('로그인 실패:', error);
    throw error; // 오류 발생 시 예외를 던져서 처리
  }
};

