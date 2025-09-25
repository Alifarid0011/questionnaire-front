interface IRoutePath {
  auth: {
    login: string;
  };
  app: {
    questions: string;
  };
}

export const ROUTE_PATH: IRoutePath = {
  auth: {
    login: "/login",
  },
  app: {
    questions: "/questions",
  },
};
