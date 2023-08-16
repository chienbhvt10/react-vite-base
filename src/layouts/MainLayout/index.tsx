import { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import ContentBounder from "./ContentBounder";
import Header from "./Header";
import SideBar from "./SideBar";

const MainLayout = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Header handleDrawerOpen={handleDrawerOpen} open={open} />
      <SideBar handleDrawerClose={handleDrawerClose} open={open} />
      <ContentBounder open={open}>
        <Outlet />
      </ContentBounder>
    </Fragment>
  );
};

export default MainLayout;
