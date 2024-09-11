import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WorldView from 'pages/WorldView';
import Intro from 'pages/Intro';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/start" element={<WorldView />} />
        <Route path="/" element={<Intro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
