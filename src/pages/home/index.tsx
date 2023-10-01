import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface BearState {
  bears: number
  increase: (by: number) => void
  reset: () => void
}

export default function Home() {
    const { t } = useTranslation();

  const useBearStore = create<BearState>()(
    devtools(
      persist(
        (set) => ({
          bears: 0,
          increase: (by) => set((state) => ({ bears: state.bears + by })),
          reset: () => set({ bears: 0 }),
        }),
        { name: 'bear-storage' }
      )
    )
  )

  const increase = useBearStore((state) => state.increase)
  const reset = useBearStore((state) => () => state.reset())
  const bears = useBearStore((state) => state.bears)
  return (
    <div>
      <h1>Content</h1>
      <Button onClick={() => increase(1)} variant="contained">
      {t("count")} {bears}
      </Button>
      <Button onClick={() => reset()} variant="outlined" color="error">
      {t("reset")}
      </Button>
    </div>
  );
}