import React from "react";
import {
    SearchIcon,
    AccountCircleIcon,
    SubscriptionsIcon,
    // AudiotrackIcon,
    // FavoriteIcon,
    QueueIcon
} from "@mui/icons-material";

export const SidebarData = [{
    title: "Search",
    path: "/search",
    icon: <SearchIcon />,
  },
  {
    title: "SignIn|SignUp",
    path: "/SignIn",
    icon: <AccountCircleIcon />,
  },
  {
    title: "Library",
    path: "/library",
    icon: <SubscriptionsIcon />,
  },
  {
    title: "Recently Played",
    path: "/recently",
    icon: <QueueIcon />,
  },
];
