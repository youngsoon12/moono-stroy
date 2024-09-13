import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Intro from 'pages/Intro';
import LoginPage from 'pages/LoginPage';
import ProtectedRoute from './ProtectedRoute';
import RegisterPage from 'pages/RegisterPage';
import Main from 'pages/Main';
import MooQuiz from 'pages/MooQuiz';
import StartQuiz from 'pages/StartQuiz';
import Main2 from 'pages/Main2';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/main" element={<Main />} />
        <Route path="/main2" element={<Main2 />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/mooQuiz" element={<MooQuiz />} />
        <Route path="/startQuiz" element={<StartQuiz />} />
        <Route element={<ProtectedRoute />}>
          {/* 로그인이 필요한 라우트 같은 경우에는 아래에 작성. */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
