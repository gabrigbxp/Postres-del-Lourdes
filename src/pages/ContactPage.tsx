import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Stack,
  useTheme,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";

const CONTACT_ITEMS = [
  {
    icon: <WhatsAppIcon sx={{ fontSize: 40 }} />,
    label: "WhatsApp",
    description: "Escribinos directamente por WhatsApp para consultas y pedidos.",
    action: "Abrir WhatsApp",
    href: "https://wa.me/+5491100000000?text=Hola%20Lourdes%2C%20me%20gustaría%20hacerles%20un%20pedido",
    color: "#25D366",
  },
  {
    icon: <InstagramIcon sx={{ fontSize: 40 }} />,
    label: "Instagram",
    description: "Seguinos en Instagram para ver nuestras últimas creaciones y novedades.",
    action: "Abrir Instagram",
    href: "https://www.instagram.com/postres.del.lourdes",
    color: "#E1306C",
  },
  {
    icon: <FacebookIcon sx={{ fontSize: 40 }} />,
    label: "Facebook",
    description: "Visitá nuestra página de Facebook y dejanos un mensaje.",
    action: "Abrir Facebook",
    href: "https://www.facebook.com/postres.del.lourdes",
    color: "#1877F2",
  },
  {
    icon: <TelegramIcon sx={{ fontSize: 40 }} />,
    label: "Telegram",
    description: "También podés contactarnos por Telegram en cualquier momento.",
    action: "Abrir Telegram",
    href: "https://t.me/postres_del_lourdes",
    color: "#229ED9",
  },
  {
    icon: <EmailIcon sx={{ fontSize: 40 }} />,
    label: "Correo electrónico",
    description: "Si preferís el mail, escribinos y te respondemos a la brevedad.",
    action: "Enviar email",
    href: "mailto:postres.del.lourdes@gmail.com",
    color: "#EA4335",
  },
];

export const ContactPage = () => {
  const theme = useTheme();

  return (
    <Box>
      {/* Header */}
      <Box
        sx={{
          py: { xs: 5, md: 7 },
          textAlign: "center",
          bgcolor:
            theme.palette.mode === "light"
              ? `${theme.palette.primary.light}33`
              : theme.palette.background.paper,
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ fontFamily: "'Playfair Display', serif", mb: 1.5 }}>
            Contacto
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 520, mx: "auto" }}>
            Estamos para ayudarte. Elegí el canal que más te guste y escribinos. Respondemos todos
            los días.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ py: 7 }}>
        <Grid container spacing={3}>
          {CONTACT_ITEMS.map((item) => (
            <Grid size={{ xs: 12, sm: 6 }} key={item.label}>
              <Card
                sx={{
                  height: "100%",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  "&:hover": { transform: "translateY(-4px)", boxShadow: 6 },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Stack direction="row" spacing={2} sx={{ alignItems: "flex-start", mb: 2 }}>
                    <Box sx={{ color: item.color, flexShrink: 0 }}>{item.icon}</Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 700 }} gutterBottom>
                        {item.label}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                        {item.description}
                      </Typography>
                    </Box>
                  </Stack>
                  <Button
                    component="a"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    fullWidth
                    sx={{
                      borderColor: item.color,
                      color: item.color,
                      "&:hover": {
                        borderColor: item.color,
                        bgcolor: `${item.color}18`,
                      },
                    }}
                  >
                    {item.action}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Note */}
        <Box
          sx={{
            mt: 6,
            p: 3,
            borderRadius: 3,
            bgcolor:
              theme.palette.mode === "light"
                ? `${theme.palette.primary.light}22`
                : theme.palette.background.paper,
            border: `1px solid ${theme.palette.primary.main}33`,
            textAlign: "center",
          }}
        >
          <Typography variant="h6" sx={{ fontFamily: "'Playfair Display', serif", mb: 1 }}>
            ¿Necesitás un presupuesto?
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 480, mx: "auto" }}>
            Para pedidos especiales, contanos el tipo de evento, la cantidad de personas, la fecha y
            cualquier detalle importante. Así podemos darte un presupuesto personalizado lo más
            rápido posible.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
