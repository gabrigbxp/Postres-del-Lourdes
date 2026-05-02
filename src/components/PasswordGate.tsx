import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Alert,
  InputAdornment,
  IconButton,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import logoUrl from "../logo.jpg";

const STORAGE_KEY = "pdl_auth";
const SITE_PASSWORD = process.env.BUN_PUBLIC_SITE_PASSWORD;

const isAuthenticated = () => localStorage.getItem(STORAGE_KEY) === "1";

export const PasswordGate = ({ children }: { children: React.ReactNode }) => {
  const [unlocked, setUnlocked] = useState(isAuthenticated);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  if (unlocked) return <>{children}</>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === SITE_PASSWORD) {
      localStorage.setItem(STORAGE_KEY, "1");
      setUnlocked(true);
    } else {
      setError(true);
      setInput("");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #f7c5d055 0%, #d8caee44 100%)",
        p: 2,
      }}
    >
      <Card sx={{ maxWidth: 380, width: "100%", borderRadius: 4, boxShadow: 6 }}>
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 3 }}>
            <Box
              component="img"
              src={logoUrl}
              alt="Postres de Lourdes"
              sx={{ height: 96, width: "auto", borderRadius: 3, mb: 2, boxShadow: 2 }}
            />
            <Typography
              variant="h6"
              sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, textAlign: "center" }}
            >
              Postres de Lourdes
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
              Sitio en construcción
            </Typography>
          </Box>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField
              label="Contraseña"
              type={showPassword ? "text" : "password"}
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setError(false);
              }}
              autoFocus
              fullWidth
              error={error}
              size="small"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlinedIcon fontSize="small" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        size="small"
                        onClick={() => setShowPassword((s) => !s)}
                        aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOffIcon fontSize="small" /> : <VisibilityIcon fontSize="small" />}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
            {error && (
              <Alert severity="error" sx={{ py: 0.5 }}>
                Contraseña incorrecta
              </Alert>
            )}
            <Button type="submit" variant="contained" fullWidth sx={{ mt: 0.5 }}>
              Ingresar
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
