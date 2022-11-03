import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ShoppingCart } from "./components/ShoppingCart/ShoppingCart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={""} />
        <Route path= "/Cart" element={<ShoppingCart/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
