import "./App.css";
import { Grid } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { ItemListContainer } from "./components/Item/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetail } from "./components/Item/ItemDetail";
import { CartProvider } from "./components/Context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Grid container direction="column">
          <Navbar />
          <Routes>
            <Route exact path="/products" element={<ItemListContainer />} />
            <Route exact path="/products/:title/:id" element={<ItemDetail />} />
          </Routes>
          <Footer />
        </Grid>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
