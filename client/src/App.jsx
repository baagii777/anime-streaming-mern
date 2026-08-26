import "./app.scss";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import Navbar from "./components/navbar/Navbar";
import Featured from "./components/featured/Featured";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";
import Footer from "./components/footer/Footer";
import { Search } from "./pages/search/Search";

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Redirect to="/register" />}
        </Route>
        <Route path="/register">
          {!user ? <Register /> : <Redirect to="/" />}
        </Route>
        <Route path="/login">
          {!user ? <Login /> : <Redirect to="/" />}
        </Route>
        {user && (
          <>
            <Route path="/animes">
              <Home type="animes" />
            </Route>
            <Route path="/movies">
              <Home type="movies" />
            </Route>
            <Route path="/watch">
              <Watch />
            </Route>
            <Route path="/search">
              <Navbar/>
              <Featured/>
              <Search/>
              <Footer/>
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
};


export default App;
