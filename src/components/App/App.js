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
import moviesApi from "../../utils/MoviesApi";
import filtercards from "../../utils/filtercards";
import * as mainApi from "../../utils/MainApi";

function App() {
  const token = localStorage.getItem("token");
  const { innerWidth } = window;
  const isSmallScreen = useMediaQuery({ maxWidth: 700 });
  const isMiddleScreen = useMediaQuery({ maxWidth: 1200 });
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

  const signOut = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setCurrentUser({});
    setSavedMovies([]);
    history.push("/signin");
  };

  const onLogin = ({ email, password }) => {
    return mainApi.authorize(email, password).then((res) => {
      if (res.token) {
        localStorage.setItem("token", res.token);
        setIsLoggedIn(true);
      }
    });
  };

  const onRegister = ({ name, email, password }) => {
    return mainApi
      .register(name, email, password)
      .then(() => {
        setResStatus("");
      })
      .then(() => {
        onLogin({ email, password });
      })
      .catch((err) => {
        setResStatus(err.status);
        setIsLoading(false);
      });
  };

  const auth = async (token) => {
    const content = await mainApi.getContent(token).then((data) => {
      if (data) {
        setIsLoggedIn(true);
        setCurrentUser(data.data);
      }
    });
    return content;
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      auth(token);
      history.push("/movies");
    }
  }, [isLoggedIn]);

  function selectAmountDefaultCards() {
    if (isSmallScreen) {
      return 5;
    } else if (isMiddleScreen) {
      return 8;
    } else {
      return 12;
    }
  }

  const selectAmountAddedCardsDepSize = () => {
    if (isSmallScreen) {
      setAmountAddedCardsDepSize(2);
    } else if (isMiddleScreen) {
      setAmountAddedCardsDepSize(2);
    } else {
      setAmountAddedCardsDepSize(3);
    }
  };

  const handleRenderCards = (cards) => {
    const sliceCard = cards.slice(0, amountRenderedCards);
    setRenderedCards(sliceCard);
  };

  const handleСountRenderedCards = () => {
    setAmountRenderedCards(amountRenderedCards + amountAddedCardsDepSize);
  };

  const handleVisibilityButton = (cards) => {
    setIsVisibleButton(cards.length > amountRenderedCards);
  };

  const setUserInfo = () => {
    mainApi
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleLoading = () => {
    setIsLoading(false);
  };

  const handleChangeUserInfo = ({ name, email }) => {
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
  };

  const openNavBar = () => {
    setIsOpenNavBar(true);
  };

  const closeNavBar = () => {
    setIsOpenNavBar(false);
  };

  const handleResStatus = () => {
    setResStatus("");
  };

  const saveItemsInLocalStorage = (text, isChecked, cards) => {
    localStorage.setItem("textSearch", text);
    localStorage.setItem("isChecked", isChecked);
    localStorage.setItem("foundCards", JSON.stringify(cards));
  };

  const getMovies = ({ textSearch, isChecked }) => {
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
  };

  const getSavedMovies = () => {
    if (isLoggedIn) {
      Promise.all([mainApi.getUserInfo(), mainApi.getMyMovies()])
        .then(([res, cards]) => {
          const mySaveMovies = cards.filter((i) => i.owner === currentUser._id);
          setSavedMovies(mySaveMovies);
          setFoundFromSavedMovies(mySaveMovies);
        })
        .catch((err) => {
          setResStatus(500);
          console.log(err);
        })
        .finally(() => setIsLoading(false));
    }
  };

  const getFoundFromSavedMovies = ({ textSearch, isChecked }) => {
    const filterCards = filtercards(savedMovies, textSearch, isChecked);
    setFoundFromSavedMovies(filterCards);
  };

  const handleCardSave = (card) => {
    const isSaved = savedMovies.some((i) => i.movieId === card.id);
    if (!isSaved) {
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
        .deleteMovie(relevantMovie._id)
        .then(() => {
          setSavedMovies(savedMovies.filter((i) => i.movieId !== relevantMovie.movieId));
        })
        .catch((err) => console.log(err));
    }
  };

  const handleCardDelete = (card) => {
    mainApi
      .deleteMovie(card._id)
      .then(() => {
        setSavedMovies(savedMovies.filter((i) => i.movieId !== card.movieId));
        setFoundFromSavedMovies(savedMovies.filter((i) => i.movieId !== card.movieId));
      })
      .catch((err) => console.log(err));
  };

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
            path="/movies"
            isLoggedIn={token}
            children={
              <>
                <Header isLoggedIn={isLoggedIn} openNavBar={openNavBar} />
                <Movies
                  isLoggedIn={isLoggedIn}
                  onSearch={getMovies}
                  isLoading={isLoading}
                  cards={renderedCards}
                  getSavedMovies={getSavedMovies}
                  savedMovies={savedMovies}
                  renderedFoundCards={handleRenderCards}
                  amountRenderedCards={amountRenderedCards}
                  resStatus={resStatus}
                  setIsLoading={handleLoading}
                  onSave={handleCardSave}
                  onDelete={handleCardDelete}
                  setResStatus={handleResStatus}
                  isVisibleButton={isVisibleButton}
                  onRenderCard={handleСountRenderedCards}
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
                  onSave={handleCardSave}
                  onDelete={handleCardDelete}
                  resStatus={resStatus}
                  setResStatus={handleResStatus}
                  filterCard
                  onRenderCard={handleСountRenderedCards}
                />
                <Footer />
              </>
            }
          />
          <ProtectedRoute
            path="/signup"
            isLoggedIn={!token}
            children={
              <Register onRegistration={onRegister} resStatus={resStatus} isLoading={!isLoading} />
            }
          />
          <ProtectedRoute
            path="/signin"
            isLoggedIn={!token}
            children={<Login onLoggedIn={onLogin} resStatus={resStatus} isLoading={!isLoading} />}
          />
          <ProtectedRoute
            path="/profile"
            isLoggedIn={token}
            children={
              <>
                <Header isLoggedIn={isLoggedIn} openNavBar={openNavBar} />
                <Profile
                  logout={signOut}
                  resStatus={resStatus}
                  setResStatus={handleResStatus}
                  onEditProfile={handleChangeUserInfo}
                />
              </>
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
