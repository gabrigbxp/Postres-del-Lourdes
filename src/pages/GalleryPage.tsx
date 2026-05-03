import {
  Box,
  Container,
  Typography,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  useTheme,
  useMediaQuery,
  Chip,
} from '@mui/material'
import { useState } from 'react'
import { photos, CATEGORIES, type PhotoCategory, type Photo } from '../data/photos'
import { Lightbox } from '../components/Lightbox'

export const GalleryPage = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isMd = useMediaQuery(theme.breakpoints.down('md'))
  const cols = isMobile ? 1 : isMd ? 2 : 3

  const [category, setCategory] = useState<PhotoCategory | 'Todos'>('Todos')
  const [lightboxPhoto, setLightboxPhoto] = useState<Photo | null>(null)

  const filtered = category === 'Todos' ? photos : photos.filter((p) => p.category === category)

  const lightboxIdx = lightboxPhoto ? filtered.indexOf(lightboxPhoto) : -1
  const handlePrev = () => setLightboxPhoto(filtered[(lightboxIdx - 1 + filtered.length) % filtered.length] ?? null)
  const handleNext = () => setLightboxPhoto(filtered[(lightboxIdx + 1) % filtered.length] ?? null)

  return (
    <Box>
      {/* Page header */}
      <Box
        sx={{
          py: { xs: 5, md: 7 },
          textAlign: 'center',
          bgcolor: theme.palette.mode === 'light' ? `${theme.palette.primary.light}33` : theme.palette.background.paper,
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ fontFamily: "'Playfair Display', serif", mb: 1.5 }}>
            Galería
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 500, mx: 'auto' }}>
            Cada foto es el resultado de horas de trabajo y mucho amor. Explorá nuestra colección y encontrá inspiración
            para tu próxima celebración.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 5 }}>
        {/* Category filter */}
        <Box sx={{ mb: 4, display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
          <Chip
            label="Todos"
            onClick={() => setCategory('Todos')}
            color={category === 'Todos' ? 'primary' : 'default'}
            variant={category === 'Todos' ? 'filled' : 'outlined'}
            sx={{ fontSize: '0.9rem', px: 1 }}
          />
          {CATEGORIES.map((cat) => (
            <Chip
              key={cat}
              label={cat}
              onClick={() => setCategory(cat)}
              color={category === cat ? 'primary' : 'default'}
              variant={category === cat ? 'filled' : 'outlined'}
              sx={{ fontSize: '0.9rem', px: 1 }}
            />
          ))}
        </Box>

        <Typography variant="caption" color="text.disabled" sx={{ display: 'block', mb: 2, textAlign: 'right' }}>
          {filtered.length} {filtered.length === 1 ? 'foto' : 'fotos'}
        </Typography>

        <ImageList variant="masonry" cols={cols} gap={12}>
          {filtered.map((photo) => (
            <ImageListItem
              key={photo.src}
              sx={{
                cursor: 'pointer',
                borderRadius: 2,
                overflow: 'hidden',
                '&:hover img': { transform: 'scale(1.04)' },
                '&:hover .img-bar': { opacity: 1 },
              }}
              onClick={() => setLightboxPhoto(photo)}
            >
              <img
                src={photo.src}
                alt={photo.title}
                loading="lazy"
                style={{
                  borderRadius: 8,
                  display: 'block',
                  width: '100%',
                  transition: 'transform 0.35s ease',
                }}
              />
              <ImageListItemBar
                className="img-bar"
                title={photo.title}
                subtitle={photo.description}
                sx={{
                  borderRadius: '0 0 8px 8px',
                  opacity: 0,
                  transition: 'opacity 0.3s',
                  '& .MuiImageListItemBar-title': {
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '0.95rem',
                  },
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>

      <Lightbox
        photo={lightboxPhoto}
        photos={filtered}
        onClose={() => setLightboxPhoto(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </Box>
  )
}
