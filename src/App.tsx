import Router from './Router/Router';
import GlobalStyle from 'styles/GlobalStyle';
import Intro from 'pages/Intro';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
      <Intro />
    </>
  );
}

export default App;
