import { Link, Outlet } from "react-router-dom"

export const Page1 = () => {
    return (
        <div>
            <h1>Page 1</h1>
            <Link to="/page1/detailA">View Detail A</Link>
            <br />
            <Link to="/page1/detailB">View Detail B</Link>
            {/* ネストされたルートの表時空間の指定するプレースホルダ↓にPageDetailA Bが表示される */}
            <Outlet/>
        </div>
    )
}