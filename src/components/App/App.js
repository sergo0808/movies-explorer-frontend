import React from "react";
import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Main from "../Main/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";
import NavBar from "../NavBar/NavBar";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import PageNotFound from "../PageNotFound/PageNotFound";
import api from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";

function App() {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const [cards, setCards] = useState([]);

  api
    .getMovies()
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));

  function handleAddMovies(input) {
    mainApi.addCardApi(input).then((input) => {
      console.log(input);
      setCards(input, ...cards);
    });
  }

  const openNavBar = () => {
    setIsNavBarOpen(true);
  };

  const closeNavBar = () => {
    setIsNavBarOpen(false);
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header openNavBar={openNavBar} />
          <Main />
          <Footer />
        </Route>
        <Route path="/movies">
          <Header openNavBar={openNavBar} />
          <Movies cards={cards} onAddMovies={handleAddMovies} />
          <Footer />
        </Route>
        <Route path="/saved-movies">
          <Header openNavBar={openNavBar} />
          <SavedMovies />
          <Footer />
        </Route>
        <Route path="/profile">
          <Header openNavBar={openNavBar} />
          <Profile />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      <NavBar isOpen={isNavBarOpen} onClose={closeNavBar} />
    </div>
  );
}

export default App;
