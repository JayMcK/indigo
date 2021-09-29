import "../App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./ui/Theme";

import Header from "./ui/Header";
import Footer from "./ui/Footer";
import Home from "./Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact render={(props) => <Home {...props} />} />
          <Route path="/search" component={() => <h1>SearchPage</h1>} />
          <Route path="/not-found" component={() => <h1>404 Page</h1>} />
          <Redirect to="not-found" />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
