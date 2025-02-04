// Imports /////////////////////////////////////////////////////////
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import CategoricalCollections from "./pages/CategoricalCollections";
import ProductOverview from "./pages/ProductOverview";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Order from "./pages/Order";
import NotFoundPage from "./pages/NotFoundPage";
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="collections" element={<Collections />} />
          <Route
            path="collections/:categoryName"
            element={<CategoricalCollections />}
          />
          <Route path="product/:productId" element={<ProductOverview />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="order" element={<Order />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
