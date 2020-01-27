import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar.jsx';

import HomePage from './pages/home-page.jsx';
import HatsPage from './pages/hats-page.jsx';
import JacketsPage from './pages/jackets-page.jsx';
import SneakersPage from './pages/sneakers-page.jsx';
import WomenPage from './pages/women-page.jsx';
import MenPage from './pages/men-page.jsx';
import ShopPage from './pages/shop-page.jsx';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { connect } from 'react-redux';

import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        try {
            const { setCurrentUser } = this.props;

            this.unsubscribeFromAuth = auth.onAuthStateChanged(
                async userAuth => {
                    if (userAuth) {
                        const userRef = await createUserProfileDocument(
                            userAuth
                        );

                        userRef.onSnapshot(snapShot => {
                            setCurrentUser({
                                id: snapShot.id,
                                ...snapShot.data()
                            });
                        });
                    }

                    setCurrentUser(userAuth);
                }
            );
        } catch (error) {
            console.error(
                `Something went wrong with firebase in App.js. ERROR: ${error}`
            );
        }
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/hats' component={HatsPage} />
                    <Route exact path='/jackets' component={JacketsPage} />
                    <Route exact path='/sneakers' component={SneakersPage} />
                    <Route exact path='/women' component={WomenPage} />
                    <Route exact path='/men' component={MenPage} />
                    <Route exact path='/shop' component={ShopPage} />
                </Switch>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
