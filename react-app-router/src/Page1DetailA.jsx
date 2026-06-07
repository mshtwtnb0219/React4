import { useLocation, useNavigate } from "react-router-dom";

export const Page1DetailA = () => {
  const location = useLocation();
const navigation = useNavigate();

const onClickBack = () => {
  navigation(-1)
};
  return (
    <div>
      <h1>Page 1 Detail A{location.state?.arr ? `: ${location.state.arr.join(', ')}` : ''}</h1>
      <button onClick={onClickBack}>Back</button>
    </div>
  );
};
