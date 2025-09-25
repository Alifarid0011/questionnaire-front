interface IRoutePath {
  auth: {
    login: string;
  };
  app: {
    forms: string;
    createForm: string;
  };

  notFound: string;
}

export const ROUTE_PATH: IRoutePath = {
  notFound: "/not-found",
  auth: {
    login: "/login",
  },
  app: {
    forms: "/forms",
    createForm: "/create-form",
  },
};
