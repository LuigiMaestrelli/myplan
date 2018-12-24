import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {

    const handleSignOut = (e) => {
        e.preventDefault();

        props.signOut();
    }
    
    return (
        <ul className="right">
            <li>
                <NavLink to="/create">New project</NavLink>
            </li>
            <li>
                <a onClick={handleSignOut} href="/">Logout</a>
            </li>
            <li>
                <NavLink to="/" className="btn btn-floating pink lighten-1">{props.userProfile.initials}</NavLink>
            </li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)