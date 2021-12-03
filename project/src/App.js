import "./App.css";
import { Grid } from "@material-ui/core";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { ItemListContainer } from "./components/Item/ItemListContainer";

// import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <ItemListContainer />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
      <Footer />
    </Grid>
  );
}

export default App;
