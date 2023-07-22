import { Box, Stack, ThemeProvider, createTheme } from '@mui/material'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import theme from '../theme'
import { useState } from 'react'
import Projects from './components/Projects'
import About from './components/About'
import Footer from './components/Footer'
import WorkHistory from './components/WorkHistory'

function App() {
  const [mode, setMode] = useState('dark')

  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ padding: '0 85px' }}>
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <WorkHistory />
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default App
