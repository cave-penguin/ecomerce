import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import products from './products'
import auth from './auth'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    products
  })

export default createRootReducer
