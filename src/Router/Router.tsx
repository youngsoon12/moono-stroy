import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import WorldView from 'pages/WorldView';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/start" element={<WorldView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
