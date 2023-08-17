import { Breadcrumbs, Link, LinkProps, Typography } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";

interface BreadCrumbCustomProps {}

const breadcrumbNameMap: { [key: string]: string } = {
  "/products": "Products",
};

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}
function LinkRouter(props: LinkRouterProps) {
  return <Link {...props} component={RouterLink as any} />;
}
const BreadCrumbCustom = (_: BreadCrumbCustomProps) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  console.log(pathnames);
  return (
    <Breadcrumbs sx={{ mx: 2, pt: 1 }}>
      <LinkRouter underline="hover" color="inherit" to="/">
        Home
      </LinkRouter>
      {pathnames.map((_, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return last ? (
          <Typography color="text.primary" key={to}>
            {breadcrumbNameMap[to]}
          </Typography>
        ) : (
          <LinkRouter underline="hover" color="inherit" to={to} key={to}>
            {breadcrumbNameMap[to]}
          </LinkRouter>
        );
      })}
    </Breadcrumbs>
  );
};

export default BreadCrumbCustom;
