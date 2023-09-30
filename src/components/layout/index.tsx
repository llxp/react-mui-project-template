import Header from "../header";
import Footer from "../footer";
import MainContent from "../main";
import MUI from "./mui";
import { useTranslation } from "react-i18next";
import routes from "../../routes";

export default function Layout() {
  const { t } = useTranslation();
  const routesTranslated = routes.map((route) => ({
    ...route,
    title: t(route.title),
  }));
  return <MUI>
    <Header title={t("platform")} routes={routesTranslated}>
      <MainContent />
    </Header>
    <Footer />
  </MUI>
}