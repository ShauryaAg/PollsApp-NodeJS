import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route, withRouter } from 'react-router-dom'

import AuthPage from '../pages/AuthPage'
import HomePage from '../pages/HomePage'
import PollPage from '../pages/PollPage'
import CreatePollPage from '../pages/CreatePollPage'

import { getCurrentPoll } from '../store/actions'

const RouteViews = ({ auth, getCurrentPoll }) => (<main>
    <Switch>
        <Route exact
            path="/login"
            render={() => (
                <AuthPage
                    authType='login'
                    isAuthenticated={auth.isAuthenticated}
                />
            )} />
        <Route exact
            path="/register"
            render={() => (
                <AuthPage
                    authType='register'
                    isAuthenticated={auth.isAuthenticated}
                />
            )} />
        <Route exact
            path="/"
            render={props =>
                <HomePage {...props} />
            }
        />
        <Route exact
            path='/poll/:id'
            render={props => (
                <PollPage getPoll={id => getCurrentPoll(id)} {...props} />
            )}
        />
        <Route exact
            path='/new/poll'
            render={() => <CreatePollPage isAuthenticated={auth.isAuthenticated} />}
        />
    </Switch>
</main>)

export default withRouter(connect(store => ({ auth: store.auth }), { getCurrentPoll })(RouteViews))