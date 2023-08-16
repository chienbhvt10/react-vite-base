import { Box, Container, Paper } from "@mui/material";
import { Outlet } from "react-router-dom";
import { app_images } from "../../assets/images";

const AuthLayout = () => {
  return (
    <Box
      sx={{
        "&:before": {
          content: "''",
          backgroundImage: `url('${app_images.landingpage_image}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: 0.5,
          left: 0,
          top: 0,
          width: 1,
          height: 1,
          position: "absolute",
          zIndex: 1,
        },
        height: 1,
        display: "flex",
      }}
    >
      <Container maxWidth="xs" sx={{ margin: "auto", zIndex: 10, mt: 15 }}>
        <Paper elevation={4} sx={{ p: 3 }} variant="elevation">
          <Outlet />
        </Paper>
      </Container>
    </Box>
  );
};

export default AuthLayout;
