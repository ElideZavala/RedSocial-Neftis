import "./styles/App.scss"

import "./index.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Post from './pages/Post';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App light"> {/* Colocar el thema Dark o light*/}
      <Router>
        <Switch>
          {/* // Nombre de la ruta se llamada register. */}
          <Route exact path="/register"> 
          {/* // Nuestra pagina register. */}
            <Register />
          </Route>
          <Route exact path="/">
            <Login /> 
          </Route>
          <Route exact path='/post/:id'>
            <Post/>
          </Route>
          {/* Pagina en cado de no encontrarse ninguna.  */}
          <Route> <NotFound/> </Route> 
        </Switch>
      </Router>
    </div>
  )
}

export default App
