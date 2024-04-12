import actions from "./actions";
import { useNotification } from "../../states/notifications/store";

const notificationList = [
  {
    type: "success",
    title: "Success",
    description: "This is a success Alert with an encouraging title.",
  },
  {
    type: "success",
    title: "Success",
    description: "This is a success Alert with an encouraging title.",
  },
  {
    type: "success",
    title: "Success",
    description: "This is a success Alert with an encouraging title.",
  },
  {
    type: "success",
    title: "Success",
    description: "This is a success Alert with an encouraging title.",
  },
  {
    type: "success",
    title: "Success",
    description: "This is a success Alert with an encouraging title.",
  },
  {
    type: "success",
    title: "Success",
    description: "This is a success Alert with an encouraging title.",
  },
  {
    type: "success",
    title: "Success",
    description: "This is a success Alert with an encouraging title.",
  },
  {
    type: "success",
    title: "Success",
    description: "This is a success Alert with an encouraging title.",
  },
];

const automateNotification = () => {
  try {
    const { dispatchNotification } = useNotification();

    notificationList.forEach((item) => {
      let randomSecond = Math.floor(Math.random() * (8 - 3) + 3);

      setTimeout(() => {
        dispatchNotification({
          type: actions.ADD_NOTIFICATION,
          data: item,
        });
      }, randomSecond * 1000);
    });
  } catch (error) {
    console.log("Errorrr ----- ", error);
  }
};

export default automateNotification;
