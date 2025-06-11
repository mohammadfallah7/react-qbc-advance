type LoginAction = {
  type: "LOGIN";
  name: string;
};

type LogoutAction = {
  type: "LOGOUT";
};

type Action = LoginAction | LogoutAction;

const authReducer = (user: string, action: Action): string => {
  switch (action.type) {
    case "LOGIN":
      return action.name;
    case "LOGOUT":
      return "";
    default:
      return user;
  }
};

export default authReducer;
