// import React from 'react';
// import { BrowserRouter as Router, Switch, Link, Route, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
// import './App.css';

// import HomePage from './pages/homepage/homepage.component';
// import ShopPage from './pages/shop/shop.component.jsx';
// import Header from './components/header/header.component.jsx';
// import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
// import { auth, createUserProfileDocument } from './firebase/firebase.utils';
// import { selectCurrentUser } from './redux/user/user.selectors';
// import { checkUserSession } from './redux/user/user.actions';
// import { setCurrentUser } from '../src/redux/user/user.actions';


// class App extends React.Component {

//   unsubscribeFromAuth = null;

//   componentDidMount(){

//     const { setCurrentUser } = this.props;

//     this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
//      if (userAuth){
//        const userRef = await createUserProfileDocument(userAuth);

//        userRef.onSnapshot(snapShot => {
//          setCurrentUser({
//            id: snapShot.id,
//            ...snapShot.data()
//          });
//        });
//      }
//      setCurrentUser(userAuth);
//     });
//   }

//   componentWillUnmount(){
//     this.unsubscribeFromAuth();
//   }

//   render(){
//     return(
//       <div>
//         <Router>
//         <Header />
//         <Switch>
//         <Route exact path='/' component={HomePage} />
//         <Route path='/shop' component={ShopPage} />
//         <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
//         </Switch>
//         </Router>
//       </div>
//     );
//   }
// }


// const mapStateToProps = ({user}) => ({
//   currentUser: user.currentUser
// })

//   const mapDispatchToProps = dispatch => ({
//     setCurrentUser: user => dispatch(setCurrentUser(user))
//   });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);



import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.jsx';
// import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        {/* <Route exact path='/checkout' component={CheckoutPage} /> */}
        <Route
          exact
          path='/signin'
          render={() =>
            currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};

export default App;
