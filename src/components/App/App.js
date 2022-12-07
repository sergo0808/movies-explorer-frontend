/* eslint-disable react-hooks/exhaustive-deps */
import { Route, Switch, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import PageNotFound from "../PageNotFound/PageNotFound";
import NavBar from "../NavBar/NavBar";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";

import "./App.css";
import "../Form/Form.css";

import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";

import filtercards from "../../utils/filtercards";

function App() {
  const token = localStorage.getItem("token");

  const { innerWidth } = window;

  const isSmallScreen = useMediaQuery({ maxWidth: 767 });
  const isMiddleScreen = useMediaQuery({ maxWidth: 1279 });

  const history = useHistory();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpenNavBar, setIsOpenNavBar] = useState(false);
  const [resStatus, setResStatus] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [foundCards, setFoundCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [renderedCards, setRenderedCards] = useState([]);
  const [isVisibleButton, setIsVisibleButton] = useState(true);
  const [amountAddedCardsDepSize, setAmountAddedCardsDepSize] = useState(0);
  const [amountRenderedCards, setAmountRenderedCards] = useState(selectAmountDefaultCards());
  const [savedMovies, setSavedMovies] = useState([]);
  const [foundFromSavedMovies, setFoundFromSavedMovies] = useState([]);

  function selectAmountDefaultCards() {
    if (isSmallScreen) {
      return 5;
    } else if (isMiddleScreen) {
      return 8;
    } else {
      return 12;
    }
  }

  function selectAmountAddedCardsDepSize() {
    if (isSmallScreen) {
      setAmountAddedCardsDepSize(2);
    } else if (isMiddleScreen) {
      setAmountAddedCardsDepSize(2);
    } else {
      setAmountAddedCardsDepSize(3);
    }
  }

  function handleRenderCards(cards) {
    const visibleCard = cards.slice(0, amountRenderedCards);
    setRenderedCards(visibleCard);
  }

  function handleAmountRenderedCards() {
    setAmountRenderedCards(amountRenderedCards + amountAddedCardsDepSize);
  }

  function handleVisibilityButton(cards) {
    setIsVisibleButton(cards.length > amountRenderedCards);
  }

  function setUserInfo() {
    mainApi
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res.data);
      })
      .catch((err) => console.log(err));
  }

  function handleLoading() {
    setIsLoading(false);
  }

  function handleLogin({ email, password }) {
    setIsLoading(true);
    mainApi
      .login({ email, password })
      .then((res) => {
        setIsLoggedIn(true);
        setResStatus("");
        localStorage.setItem("token", res.token);
        setUserInfo();
        history.push("/movies");
      })
      .catch((err) => {
        console.log(err);
        setResStatus(err);
        setIsLoading(false);
      });
  }

  function handleRegistration({ name, email, password }) {
    setIsLoading(true);
    mainApi
      .registration({ name, email, password })
      .then(() => {
        handleLogin({ email, password });
        setResStatus("");
      })
      .catch((err) => {
        console.log(err);
        setResStatus(err);
        setIsLoading(false);
      });
  }

  function handleLogout() {
    setIsLoggedIn(false);
    localStorage.clear();
    setSavedMovies([]);
  }

  function tokenCheck() {
    if (token) {
      mainApi
        .getUserInfo()
        .then(() => {
          setUserInfo();
          setIsLoggedIn(true);
        })
        .catch(() => {
          setIsLoggedIn(false);
          localStorage.clear();
          setSavedMovies([]);
        });
    }
  }

  function handleChangeUserInfo({ name, email }) {
    mainApi
      .changeUserInfo({ name, email })
      .then((res) => {
        setResStatus(200);
        setCurrentUser(res.data);
      })
      .catch((err) => {
        console.log(err);
        setResStatus(err);
      });
  }

  const openNavBar = () => {
    setIsOpenNavBar(true);
  };

  const closeNavBar = () => {
    setIsOpenNavBar(false);
  };

  function handleResStatus() {
    setResStatus("");
  }

  function saveItemsInLocalStorage(text, isChecked, cards) {
    localStorage.setItem("textSearch", text);
    localStorage.setItem("isChecked", isChecked);
    localStorage.setItem("foundCards", JSON.stringify(cards));
  }

  function getMovies({ textSearch, isChecked }) {
    const filterCards = filtercards(cards, textSearch, isChecked);
    if (cards.length === 0 && textSearch) {
      setIsLoading(true);
      moviesApi
        .getMovies()
        .then((cards) => {
          const filterCards = filtercards(cards, textSearch, isChecked);
          setCards(cards);
          setFoundCards(filterCards);
          handleRenderCards(filterCards);
          saveItemsInLocalStorage(textSearch, isChecked, filterCards);
          handleVisibilityButton(filterCards);
        })
        .catch((err) => {
          setResStatus(500);
          console.log(err);
        })
        .finally(() => setIsLoading(false));
    }
    setFoundCards(filterCards);
    handleRenderCards(filterCards);
    saveItemsInLocalStorage(textSearch, isChecked, filterCards);
    handleVisibilityButton(filterCards);
  }

  function getSavedMovies() {
    if (savedMovies.length === 0) {
      setIsLoading(true);
      mainApi
        .getUserInfo()
        .then((res) => {
          mainApi
            .getMyMovies()
            .then((cards) => {
              const mySaveMovies = cards.filter((i) => i.owner === res._id);
              setSavedMovies(mySaveMovies);
              setFoundFromSavedMovies(mySaveMovies);
            })
            .catch((err) => {
              setResStatus(500);
              console.log(err);
            })
            .finally(() => setIsLoading(false));
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    }
  }

  function getFoundFromSavedMovies({ textSearch, isChecked }) {
    const filterCards = filtercards(savedMovies, textSearch, isChecked);
    setFoundFromSavedMovies(filterCards);
  }

  function handleCardLike(card) {
    const isLiked = savedMovies.some((i) => i.movieId === card.id);
    if (!isLiked) {
      mainApi
        .saveMovie({
          country: card.country,
          director: card.director,
          duration: card.duration,
          year: card.year,
          description: card.description,
          image: `https://api.nomoreparties.co/${card.image.url}`,
          trailerLink: card.trailerLink,
          thumbnail: `https://api.nomoreparties.co/${card.image.formats.thumbnail.url}`,
          movieId: card.id,
          nameRU: card.nameRU,
          nameEN: card.nameEN,
        })
        .then((newCard) => {
          setSavedMovies([...savedMovies, newCard]);
        })
        .catch((err) => console.log(err));
    } else {
      const relevantMovie = savedMovies.find((i) => i.movieId === card.id);
      mainApi
        .deleteMovie(relevantMovie)
        .then((movie) => {
          setSavedMovies(savedMovies.filter((i) => i.movieId !== movie.data.movieId));
        })
        .catch((err) => console.log(err));
    }
  }

  function handleCardDislike(card) {
    mainApi
      .deleteMovie(card._id)
      .then(() => {
        setSavedMovies(savedMovies.filter((i) => i.movieId !== card.movieId));
        setFoundFromSavedMovies(savedMovies.filter((i) => i.movieId !== card.movieId));
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    if (token) {
      setUserInfo();
    }
  }, []);

  useEffect(() => {
    selectAmountAddedCardsDepSize();
    setAmountRenderedCards(selectAmountDefaultCards());
  }, [innerWidth]);

  useEffect(() => {
    tokenCheck();
  }, [isLoggedIn]);

  useEffect(() => {
    handleVisibilityButton(foundCards);
  }, [amountRenderedCards]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header isLoggedIn={isLoggedIn} openNavBar={openNavBar} />
            <Main />
            <Footer />
          </Route>
          <ProtectedRoute
            path="/profile"
            isLoggedIn={token}
            children={
              <>
                <Header isLoggedIn={isLoggedIn} openNavBar={openNavBar} />
                <Profile
                  logout={handleLogout}
                  resStatus={resStatus}
                  setResStatus={handleResStatus}
                  onEditProfile={handleChangeUserInfo}
                />
              </>
            }
          />
          <ProtectedRoute
            path="/movies"
            isLoggedIn={token}
            children={
              <>
                <Header isLoggedIn={isLoggedIn} openNavBar={openNavBar} />
                <Movies
                  onSearch={getMovies}
                  isLoading={isLoading}
                  cards={renderedCards}
                  getSavedMovies={getSavedMovies}
                  savedMovies={savedMovies}
                  renderedFoundCards={handleRenderCards}
                  amountRenderedCards={amountRenderedCards}
                  resStatus={resStatus}
                  setIsLoading={handleLoading}
                  onLike={handleCardLike}
                  setResStatus={handleResStatus}
                  isVisibleButton={isVisibleButton}
                  onRenderCard={handleAmountRenderedCards}
                />
                <Footer />
              </>
            }
          />
          <ProtectedRoute
            path="/saved-movies"
            isLoggedIn={token}
            children={
              <>
                <Header isLoggedIn={isLoggedIn} openNavBar={openNavBar} />
                <SavedMovies
                  onSearch={getFoundFromSavedMovies}
                  isLoading={isLoading}
                  cards={foundFromSavedMovies}
                  savedMovies={savedMovies}
                  getSavedMovies={getSavedMovies}
                  onDislike={handleCardDislike}
                  resStatus={resStatus}
                  setResStatus={handleResStatus}
                  filterCard
                  onRenderCard={handleAmountRenderedCards}
                />
                <Footer />
              </>
            }
          />
          <ProtectedRoute
            path="/signup"
            isLoggedIn={!token}
            children={
              <Register
                onRegistration={handleRegistration}
                resStatus={resStatus}
                isLoading={!isLoading}
              />
            }
          />
          <ProtectedRoute
            path="/signin"
            isLoggedIn={!token}
            children={
              <Login onLoggedIn={handleLogin} resStatus={resStatus} isLoading={!isLoading} />
            }
          />
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <NavBar isOpen={isOpenNavBar} onClose={closeNavBar} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
