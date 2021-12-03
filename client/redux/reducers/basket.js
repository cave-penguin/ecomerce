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
        list: action.payload,
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
    const { productArr } = getState().products
    const { list } = getState().basket
    const { price } = productArr.find((item) => item.id === id)
    const prodAmount = typeof list[id] === 'undefined' ? 1 : list[id].amount + 1
    dispatch({
      type: ADD_PROD,
      payload: {
        ...list,
        [id]: { amount: prodAmount },
        price
      }
    })
  }
}
