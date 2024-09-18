// GlobalStyle.ts
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
const GlobalStyle = createGlobalStyle`
  ${reset}
    @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
  /* 다른 @font-face 정의 생략 */
  @font-face {
    font-family: 'Cafe24Ssurround';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/Cafe24Ssurround.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
  body {
    margin: 0;
    padding: 0;
    font-family: 'Pretendard-Regular';
    box-sizing: border-box;
    font-weight: 600;
    background-color: #f0f0f0;
  }
*{
  font-family: 'Pretendard-Regular';
}
  *:focus {
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  button {
    border: none;
    cursor: pointer;
    &:active {
      text-decoration: none;
    }
  }
`;

export default GlobalStyle;
