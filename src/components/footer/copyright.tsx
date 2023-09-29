import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";

export default function Copyright() {
  const { t } = useTranslation();
  return (
    <Typography variant="body2" color="text.secondary">
      <Link color="inherit" href="https://mui.com/">
        {t("copyright")}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}