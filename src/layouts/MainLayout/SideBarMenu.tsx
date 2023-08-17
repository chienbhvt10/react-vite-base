import List from "@mui/material/List";
import SideBarItem from "./SideBarItems";
import { app_images_icon } from "../../assets/images";
import { PATH } from "../../constants/path";

interface Props {
  open: boolean;
}

export interface ListItemType {
  title: string;
  path: string;
  icon: React.ReactNode;
  subItems?: {
    title: string;
    path: string;
    icon?: React.ReactNode;
  }[];
}

const listItems: ListItemType[] = [
  {
    title: "Statistic",
    path: "#",
    icon: <img src={app_images_icon.homeIcon} alt="" width={20} height={20} />,
    subItems: [
      {
        title: "Dashboard",
        path: PATH.HOME,
        icon: (
          <img src={app_images_icon.homeIcon} alt="" width={18} height={18} />
        ),
      },
      {
        title: "App Statistic",
        path: "#",
        icon: (
          <img src={app_images_icon.homeIcon} alt="" width={18} height={18} />
        ),
      },
    ],
  },
  {
    title: "Products management",
    path: "#",
    icon: <img src={app_images_icon.homeIcon} alt="" width={20} height={20} />,
    subItems: [
      {
        title: "Products",
        path: PATH.PRODUCT,
        icon: (
          <img src={app_images_icon.homeIcon} alt="" width={18} height={18} />
        ),
      },
      {
        title: "Test",
        path: "#",
        icon: (
          <img src={app_images_icon.homeIcon} alt="" width={18} height={18} />
        ),
      },
    ],
  },
];

const SideBarMenu = (props: Props) => {
  const { open } = props;

  return (
    <List disablePadding>
      {listItems.map((item) => (
        <SideBarItem key={Math.random()} item={item} open={open} />
      ))}
    </List>
  );
};

export default SideBarMenu;
