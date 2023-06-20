import React, { useEffect } from 'react';
import { Section } from './Section';
import { PhonebookForm } from './PhonebookForm';
import { PhonebookContacts } from './PhonebookContacts';
import { PhonebookFilter } from './PhonebookFilter';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { PhonebookRegister } from './pages/PhonebookRegister';
import { PhonebookLogin } from './pages/PhonebookLogin';
import { selectIsAuth } from 'redux/auth/authSelector';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { getUser, logout } from 'redux/auth/authOperations';
import { token } from 'redux/http';

const App = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector(selectIsAuth);  
  
  useEffect(()=>{
    if (!isAuth){
      dispatch(getUser())
    }
  },[dispatch, isAuth])

  const handleLogout = ()=>{
    dispatch(logout())
    token.unset()
  }

  return (
    <>
      {isAuth ? (
        <div>
          <p>mango@mail.com</p>
          <button type="button" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <nav>
          <Link to={'/login'}>Login</Link>
          <Link to={'/register'}>Register</Link>
        </nav>
      )}

      <Routes>
        <Route path="/" element={<Navigate to={'/contacts'} />} />
        <Route path="/" element={<PrivateRoute/>}>
          <Route
            path="contacts"
            element={
              <>
                <Section title="Phonebook">
                  <PhonebookForm />
                </Section>
                <Section title="Contacts">
                  {/* {contacts.length > 0 ? (
                    <>
                      <PhonebookFilter />
                      <PhonebookContacts />{' '}
                    </>
                  ) : (
                    <p>No contacts found yet. Please add a new contact!</p>
                  )} */}
                  <>
                      <PhonebookFilter />
                      <PhonebookContacts />{' '}
                    </>
                </Section>
              </>
            }
          />
        </Route>
        <Route path='/' element={<PublicRoute/>}>
          <Route path="/login" element={<PhonebookLogin />} />
          <Route path="/register" element={<PhonebookRegister />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
