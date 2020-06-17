import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import { auth } from './firebase/firebase.utils';

import './App.css';


class App extends React.Component {

  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;


  // firebase will inform the application of a change
  // in user subscription as long as the component (App.js) is mounted
  componentDidMount(){
    
    //takes a function where the parameter is the user state 
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user});

      console.log(user);
    }) 
  }


  //This will close subscription when component unmounts
  componentWillUnmount(){
    this.unsubscribeFromAuth(); //
  }

  render(){

    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact={true} path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInAndSignUp}/>
          </Switch> 
      </div>
    );

  }
  
}

export default App;
