// @flow

const FETCH_ACCOUNTS_PENDING = 'game/FETCH_ACCOUNTS_PENDING';
const FETCH_ACCOUNTS_SUCCESS = 'game/FETCH_ACCOUNTS_SUCCESS';

const initialAccountState = {
  accounts: null,
  accountsPending: false,
  accountsSuccess: false,
};

export default function accountsReducer(state : Object = initialAccountState, action : Object = {}) {
  switch(action.type) {
    case FETCH_ACCOUNTS_PENDING:
      return {
        ...state,
        accountsPending: true,
      };

    case FETCH_ACCOUNTS_SUCCESS:
      return {
        ...state,
        accountsPending: false,
        accountsSuccess: false,
        accounts: action.accounts,
      };
  }

  return state;
}

export function fetchResults() {
  return async (dispatch: () => Promise<*>) => {
    await dispatch({ type: FETCH_ACCOUNTS_PENDING });

    // const accounts = await api.getAccounts();

    await dispatch({ type: FETCH_ACCOUNTS_SUCCESS, accounts: null });
  };
}
