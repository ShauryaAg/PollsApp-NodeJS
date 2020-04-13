import React from 'react'
import { Provider } from 'react-redux'
import decode from 'jwt-decode'

import { store } from '../store'
import { setCurrentUser, addError, setToken } from '../store/actions'

if (localStorage.jwttoken) {
    setToken(localStorage.jwttoken)

    try {
        store.dispatch(setCurrentUser(decode(localStorage.jwttoken)))
    } catch (err) {
        store.dispatch(setCurrentUser({}))
        store.dispatch(addError())
    }
}

const App = () => (
    < Provider store={store} >
        <div>App Works</div>
    </Provider >
)

export default App