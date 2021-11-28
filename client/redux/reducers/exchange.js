const GET_RATES = '@exchange/GET_RATES'

const initialState = {
  rates: { CAD: 1.278844, EUR: 0.883617, USD: 1 }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_RATES:
      return {
        ...state,
        rates: action.payload
      }

    default:
      return state
  }
}

export function getRates() {
  return (dispatch) => {
    fetch('/api/v1/exchange')
      .then((res) => res.json())
      .then((ratesObj) =>
        dispatch({
          type: GET_RATES,
          payload: ratesObj
        })
      )
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err))
  }
}
