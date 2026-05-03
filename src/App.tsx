import { HashRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import { ThemeProvider } from './context/ThemeContext'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { GalleryPage } from './pages/GalleryPage'
import { ContactPage } from './pages/ContactPage'
import { AboutPage } from './pages/AboutPage'
import { BlogPage } from './pages/BlogPage'

// HashRouter is used for GitHub Pages compatibility (no server-side routing needed)
export const App = () => (
  <ThemeProvider>
    <HashRouter>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <NavBar />
        <Box component="main" sx={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/galeria" element={<GalleryPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/acerca" element={<AboutPage />} />
            <Route path="/contacto" element={<ContactPage />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </HashRouter>
  </ThemeProvider>
)

export default App
