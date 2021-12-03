import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import products from './products'
import auth from './auth'
import exchange from './exchange'
import basket from './basket'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    products,
    exchange,
    basket
  })

export default createRootReducer
