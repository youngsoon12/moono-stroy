// GlobalStyle.ts
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
// import  from '../assets/fonts/Pretendard.woff2';
const GlobalStyle = createGlobalStyle`

  ${reset}

  :root{
    --vh : 100%;
  }

    @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard.woff2') format('woff2-variations');
    font-weight: 400 600 900;
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
    /* font-family: 'Pretendard'; */
    box-sizing: border-box;
    font-weight: 600;
    background-color: #f0f0f0;
  }
*{
  font-family: 'Pretendard';
}
  *:focus {
    outline: none;
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
