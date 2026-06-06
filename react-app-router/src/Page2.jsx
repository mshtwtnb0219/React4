import { Link, Outlet } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page 2</h1>
      <Link to="/page2/123">URL Parameter</Link>
      <br />
      <Link to="/page2/123?name=hoge">Query Parameter</Link>
      <Outlet />
    </div>
  );
};
