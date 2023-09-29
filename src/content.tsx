import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import { Outlet } from "react-router-dom";

export default function Content() {

    return <Box sx={{
      flexGrow: 1,
      minWidth: "100%",
      flexDirection: "column",
      display: "flex",
      justifyContent: "center",
      background: "linear-gradient(45deg, #9013FE 15%, #50E3C2 90%)",
    }}>
      <Container sx={{
        minHeight: "calc(100vh - 64px)",
      }}>
        <Card sx={{
          minHeight: "calc((100vh - 64px) / 1.5)",
          mt: 8,
          mx: "auto",
        }}>
          <Outlet />
        </Card>
      </Container>
    </Box>
}