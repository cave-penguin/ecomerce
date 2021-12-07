const GET_PRODUCTS = '@products/GET_PRODUCTS'

const initialState = {
  productObj: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        productObj: action.payload
      }

    default:
      return state
  }
}

export function getProduct() {
  return (dispatch) => {
    fetch('/api/v1/main')
      .then((it) => it.json())
      .then((arr) =>
        arr.reduce((acc, rec) => {
          acc[rec.id] = rec
          return acc
        }, {})
      )
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
