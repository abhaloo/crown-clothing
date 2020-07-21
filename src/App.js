import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import CheckoutPage from './pages/checkout/checkout.component.jsx';

import Header from './components/header/header.component.jsx';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/users.selectors';

import './App.css';



class App extends React.Component {

  unsubscribeFromAuth = null;


  // firebase will inform the application of a change
  // in user subscription as long as the component (App.js) is mounted
  componentDidMount(){
    
    const { setCurrentUser }= this.props;
    
    //takes a function where the parameter is the user state 
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      
      //set state according to details of authenticated user 
      if(userAuth) {
        
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
        });
     
      }
      
      //if us
      setCurrentUser(userAuth);
    }) 
  }


  //This will close subscription when component unmounts
  componentWillUnmount(){
    this.unsubscribeFromAuth(); //
  }

  render(){

    return (
      <div>
      <Header/>
        <Switch>
          <Route exact={true} path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage/>)}/>
          </Switch> 
      </div>
    );

  }
  
}

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))

})

export default connect(mapStateToProps, mapDispatchToProps)(App);
