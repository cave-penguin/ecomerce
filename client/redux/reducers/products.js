const GET_PRODUCTS = '@products/GET_PRODUCTS'

const initialState = {
  productArr: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        productArr: action.payload
      }

    default:
      return state
  }
}

export function getProduct() {
  return (dispatch) => {
    fetch('/api/v1/main')
      .then((it) => it.json())
      .then((result) => {
        dispatch({
          type: GET_PRODUCTS,
          payload: result
        })
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.log('!!!!!', err))
  }
}
