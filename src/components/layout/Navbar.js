import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {

    const { auth, userProfile } = props;

    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">MyPlan</Link>
                { auth.uid ? <SignedInLinks userProfile={userProfile}/> : <SignedOutLinks /> }
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        userProfile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)