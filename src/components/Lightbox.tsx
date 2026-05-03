import { Dialog, DialogContent, IconButton, Typography, Box, useTheme, useMediaQuery } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import type { Photo } from '../data/photos'

interface LightboxProps {
  photo: Photo | null
  photos: Photo[]
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export const Lightbox = ({ photo, photos, onClose, onPrev, onNext }: LightboxProps) => {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  if (!photo) return null

  const idx = photos.indexOf(photo)
  const total = photos.length

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') onPrev()
    if (e.key === 'ArrowRight') onNext()
    if (e.key === 'Escape') onClose()
  }

  return (
    <Dialog
      open={!!photo}
      onClose={onClose}
      fullScreen={fullScreen}
      maxWidth="md"
      fullWidth
      onKeyDown={handleKeyDown}
      slotProps={{
        paper: {
          sx: {
            bgcolor: 'background.paper',
            backgroundImage: 'none',
            borderRadius: fullScreen ? 0 : 3,
            overflow: 'hidden',
          },
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'black',
          minHeight: { xs: '60vw', sm: 400, md: 480 },
        }}
      >
        <img
          src={photo.src}
          alt={photo.title}
          style={{
            maxWidth: '100%',
            maxHeight: fullScreen ? '70vh' : '70vh',
            objectFit: 'contain',
            display: 'block',
          }}
        />
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: 'white',
            bgcolor: 'rgba(0,0,0,0.4)',
            '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
          }}
          aria-label="Cerrar"
        >
          <CloseIcon />
        </IconButton>
        <IconButton
          onClick={onPrev}
          sx={{
            position: 'absolute',
            left: 8,
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'white',
            bgcolor: 'rgba(0,0,0,0.4)',
            '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
          }}
          aria-label="Anterior"
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton
          onClick={onNext}
          sx={{
            position: 'absolute',
            right: 8,
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'white',
            bgcolor: 'rgba(0,0,0,0.4)',
            '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
          }}
          aria-label="Siguiente"
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
      <DialogContent sx={{ py: 2, px: 3 }}>
        <Typography variant="h6" sx={{ fontFamily: "'Playfair Display', serif", mb: 0.5 }}>
          {photo.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {photo.description}
        </Typography>
        <Typography variant="caption" color="text.disabled" sx={{ mt: 1, display: 'block' }}>
          {idx + 1} / {total} — {photo.category}
        </Typography>
      </DialogContent>
    </Dialog>
  )
}
