import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Stack,
  useTheme,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import { useState } from 'react'
import { blogPosts, type BlogPost } from '../data/blog'

const CATEGORY_COLORS: Record<BlogPost['category'], 'primary' | 'secondary' | 'success'> = {
  Recetas: 'primary',
  Consejos: 'secondary',
  Novedades: 'success',
}

function formatDate(dateStr: string) {
  return new Intl.DateTimeFormat('es-AR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(dateStr))
}

function renderContent(content: string) {
  // Simple markdown-ish renderer: bold **text**
  return content.split('\n\n').map((paragraph) => {
    const parts = paragraph.split(/\*\*(.*?)\*\*/g)
    return (
      <Typography key={paragraph.slice(0, 30)} variant="body1" sx={{ mb: 2, lineHeight: 1.8 }} color="text.secondary">
        {parts.map((part, j) =>
          j % 2 === 1 ? (
            <strong key={`bold-${part.slice(0, 20)}`} style={{ color: 'inherit', fontWeight: 700 }}>
              {part}
            </strong>
          ) : (
            part
          ),
        )}
      </Typography>
    )
  })
}

export const BlogPage = () => {
  const theme = useTheme()
  const [open, setOpen] = useState<BlogPost | null>(null)

  return (
    <Box>
      {/* Header */}
      <Box
        sx={{
          py: { xs: 5, md: 7 },
          textAlign: 'center',
          bgcolor: theme.palette.mode === 'light' ? `${theme.palette.primary.light}33` : theme.palette.background.paper,
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ fontFamily: "'Playfair Display', serif", mb: 1.5 }}>
            Blog
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 520, mx: 'auto' }}>
            Recetas, consejos de repostería y novedades del mundo de los postres. Todo contado con el amor de quien lo
            vive.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 7 }}>
        <Grid container spacing={4}>
          {blogPosts.map((post) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={post.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 },
                }}
                onClick={() => setOpen(post)}
              >
                {post.image && (
                  <CardMedia
                    component="img"
                    height={200}
                    image={post.image}
                    alt={post.title}
                    sx={{ objectFit: 'cover' }}
                  />
                )}
                <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 1.5 }}>
                    <Chip
                      label={post.category}
                      color={CATEGORY_COLORS[post.category]}
                      size="small"
                      variant="outlined"
                    />
                    <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center' }}>
                      <CalendarTodayIcon sx={{ fontSize: 12, color: 'text.disabled' }} />
                      <Typography variant="caption" color="text.disabled">
                        {formatDate(post.date)}
                      </Typography>
                    </Stack>
                  </Stack>
                  <Typography variant="h6" sx={{ fontFamily: "'Playfair Display', serif", mb: 1.5, lineHeight: 1.3 }}>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1, lineHeight: 1.7, mb: 2 }}>
                    {post.excerpt}
                  </Typography>
                  <Button
                    variant="text"
                    color="primary"
                    sx={{ alignSelf: 'flex-start', pl: 0 }}
                    onClick={(e) => {
                      e.stopPropagation()
                      setOpen(post)
                    }}
                  >
                    Leer más →
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Blog post dialog */}
      <Dialog
        open={!!open}
        onClose={() => setOpen(null)}
        maxWidth="sm"
        fullWidth
        slotProps={{ paper: { sx: { borderRadius: 3 } } }}
      >
        {open && (
          <>
            {open.image && (
              <CardMedia component="img" height={280} image={open.image} alt={open.title} sx={{ objectFit: 'cover' }} />
            )}
            <DialogTitle
              sx={{
                fontFamily: "'Playfair Display', serif",
                pr: 6,
                pt: open.image ? 3 : undefined,
              }}
            >
              {open.title}
              <IconButton
                onClick={() => setOpen(null)}
                sx={{ position: 'absolute', right: 8, top: 8 }}
                aria-label="Cerrar"
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 2 }}>
                <Chip label={open.category} color={CATEGORY_COLORS[open.category]} size="small" variant="outlined" />
                <Typography variant="caption" color="text.disabled">
                  {formatDate(open.date)}
                </Typography>
              </Stack>
              {renderContent(open.content)}
            </DialogContent>
            <DialogActions sx={{ px: 3, pb: 2 }}>
              <Button onClick={() => setOpen(null)}>Cerrar</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  )
}
