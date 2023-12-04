import Detail from 'pages/Detail';
import Home from 'pages/Home';
import Join from 'pages/Join';
import Login from 'pages/Login';
import Profile from 'pages/Profile';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { setLogin, setLogout } from 'redux/modules/authSlice';

export default function Router() {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.isLogin);

  useEffect(() => {}, [isLogin]);

  return (
    <BrowserRouter>
      <Routes>
        {isLogin ? (
          <>
            <Route path='/' element={<Home />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='*' element={<Navigate replace to='/' />} />
          </>
        ) : (
          <>
            <Route path='/Login' element={<Login />} />
            <Route path='/Join' element={<Join />} />
            <Route path='*' element={<Navigate replace to='/' />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}
// isLogin 삼항연산자 안걸어놓고, 데이터 연결한 다음 해도 될듯,, ,?
