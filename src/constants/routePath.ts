interface IRoutePath {
  auth: {
    login: string;
  };
  app: {
    questions: string;
  };

  notFound: string;
}

export const ROUTE_PATH: IRoutePath = {
  notFound: "/not-found",
  auth: {
    login: "/login",
  },
  app: {
    questions: "/questions",
  },
};
