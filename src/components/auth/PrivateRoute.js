import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class PrivateRoute extends Component {
    render() {
        const { auth } = this.props;

        if (!auth.uid) {
            return <Redirect to='/signin' />;
        }

        return <Route {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
    };
}

export default connect(mapStateToProps)(PrivateRoute);