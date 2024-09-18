// GlobalStyle.ts
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: 'Pretendard';
    font-weight: 600 !important;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Thin.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Thin.eot?#iefix') format('embedded-opentype'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Thin.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Thin.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Thin.ttf') format("truetype");
    font-display: swap;
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
    font-family: 'Pretendard', sans-serif;
    box-sizing: border-box;
    font-weight: 600;
    background-color: #f0f0f0;
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
