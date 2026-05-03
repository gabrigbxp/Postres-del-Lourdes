import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Box,
  Tooltip,
  useScrollTrigger,
  Slide,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import PaletteIcon from '@mui/icons-material/Palette'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useThemeContext } from '../context/ThemeContext'
import type { ColorVariant } from '../theme'

const NAV_LINKS = [
  { label: 'Inicio', to: '/' },
  { label: 'Galería', to: '/galeria' },
  { label: 'Blog', to: '/blog' },
  { label: 'Acerca de', to: '/acerca' },
  { label: 'Contacto', to: '/contacto' },
]

const VARIANTS: { key: ColorVariant; label: string; color: string }[] = [
  { key: 'rose', label: 'Rosa', color: '#d4849a' },
  { key: 'lavender', label: 'Lavanda', color: '#9b84b4' },
  { key: 'mint', label: 'Menta', color: '#6bbfa3' },
]

const HideOnScroll = ({ children }: { children: React.ReactElement }) => {
  const trigger = useScrollTrigger()
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

export const NavBar = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [paletteOpen, setPaletteOpen] = useState(false)
  const { mode, variant, toggleMode, setVariant } = useThemeContext()
  const location = useLocation()

  const navItems = NAV_LINKS.map((link) => (
    <Button
      key={link.to}
      component={Link}
      to={link.to}
      color="inherit"
      sx={{
        fontWeight: location.pathname === link.to ? 700 : 400,
        borderBottom:
          location.pathname === link.to ? `2px solid ${theme.palette.primary.main}` : '2px solid transparent',
        borderRadius: 0,
        px: 1.5,
        '&:hover': {
          borderBottom: `2px solid ${theme.palette.primary.light}`,
          background: 'transparent',
        },
      }}
    >
      {link.label}
    </Button>
  ))

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            bgcolor: theme.palette.mode === 'light' ? 'rgba(253,248,245,0.85)' : 'rgba(26,18,23,0.85)',
            backdropFilter: 'blur(12px)',
            borderBottom: `1px solid ${theme.palette.divider}`,
            color: theme.palette.text.primary,
          }}
        >
          <Toolbar sx={{ gap: 1 }}>
            {isMobile && (
              <IconButton edge="start" color="inherit" onClick={() => setDrawerOpen(true)} aria-label="Abrir menú">
                <MenuIcon />
              </IconButton>
            )}

            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                textDecoration: 'none',
                color: 'inherit',
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                flexGrow: 1,
                fontSize: { xs: '1rem', sm: '1.2rem' },
                letterSpacing: '0.02em',
              }}
            >
              Postres de Lourdes
            </Typography>

            {!isMobile && <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>{navItems}</Box>}

            {/* Color palette picker */}
            <Box sx={{ position: 'relative' }}>
              <Tooltip title="Color del tema">
                <IconButton
                  color="inherit"
                  onClick={() => setPaletteOpen((o) => !o)}
                  aria-label="Cambiar paleta de colores"
                >
                  <PaletteIcon />
                </IconButton>
              </Tooltip>
              {paletteOpen && (
                <Box
                  sx={{
                    position: 'absolute',
                    right: 0,
                    top: '100%',
                    mt: 1,
                    bgcolor: 'background.paper',
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 2,
                    p: 1,
                    display: 'flex',
                    gap: 1,
                    zIndex: 9999,
                    boxShadow: 4,
                  }}
                >
                  {VARIANTS.map((v) => (
                    <Tooltip key={v.key} title={v.label}>
                      <Box
                        onClick={() => {
                          setVariant(v.key)
                          setPaletteOpen(false)
                        }}
                        sx={{
                          width: 28,
                          height: 28,
                          borderRadius: '50%',
                          bgcolor: v.color,
                          cursor: 'pointer',
                          border:
                            variant === v.key ? `3px solid ${theme.palette.text.primary}` : '3px solid transparent',
                          transition: 'transform 0.15s',
                          '&:hover': { transform: 'scale(1.2)' },
                        }}
                      />
                    </Tooltip>
                  ))}
                </Box>
              )}
            </Box>

            {/* Dark mode toggle */}
            <Tooltip title={mode === 'light' ? 'Modo oscuro' : 'Modo claro'}>
              <IconButton color="inherit" onClick={toggleMode} aria-label="Cambiar modo">
                {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {/* Mobile drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 240, pt: 2 }}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              px: 2,
              pb: 2,
              borderBottom: `1px solid ${theme.palette.divider}`,
            }}
          >
            Postres del Lourdes
          </Typography>
          <List>
            {NAV_LINKS.map((link) => (
              <ListItemButton
                key={link.to}
                component={Link}
                to={link.to}
                selected={location.pathname === link.to}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemText primary={link.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Toolbar spacer */}
      <Toolbar />
    </>
  )
}
