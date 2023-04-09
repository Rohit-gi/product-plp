import { BrowserRouter, Routes, Route } from "react-router-dom";
import FetchProducts from "./components/FetchProducts";
import Error from "./components/Error";
import SingleProduct from "./components/SingleProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FetchProducts />}></Route>
        <Route path="/:name" element={<SingleProduct />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
