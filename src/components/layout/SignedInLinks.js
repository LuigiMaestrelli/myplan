import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {

    //TODO: Better handle the link click to avoid refresh
    return (
        <ul className="right">
            <li>
                <NavLink to="/create">New project</NavLink>
            </li>
            <li>
                <a onClick={props.signOut} href="/">Logout</a>
            </li>
            <li>
                <NavLink to="/" className="btn btn-floating pink lighten-1">LM</NavLink>
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