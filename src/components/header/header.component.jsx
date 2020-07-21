import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/users.selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';


import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='option'></Logo>
        </Link>
        <span className='title'>CROWN CLOTHING</span>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>  
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            {
                // render 'sign out' if current user is signed in, 
                // or 'sign in' if they are not signed in
                currentUser ?  
                <div className='option' onClick={() => auth.signOut()}> SIGN OUT </div> 
                : 
                <Link className='option' to='/signIn'> SIGN IN </Link>
            }
            <CartIcon/>
        </div>
        {
            hidden ? null : <CartDropdown/>
        }
        </div>
)

const mapStateToProps =  createStructuredSelector({
    currentUser: selectCurrentUser , 
    hidden : selectCartHidden
});

export default connect(mapStateToProps)(Header);