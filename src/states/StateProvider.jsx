import { NotificationProvider } from "./notifications/store";
import { AccountProvider } from "./accounts/store";

const StateProvider = ({ children }) => {
  return (
    <AccountProvider>
      <NotificationProvider>{children}</NotificationProvider>
    </AccountProvider>
  );
};

export default StateProvider;
