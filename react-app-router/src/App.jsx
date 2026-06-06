import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router/Router";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Your routes go here */}
        <Link to="/">Home</Link>
        <Link to="/page1">Page 1</Link>
        <Link to="/page2">Page 2</Link>

        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
