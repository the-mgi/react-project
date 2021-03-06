import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/imagees/logos/4.3 crown.svg';
import {auth} from '../../firebase/firebase.utils';

const Header = ({currentUser}) => {
    console.log("this is current user value in header component!" + currentUser);
    return (
        <div className='header'>
            <Link to='/' className={'logo-container'}>
                <Logo className={'logo'}/>
            </Link>

            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/shop">CONTACT</Link>
                {
                    currentUser ?
                        <div className='option' onClick={() => auth.signOut()}>Sign Out</div> :
                        <Link className="option" to="/sign-in">Sign In</Link>

                }
            </div>

        </div>
    );
}

export default Header;
