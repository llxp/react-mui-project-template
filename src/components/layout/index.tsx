import Header from "../header";
import Footer from "../footer";
import MainContent from "../main";
import MUI from "./mui";
import { useTranslation } from "react-i18next";
import routes from "../../routes";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

export default function Layout() {
  const { t } = useTranslation();
  const routesTranslated = routes.map((route) => ({
    ...route,
    title: t(route.title),
  }));

  return (
    <MUI>
      <Header title={t("platform")} routes={routesTranslated} />
      <Box component="main">
        <Toolbar />
        <MainContent />
      </Box>
      <Footer routes={routesTranslated}/>
    </MUI>
  );
}