import { createContext, useCallback, useContext, useState, useMemo, type ReactNode } from "react";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import { buildTheme, type ColorVariant, type ThemeMode } from "../theme";

interface ThemeContextValue {
  mode: ThemeMode;
  variant: ColorVariant;
  toggleMode: () => void;
  setVariant: (v: ColorVariant) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  mode: "light",
  variant: "rose",
  toggleMode: () => {},
  setVariant: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>("light");
  const [variant, setVariant] = useState<ColorVariant>("rose");

  const toggleMode = useCallback(
    () => setMode((m) => (m === "light" ? "dark" : "light")),
    [],
  );

  const theme = useMemo(() => buildTheme(mode, variant), [mode, variant]);

  const value: ThemeContextValue = useMemo(
    () => ({ mode, variant, toggleMode, setVariant }),
    [mode, variant, toggleMode, setVariant],
  );

  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);
