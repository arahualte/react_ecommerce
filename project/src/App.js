import "./App.css";
import { Grid } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { ItemListContainer } from "./components/Item/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetail } from "./components/Item/ItemDetail";
import { CartProvider } from "./components/Context/CartContext";
import { Cart } from "./components/Cart/Cart";
import { CartCheckout } from "./components/Cart/CartCheckout";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Grid container direction="column">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/products" element={<ItemListContainer />} />
            <Route
              exact
              path="/products/:title/:id/:description"
              element={<ItemDetail />}
            />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/checkout" element={<CartCheckout />} />
          </Routes>
          <Footer />
        </Grid>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
