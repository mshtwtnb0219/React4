import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";

export const page1Routes = [
  {
    path: "/",
    children: <Page1 />,
  },
  {
    path: "/page1/detailA",
    children: <Page1DetailA />,
  },
  {
    path: "/page1/detailB",
    children: <Page1DetailB />,
  },
];
