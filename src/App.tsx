import Router from './Router/Router';
import GlobalStyle from 'styles/GlobalStyle';
import { useEffect } from 'react';

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;

