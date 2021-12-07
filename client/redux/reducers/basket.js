const ADD_PROD = '@basket/ADD_PROD'

const initialState = {
  list: {},
  totalAmount: 0,
  totalPrice: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROD: {
      return {
        ...state,
        list: action.payload.list,
        totalAmount: state.totalAmount + 1,
        totalPrice: state.totalPrice + action.payload.price
      }
    }

    default:
      return state
  }
}

export const addProd = (id) => {
  return (dispatch, getState) => {
    const { list } = getState().basket
    const { price } = getState().products.productObj[id]
    const prodAmount = typeof list[id] === 'undefined' ? 1 : list[id].amount + 1
    dispatch({
      type: ADD_PROD,
      payload: {
        list: { ...list, [id]: { amount: prodAmount } },
        price
      }
    })
  }
}
