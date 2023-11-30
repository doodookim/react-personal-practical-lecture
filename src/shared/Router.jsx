import Detail from 'pages/Detail';
import Home from 'pages/Home';
import Join from 'pages/Join';
import Login from 'pages/Login';
import Profile from 'pages/Profile';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='*' element={<Navigate replace to='/' />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Join' element={<Join />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
