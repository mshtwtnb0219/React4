import { Link, Outlet, useNavigate } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(5).keys()];

  // useHistoryはv6からuseNavigateに変更された
  const navigate = useNavigate();
  const onClickDetailA = () => {
    navigate("/page1/detailA", { state: { arr } });
  };

  return (
    <div>
      <h1>Page 1</h1>
      <Link to="/page1/detailA" state={{ arr }}>
        View Detail A
      </Link>
      <br />
      <Link to="/page1/detailB">View Detail B</Link>
      {/* ネストされたルートの表時空間の指定するプレースホルダ↓にPageDetailA Bが表示される */}
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
      <Outlet />
    </div>
  );
};
