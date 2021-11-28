import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import products from './products'
import auth from './auth'
import exchange from './exchange'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    products,
    exchange
  })

export default createRootReducer
