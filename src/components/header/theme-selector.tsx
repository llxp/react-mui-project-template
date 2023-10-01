import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import IconButton from "@mui/material/IconButton";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface ThemeState {
  currentMode: string;
  toggleMode: () => void;
}

export const useThemeStore = create<ThemeState>()(
  devtools(
    persist(
      (set) => ({
        currentMode: "light",
        toggleMode: () => set((state) => ({ currentMode: state.currentMode === "dark" ? "light" : "dark" })),
      }),
      { name: 'bear-storage' }
    )
  )
)

export default function ThemeSelector() {
  // implement a theme selector toggle button using mui button
  const currentMode = useThemeStore((state) => state.currentMode);
  const toggleMode = useThemeStore((state) => state.toggleMode);

  return <IconButton onClick={toggleMode}>
    {currentMode === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
  </IconButton>
}