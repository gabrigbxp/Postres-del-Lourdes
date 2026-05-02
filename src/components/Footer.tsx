import {
  Box,
  Container,
  Typography,
  IconButton,
  Divider,
  Tooltip,
  useTheme,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";

const SOCIAL = [
  {
    icon: <InstagramIcon />,
    href: "https://www.instagram.com/postres.del.lourdes",
    label: "Instagram",
    color: "#E1306C",
  },
  {
    icon: <FacebookIcon />,
    href: "https://www.facebook.com/postres.del.lourdes",
    label: "Facebook",
    color: "#1877F2",
  },
  {
    icon: <WhatsAppIcon />,
    href: "https://wa.me/+5491100000000",
    label: "WhatsApp",
    color: "#25D366",
  },
  {
    icon: <TelegramIcon />,
    href: "https://t.me/postres_del_lourdes",
    label: "Telegram",
    color: "#229ED9",
  },
  {
    icon: <EmailIcon />,
    href: "mailto:postres.del.lourdes@gmail.com",
    label: "Email",
    color: "#EA4335",
  },
];

export const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        py: 4,
        bgcolor: theme.palette.mode === "light" ? "#fdf0f4" : "#180f14",
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <Typography
            variant="h5"
            sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, mb: 0.5 }}
          >
            Postres del Lourdes
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontStyle: "italic" }}>
            Pastelería profesional, hecha en casa
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mb: 2 }}>
          {SOCIAL.map((s) => (
            <Tooltip key={s.label} title={s.label}>
              <IconButton
                component="a"
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                sx={{
                  color: s.color,
                  "&:hover": { bgcolor: `${s.color}22`, transform: "scale(1.15)" },
                  transition: "all 0.2s",
                }}
              >
                {s.icon}
              </IconButton>
            </Tooltip>
          ))}
        </Box>

        <Divider sx={{ mb: 2 }} />

        <Typography variant="caption" color="text.secondary" sx={{ display: "block", textAlign: "center" }}>
          © {new Date().getFullYear()} Postres del Lourdes. Todos los derechos reservados.
        </Typography>
      </Container>
    </Box>
  );
}
