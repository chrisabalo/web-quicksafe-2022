import React, { useContext, useState, useEffect } from 'react';
import {AuthContext} from "./AuthProvider";
import {TheLayout} from "../containers";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import {ToastContainer} from "react-toastify";



const Routes = () => {

    const {user, setUser} = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);

    //Recuperer l'etat de l'utuilisateur connecté
    useEffect(() => {
      let data = localStorage.getItem("loginData")
          data = JSON.parse(data)
          setUser(data)
        if (initializing) setInitializing(false);
    }, []);
    if (initializing) return null;

  const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  )

// Containers
  const TheLayout = React.lazy(() => import('../containers/TheLayout'));

// Pages
  const Login = React.lazy(() => import('../views/pages/login/Login'));
  const Register = React.lazy(() => import('../views/pages/register/Register'));
  const Page404 = React.lazy(() => import('../views/pages/page404/Page404'));
  const Page500 = React.lazy(() => import('../views/pages/page500/Page500'));

    return (
      <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
            <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
            <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
            <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
            <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
          </Switch>
          {/* <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
            </Switch>*/}
          { ((user) && <Redirect from="/" to="/dashboard" />) ||
          (
            <Redirect from="/" to="/login" />
          )

          }
        </React.Suspense>
        <ToastContainer/>
      </HashRouter>
    );
};

export default Routes;
