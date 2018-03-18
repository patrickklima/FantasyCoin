export const GET_COIN_INDEX_REQUEST = "GET_COIN_INDEX_REQUEST";
export const GET_COIN_INDEX_SUCCESS = "GET_COIN_INDEX_SUCCESS";
export const GET_COIN_INDEX_FAILURE = "GET_COIN_INDEX_FAILURE";

export const CHANGE_COINS_PER_PAGE = "CHANGE_COINS_PER_PAGE";
export const CHANGE_PAGE = "CHANGE_PAGE";

const apiCoinListUrl = 'https://min-api.cryptocompare.com/data/all/coinlist';

export const getCoinIndex = () => {
  return (dispatch) => {
    dispatch(getCoinIndexRequest());
    fetch(apiCoinListUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      cors: true
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(`${res.statusText}: ${res.error}`);
        }
        return res.json();
      })
      .then(json => dispatch(getCoinIndexSuccess(json)))
      .catch(error => dispatch(getCoinIndexFailure(error)));
  };
};

export const getCoinIndexRequest = () => {
  return {
    type: GET_COIN_INDEX_REQUEST,
  };
};
export const getCoinIndexSuccess = (data) => {
  return {
    type: GET_COIN_INDEX_SUCCESS,
    data: data
  };
};
export const getCoinIndexFailure = (error) => {
  return {
    type: GET_COIN_INDEX_FAILURE,
    data: error
  };
};

export const changeCoinsPerPage = (data) => {
  return {
    type: CHANGE_COINS_PER_PAGE,
    data: data
  };
};
export const changePage = (data) => {
  return {
    type: CHANGE_PAGE,
    data: data
  };
};