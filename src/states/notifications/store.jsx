import { createContext, useReducer, useContext } from "react";
import actions from "./actions";

export const getRandomId = () => {
  return Date.now() + Math.floor(Math.random() * 100);
};

// initial state

const initialState = {
  isDrawerOpen: false,
  data: [
    {
      id: getRandomId(),
      type: "success",
      title: "Success",
      description: "This is a success Alert with an encouraging title.",
    },
    ,
    {
      id: getRandomId(),
      type: "error",
      title: "Success",
      description: "This is a success Alert with an encouraging title.",
    },
    ,
    {
      id: getRandomId(),
      type: "success",
      title: "Success",
      description: "This is a success Alert with an encouraging title.",
    },
    ,
    {
      id: getRandomId(),
      type: "warning",
      title: "Success",
      description: "This is a success Alert with an encouraging title.",
    },
    ,
    {
      id: getRandomId(),
      type: "success",
      title: "Success",
      description: "This is a success Alert with an encouraging title.",
    },
  ],
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

    case actions.ADD_NOTIFICATION: {
      return {
        ...notificationData,
        data: [...notificationData.data, { id: getRandomId(), ...action.data }],
      };
    }

    case actions.REMOVE_NOTIFICATION: {
      return {
        ...notificationData,
        data: notificationData.data.filter((item) => item.id !== action.id),
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
