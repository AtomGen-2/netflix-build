import React, {useEffect} from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { auth } from './firebase';
import { useDispatch, useSelector} from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";

// unsubscirbe is the cleaning component. 
// whenever the component is not mounted, you should not waste that memory and space, rather you should "unsubscribe" thpse resources and re-use them when it mounts again.
function App() {
  const dispatch = useDispatch();
  const user= useSelector( selectUser );
  // to ensure that we have persistence ie if a user has logged in and then refreshed, his log in should persist.
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        dispatch(login({
          uid: userAuth.uid, 
          email: userAuth.email,
        }))
      }else{
        dispatch(logout())
      }
    });
    return unsubscribe;
  }, [dispatch]);
  
  return (
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <div className="app">
            <Switch>
              <Route exact path="/">
                <HomeScreen />
              </Route>
              <Route path="/profile">
                <ProfileScreen />
              </Route>
            </Switch>
          </div>
        )}
      </Router>
  );
}

export default App;
