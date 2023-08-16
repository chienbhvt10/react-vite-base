import Box, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import {
  DRAWER_WIDTH,
  HEADER_HEIGHT,
  SMALL_DRAWER_WIDTH,
} from "../../constants";

interface ContentBounderProps extends BoxProps {
  open?: boolean;
}

interface Props extends ContentBounderProps {
  children: React.ReactNode;
}

const ContentBounder = (props: Props) => {
  const { children, open } = props;
  return (
    <Box>
      <Bounder open={open}>{children}</Bounder>
    </Box>
  );
};

const Bounder = styled(Box, {
  shouldForwardProp: (prop) => prop !== "open",
})<ContentBounderProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginTop: HEADER_HEIGHT,
  marginLeft: SMALL_DRAWER_WIDTH,
  width: `calc(100% - ${SMALL_DRAWER_WIDTH}px)`,
  ...(open && {
    marginLeft: DRAWER_WIDTH,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default ContentBounder;
