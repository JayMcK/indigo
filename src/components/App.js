import { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./ui/Theme";

import Header from "./ui/Header";
import Footer from "./ui/Footer";
import NotFound from "./ui/NotFound";
import Home from "./Home";
import Search from "./Search";
import "../App.css";
import ScrollToTop from "./ui/ScrollToTop";

function App() {
  const [singleMovieString, setSingleMovieString] = useState("");
  const [searchMoviesString, setSearchMoviesString] = useState("");
  const [foundSearch, setFoundSearch] = useState(null);
  const [foundMovie, setFoundMovie] = useState(null);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Home
                {...props}
                singleMovieString={singleMovieString}
                setSingleMovieString={setSingleMovieString}
                searchMoviesString={searchMoviesString}
                setSearchMoviesString={setSearchMoviesString}
                foundMovie={foundMovie}
                setFoundMovie={setFoundMovie}
              />
            )}
          />
          <Route
            path="/search"
            render={(props) => (
              <Search
                singleMovieString={singleMovieString}
                setSingleMovieString={setSingleMovieString}
                searchMoviesString={searchMoviesString}
                setSearchMoviesString={setSearchMoviesString}
                setFoundSearch={setFoundSearch}
                foundSearch={foundSearch}
                foundMovie={foundMovie}
                setFoundMovie={setFoundMovie}
                {...props}
              />
            )}
          />
          <Route
            path="/not-found"
            render={(props) => <NotFound {...props} />}
          />
          <Redirect to="not-found" />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
