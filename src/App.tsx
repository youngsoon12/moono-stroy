import Router from './Router/Router';
import GlobalStyle from 'styles/GlobalStyle';
import theme from 'styles/theme';
import { RecoilRoot } from 'recoil';
function App() {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <Router />
      </RecoilRoot>
    </>
  );
}

export default App;

