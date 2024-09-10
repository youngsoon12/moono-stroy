import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
   /* 전역 기본 스타일 설정 */
  body {
    margin: 0;
    padding: 0;
    font-family: 'Pretendard-Regular', sans-serif; /* 적용한 폰트 사용 */
  }
`;
export default GlobalStyle;
