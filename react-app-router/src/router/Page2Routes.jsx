import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const page2Routes = [
  {
    path: "/",
    children: <Page2 />,
  },
  {
    // URLパラメータを受け取るルート
    path: "/page2/:id",
    children: <UrlParameter />,
  },
];
