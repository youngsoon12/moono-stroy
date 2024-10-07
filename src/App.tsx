import Router from './Router/Router';
import GlobalStyle from 'styles/GlobalStyle';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <GlobalStyle />
          <Router />
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}

export default App;

