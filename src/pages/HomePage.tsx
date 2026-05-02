import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Avatar,
  Stack,
  Chip,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import CakeIcon from "@mui/icons-material/Cake";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import { useState } from "react";
import { photos } from "../data/photos";
import { Lightbox } from "../components/Lightbox";
import type { Photo } from "../data/photos";
import logoUrl from "../logo.jpg";

const FEATURED = photos.slice(0, 6);

const TESTIMONIALS = [
  {
    name: "María González",
    text: "Las tortas de Lourdes son simplemente espectaculares. Pedí la de mis 40 años y todos los invitados quedaron maravillados, ¡y qué decir del sabor!",
    avatar: "M",
    rating: 5,
  },
  {
    name: "Roberto Silva",
    text: "El desayuno sorpresa que le armó a mi esposa fue perfecto. Todo casero, todo rico, presentado con mucho cariño. Ya somos clientes fijos.",
    avatar: "R",
    rating: 5,
  },
  {
    name: "Claudia Fernández",
    text: "Los alfajores son los mejores que probé en mi vida. La porcelana fría de los muñecos es un arte. Muy profesional y puntual con la entrega.",
    avatar: "C",
    rating: 5,
  },
  {
    name: "Juan Martínez",
    text: "Pedí una torta temática para el cumpleaños de mi hijo y superó todas mis expectativas. Lourdes entiende exactamente lo que uno quiere.",
    avatar: "J",
    rating: 5,
  },
];

const HIGHLIGHTS = [
  {
    icon: <CakeIcon fontSize="large" />,
    title: "Elaboración artesanal",
    desc: "Cada postre es preparado con ingredientes seleccionados y dedicación personal.",
  },
  {
    icon: <FavoriteIcon fontSize="large" />,
    title: "Hecho con amor",
    desc: "Más de 10 años de experiencia transformados en sabores únicos e irrepetibles.",
  },
  {
    icon: <StarIcon fontSize="large" />,
    title: "Calidad profesional",
    desc: "Técnicas de repostería profesional aplicadas con el toque especial de lo casero.",
  },
  {
    icon: <DeliveryDiningIcon fontSize="large" />,
    title: "Pedidos personalizados",
    desc: "Diseñamos el postre perfecto para cada ocasión, adaptado a tus gustos.",
  },
];

export const HomePage = () => {
  const theme = useTheme();
  const [lightboxPhoto, setLightboxPhoto] = useState<Photo | null>(null);

  const lightboxIdx = lightboxPhoto ? FEATURED.indexOf(lightboxPhoto) : -1;
  const handlePrev = () =>
    setLightboxPhoto(FEATURED[(lightboxIdx - 1 + FEATURED.length) % FEATURED.length] ?? null);
  const handleNext = () =>
    setLightboxPhoto(FEATURED[(lightboxIdx + 1) % FEATURED.length] ?? null);

  return (
    <Box>
      {/* Hero */}
      <Box
        sx={{
          minHeight: { xs: "70vh", md: "85vh" },
          background:
            theme.palette.mode === "light"
              ? `linear-gradient(135deg, ${theme.palette.primary.light}55 0%, ${theme.palette.secondary.main}44 100%)`
              : `linear-gradient(135deg, ${theme.palette.primary.dark}44 0%, ${theme.palette.background.default} 100%)`,
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        {(["c1", "c2", "c3", "c4", "c5"] as const).map((id, i) => (
          <Box
            key={id}
            sx={{
              position: "absolute",
              borderRadius: "50%",
              border: `2px solid ${theme.palette.primary.main}33`,
              width: [120, 200, 300, 80, 160][i],
              height: [120, 200, 300, 80, 160][i],
              top: ["10%", "60%", "-10%", "70%", "20%"][i],
              left: ["5%", "80%", "70%", "15%", "55%"][i],
              pointerEvents: "none",
            }}
          />
        ))}

        <Container maxWidth="md" sx={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <Box
            component="img"
            src={logoUrl}
            alt="Postres de Lourdes"
            sx={{
              height: { xs: 120, sm: 160, md: 200 },
              width: "auto",
              borderRadius: "20px",
              mb: 3,
              boxShadow: 4,
              objectFit: "contain",
            }}
          />
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.2rem", sm: "3rem", md: "4rem" },
              fontWeight: 700,
              mb: 2,
              color: theme.palette.text.primary,
              lineHeight: 1.2,
            }}
          >
            Postres de Lourdes
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontStyle: "italic",
              color: theme.palette.primary.main,
              mb: 3,
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Pastelería profesional, hecha en casa
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 4, maxWidth: 560, mx: "auto", fontSize: "1.1rem", lineHeight: 1.7 }}
          >
            Tortas artesanales, desayunos sorpresa, cupcakes, alfajores y figuras en porcelana fría.
            Cada creación, un regalo para los sentidos.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ justifyContent: "center" }}>
            <Button
              component={Link}
              to="/galeria"
              variant="contained"
              size="large"
              sx={{ px: 4, py: 1.5 }}
            >
              Ver galería
            </Button>
            <Button
              component={Link}
              to="/contacto"
              variant="outlined"
              size="large"
              sx={{ px: 4, py: 1.5 }}
            >
              Hacer un pedido
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Highlights */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={3}>
          {HIGHLIGHTS.map((h) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={h.title}>
              <Box
                sx={{
                  textAlign: "center",
                  p: 3,
                  borderRadius: 3,
                  border: `1px solid ${theme.palette.divider}`,
                  height: "100%",
                  transition: "box-shadow 0.2s, transform 0.2s",
                  "&:hover": {
                    boxShadow: 4,
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Box sx={{ color: theme.palette.primary.main, mb: 1.5 }}>{h.icon}</Box>
                <Typography variant="h6" gutterBottom>
                  {h.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {h.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Featured gallery */}
      <Box
        sx={{
          bgcolor:
            theme.palette.mode === "light"
              ? `${theme.palette.primary.light}22`
              : theme.palette.background.paper,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{ mb: 1, fontFamily: "'Playfair Display', serif", textAlign: "center" }}
          >
            Nuestros productos
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 5, maxWidth: 480, mx: "auto", textAlign: "center" }}
          >
            Una pequeña muestra de lo que preparamos con dedicación cada día.
          </Typography>

          <Grid container spacing={2}>
            {FEATURED.map((photo) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={photo.src}>
                <Card
                  sx={{
                    cursor: "pointer",
                    overflow: "hidden",
                    "&:hover .photo-overlay": { opacity: 1 },
                    "&:hover img": { transform: "scale(1.05)" },
                  }}
                  onClick={() => setLightboxPhoto(photo)}
                >
                  <Box sx={{ position: "relative", overflow: "hidden" }}>
                    <CardMedia
                      component="img"
                      height={240}
                      image={photo.src}
                      alt={photo.title}
                      sx={{ transition: "transform 0.4s ease", objectFit: "cover" }}
                    />
                    <Box
                      className="photo-overlay"
                      sx={{
                        position: "absolute",
                        inset: 0,
                        bgcolor: "rgba(0,0,0,0.45)",
                        opacity: 0,
                        transition: "opacity 0.3s",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="button" sx={{ color: "white", fontSize: "1rem" }}>
                        Ver más
                      </Typography>
                    </Box>
                  </Box>
                  <CardContent sx={{ py: 1.5, px: 2 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      {photo.title}
                    </Typography>
                    <Chip
                      label={photo.category}
                      size="small"
                      sx={{ mt: 0.5, fontSize: "0.7rem" }}
                      color="primary"
                      variant="outlined"
                    />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Button component={Link} to="/galeria" variant="outlined" size="large" sx={{ px: 5 }}>
              Ver galería completa
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Testimonials */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          sx={{ mb: 1, fontFamily: "'Playfair Display', serif", textAlign: "center" }}
        >
          Lo que dicen nuestros clientes
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 5, maxWidth: 480, mx: "auto", textAlign: "center" }}
        >
          La satisfacción de cada cliente es nuestra mayor recompensa.
        </Typography>

        <Grid container spacing={3}>
          {TESTIMONIALS.map((t) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={t.name}>
              <Card sx={{ height: "100%", p: 1 }}>
                <CardContent>
                  <Stack direction="row" spacing={0.5} sx={{ mb: 2 }}>
                    {Array.from({ length: t.rating }, (_, i) => (
                      <StarIcon key={`star-${i}`} fontSize="small" sx={{ color: "#f4c542" }} />
                    ))}
                  </Stack>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2.5, fontStyle: "italic", lineHeight: 1.7 }}
                  >
                    "{t.text}"
                  </Typography>
                  <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
                    <Avatar sx={{ bgcolor: "primary.main", width: 36, height: 36, fontSize: "0.9rem" }}>
                      {t.avatar}
                    </Avatar>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      {t.name}
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA */}
      <Box
        sx={{
          py: 8,
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
          color: "white",
          textAlign: "center",
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h4" sx={{ fontFamily: "'Playfair Display', serif", mb: 2 }}>
            ¿Tenés un evento especial?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
            Escribinos y diseñamos juntos el postre perfecto para tu ocasión.
          </Typography>
          <Button
            component={Link}
            to="/contacto"
            variant="contained"
            size="large"
            sx={{
              bgcolor: "white",
              color: "primary.main",
              px: 5,
              py: 1.5,
              "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
            }}
          >
            Contactanos
          </Button>
        </Container>
      </Box>

      <Lightbox
        photo={lightboxPhoto}
        photos={FEATURED}
        onClose={() => setLightboxPhoto(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </Box>
  );
}
