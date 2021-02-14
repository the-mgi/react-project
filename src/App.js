import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import {Route, Switch} from 'react-router-dom';
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.components";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.components";
import {auth} from './firebase/firebase.utils';
import {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null
        }
    }

    unSubscribeAuth = null;

    componentDidMount() {
        this.unSubscribeAuth = auth.onAuthStateChanged(user => {
            this.setState({currentUser: user});
            console.log(this.state.currentUser);
        });
    }

    componentWillUnmount() {
        this.unSubscribeAuth()
    }

    render() {
        return (
            <div className="App">
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route path='/sign-in' component={SignInAndSignUpPage}/>
                </Switch>
            </div>
        );
    }
}

export default App;
