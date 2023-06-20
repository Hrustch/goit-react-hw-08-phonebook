import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectIsAuth } from 'redux/auth/authSelector';

export const PublicRoute = () => {
    const isAuth = useSelector(selectIsAuth);
    console.log(isAuth)
    return isAuth ? <Navigate to={'/contacts'} /> : <Outlet/>
}
