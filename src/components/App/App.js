import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Main from '../Main/Main'
// import Login from '../Login/Login'
// import Register from '../Register/Register'
import Header from '../Header/Header'
// import Footer from '../Footer/Footer'
// import Navigation from '../Navigation/Navigation'
// // import ProtectedRoute from '../ProtectedRoute'
// import Movies from '../Movies/Movies'
// import SavedMovies from '../SavedMovies/SavedMovies'



function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact
          path="/">
          <Main />
        </Route>

        <Route path='/movies'>
          {/* <Movies /> */}
        </Route>
        <Route path='/saved-movies'>
          {/* <SavedMovies /> */}
        </Route>
        <Route path='/profile'></Route>
        <Route path="/signin">
          {/* <Login /> */}
        </Route>
        <Route path="/signup">
          {/* <Register /> */}
        </Route>
        {/* <Route path="/">{loggedIn ? <Redirect to="/" /> : <Redirect to="/signin" />}</Route> */}
      </Switch>
      {/* <Navigation /> */}
      {/* <Footer /> */}


    </div>
  );
}

export default App;