import { createContext, useReducer, useContext } from "react";
import actions from "./actions";
import accounts from "../../utils/accounts";

// initial state

const initialState = accounts[0];

// export : creating context

export const AccountContext = createContext(null);

// configuring reducer based on actions

const accountReducer = (accountData, action) => {
  switch (action.type) {
    case actions.CHANGE_ACCOUNT: {
      return action.account;
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

// export : generating provider wrapper with reducer values

export const AccountProvider = ({ children }) => {
  const [accountState, dispatchAccount] = useReducer(
    accountReducer,
    initialState
  );

  return (
    <AccountContext.Provider value={{ accountState, dispatchAccount }}>
      {children}
    </AccountContext.Provider>
  );
};
// export : custom hook to manage state

export const useAccount = () => {
  return useContext(AccountContext);
};
