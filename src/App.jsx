import { useState } from 'react'
import { MantineProvider, Text } from '@mantine/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'




function App() {

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </Router>
      </MantineProvider>
  )
}

export default App
