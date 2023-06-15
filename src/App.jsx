import { useState } from 'react'
import { MantineProvider, Text } from '@mantine/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Auth from './layouts/Auth';
import { ForgetPassword , ResetPassword , SignIn , SignUp } from './pages/Auth';
import { ErrorPage } from './pages/Error';

function App() {

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Router>
        <Routes>
          {/* layout auth */}
          <Route element={<Auth />} errorElement={<ErrorPage />}>
                <Route path='/Signin' element={<SignIn />}  />
                <Route path='/SignUp' element={<SignUp />}  />
                <Route path='/ForgetPassword' element={<ForgetPassword />}  />
                <Route path='/ResetPassword' element={<ResetPassword />}  />
          </Route>
          {/* layout auth  */}
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </Router>
      </MantineProvider>
  )
}

export default App
