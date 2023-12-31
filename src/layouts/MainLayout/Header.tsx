import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import LogoutIcon from "@mui/icons-material/Logout";
import { useLocation, useNavigate } from "react-router-dom";
import { PATH } from "../../constants/path";
import { DRAWER_WIDTH } from "../../constants";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

interface Props extends AppBarProps {
  handleDrawerOpen?: () => void;
}

const Header = (props: Props) => {
  const { handleDrawerOpen, open } = props;
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const onLogout = () => {
    navigate(PATH.LOGIN);
  };

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar
        sx={{
          px: pathname === "" ? 5 : 2.25,
          backgroundColor: "#FFFFFF",
          display: "flex",
          justifyContent: "space-between",
        }}
        disableGutters={true}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {pathname !== "" && (
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon fontSize="medium" />
            </IconButton>
          )}
        </Box>
        <IconButton onClick={onLogout}>
          <LogoutIcon color="primary" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: DRAWER_WIDTH,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
