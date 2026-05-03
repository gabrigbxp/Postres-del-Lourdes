import { Box, Container, Typography, Grid, Card, CardContent, Chip, Stack, useTheme } from '@mui/material'
import CakeIcon from '@mui/icons-material/Cake'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import SchoolIcon from '@mui/icons-material/School'

const SKILLS = [
  'Tortas artesanales',
  'Cupcakes',
  'Alfajores',
  'Porcelana fría',
  'Desayunos sorpresa',
  'Macarons',
  'Tartas',
  'Budines',
  'Figuras de fondant',
  'Decoración con manga',
  'Tortas temáticas',
  'Repostería francesa',
]

export const AboutPage = () => {
  const theme = useTheme()

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
            Acerca de nosotros
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 520, mx: 'auto' }}>
            Conocé la historia detrás de cada postre y la persona que los crea con pasión.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 7 }}>
        <Grid container spacing={6} sx={{ alignItems: 'center' }}>
          {/* Story text */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h3" sx={{ fontFamily: "'Playfair Display', serif", mb: 3, lineHeight: 1.3 }}>
              La historia de Lourdes
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.8 }}>
              Todo empezó en la cocina de casa, con un delantal puesto y mucho entusiasmo. Lourdes descubrió su pasión
              por la repostería mientras preparaba el primer cumpleaños de su hijo, y desde entonces nunca paró.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.8 }}>
              Años de formación, práctica y perfeccionamiento la llevaron a desarrollar un estilo propio: la precisión y
              técnica de la repostería profesional, con el sabor y el amor que solo se logra cuando algo está hecho en
              casa.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
              Hoy Postres del Lourdes es mucho más que un emprendimiento: es un proyecto de vida que crece pedido a
              pedido, celebración a celebración, poniendo lo mejor en cada creación.
            </Typography>
          </Grid>

          {/* Photo collage placeholder */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Grid container spacing={2}>
              {[
                './fotos/20170514_110706.jpg',
                './fotos/20170518_072430.jpg',
                './fotos/20170905_203949.jpg',
                './fotos/20170527_113253.jpg',
              ].map((src) => (
                <Grid size={{ xs: 6 }} key={src}>
                  <Box
                    component="img"
                    src={src.replace('20170527', '20170528')}
                    alt=""
                    sx={{
                      width: '100%',
                      height: 180,
                      objectFit: 'cover',
                      borderRadius: 3,
                      filter: theme.palette.mode === 'dark' ? 'brightness(0.85)' : 'none',
                    }}
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      e.currentTarget.src = './fotos/20170514_110706.jpg'
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* Values */}
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {[
            {
              icon: <CakeIcon fontSize="large" />,
              title: 'Pasión por el sabor',
              desc: 'Cada receta es trabajada hasta lograr el balance perfecto de sabores. Nunca cortamos camino con la calidad de los ingredientes.',
            },
            {
              icon: <AutoAwesomeIcon fontSize="large" />,
              title: 'Diseño personalizado',
              desc: 'Cada pedido es único. Trabajamos con cada cliente para plasmar su visión en un postre que supere sus expectativas.',
            },
            {
              icon: <SchoolIcon fontSize="large" />,
              title: 'Formación continua',
              desc: 'Seguimos capacitándonos para incorporar nuevas técnicas y tendencias del mundo de la repostería.',
            },
          ].map((item) => (
            <Grid size={{ xs: 12, md: 4 }} key={item.title}>
              <Card sx={{ height: '100%', textAlign: 'center' }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ color: 'primary.main', mb: 1.5 }}>{item.icon}</Box>
                  <Typography variant="h6" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Skills */}
        <Box sx={{ mt: 7, textAlign: 'center' }}>
          <Typography variant="h4" sx={{ fontFamily: "'Playfair Display', serif", mb: 3 }}>
            ¿Qué hacemos?
          </Typography>
          <Stack direction="row" sx={{ gap: 1.5, flexWrap: 'wrap', justifyContent: 'center' }}>
            {SKILLS.map((s) => (
              <Chip
                key={s}
                label={s}
                color="primary"
                variant="outlined"
                sx={{ fontSize: '0.9rem', px: 0.5, py: 2.5 }}
              />
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
