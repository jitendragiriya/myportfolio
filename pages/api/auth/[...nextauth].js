import nextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  Providers: [
    Providers.Creadentials({
      name: "Custom Provider",
      credentials: {
        username: { lable: "Email", type: "text", placeholder: "john@deo.com" },
        password: { lable: "password", type: "password" },
      },
      async authorize(credentials) {
        const user = { name: "john@doe", email: "john@doe.com" };
        return user;
      },
    }),
  ],
  session: {
    jwt: true,
  },
};

export default (req, res) => nextAuth(req, res, options);
