import { Box, Paper } from "@mui/material";
import { FC, PropsWithChildren, ReactNode } from "react";
import { Helmet } from "react-helmet";
import BreadCrumbCustom from "./BreadCrumb";

interface PageContainerProps {
  title: string;
  meta?: ReactNode;
}

const PageContainer: FC<PropsWithChildren<PageContainerProps>> = (props) => {
  const { children, title, meta } = props;
  return (
    <Box>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        {meta}
      </Helmet>
      <BreadCrumbCustom />
      <Paper
        elevation={12}
        sx={{
          backgroundColor: "background.paper",
          p: 2,
          mx: 2,
          mt: 1,
          minHeight: "calc(100vh - 130px)",
        }}
      >
        {children}
      </Paper>
    </Box>
  );
};

export default PageContainer;
