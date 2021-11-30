const GET_RATES = '@exchange/GET_RATES'

const CHANGE_CURRENCY = '@exchange/CHANGE_CURRENCY'

const initialState = {
  rates: { USD: 1 },
  currencyName: 'USD'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_RATES:
      return {
        ...state,
        rates: action.payload
      }
    case CHANGE_CURRENCY: {
      return {
        ...state,
        currencyName: action.payload
      }
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

export const changeCurrency = (value) => {
  return {
    type: CHANGE_CURRENCY,
    payload: value
  }
}
