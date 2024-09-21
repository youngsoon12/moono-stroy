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
@font-face {
    font-family: 'Paperlogy-8ExtraBold';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-8ExtraBold.woff2') format('woff2');
    font-weight: 800;
    font-style: normal;
}
  body {
    /* font-size: 100%; */
    margin: 0;
    padding: 0;
    /* font-family: 'Pretendard'; */
    box-sizing: border-box;
    font-weight: 600;
    background-color: #f0f0f0;
    /* Prevent font scaling in landscape */
    -webkit-text-size-adjust: none; /*Chrome, Safari, newer versions of Opera*/
    -moz-text-size-adjust: none; /*Firefox*/
    -ms-text-size-adjust: none; /*Ie*/
    -o-text-size-adjust: none; /*old versions of Opera*/
    color: #4F2222;
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
