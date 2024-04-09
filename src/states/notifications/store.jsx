import { createContext, useReducer, useContext } from "react";
import actions from "./actions";

// initial state

const initialState = {
  isDrawerOpen: false,
  data: [],
};

// export : creating context

export const NotificationContext = createContext(null);

// configuring reducer based on actions

const notificationReducer = (notificationData, action) => {
  switch (action.type) {
    case actions.OPEN_DRAWER: {
      return {
        ...notificationData,
        isDrawerOpen: true,
      };
    }

    case actions.CLOSE_DRAWER: {
      return {
        ...notificationData,
        isDrawerOpen: false,
      };
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

// export : generating provider wrapper with reducer values

export const NotificationProvider = ({ children }) => {
  const [notificationState, dispatchNotification] = useReducer(
    notificationReducer,
    initialState
  );

  return (
    <NotificationContext.Provider
      value={{ notificationState, dispatchNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
// export : custom hook to manage state

export const useNotification = () => {
  return useContext(NotificationContext);
};
