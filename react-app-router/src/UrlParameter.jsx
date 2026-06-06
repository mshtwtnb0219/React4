import {useParams, useLocation} from "react-router-dom";


export const UrlParameter = () => {
    const { id } = useParams();
    const { search } = useLocation();

    const query = new URLSearchParams(search);

    return (
        <div>
            <h1>Url Parameterページです</h1>
            <p>パラメータの値: {id}</p>
            <p>クエリパラメータの値: {query.get("name")}</p>
        </div>
    )
}