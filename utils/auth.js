import CredentialsProvider from "next-auth/providers/credentials";
import { StoreShopUser } from "./models/user";
import connectDB from "./connectDB";
import { verifyPassword } from "./functions";

export const authOptions = {
  session: { strategy: "jwt", maxAge: 30 * 24 * 60 * 60 },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        await connectDB();
        const { username, password } = credentials;
        const isUser = await StoreShopUser.findOne({ username });

        if (!isUser) {
          throw new Error("User not found!");
        }

        const isValid = await verifyPassword(password, isUser.password);

        if (!isValid) {
          throw new Error("Username or password is incorrect!");
        }

        const user = {
          email: username,
          name: isUser.displayName,
        };
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token }) {
      await connectDB();
      const isUser = await StoreShopUser.findOne({
        username: token.email,
      });
      if (isUser) {
        token.username = isUser.username;
        delete token.email;
      }
      return token;
    },
    async session({ session, token }) {
      try {
        const newSession = {
          ...session,
          user: {
            name: token.name,
            username: token.username,
          },
        };
        return newSession;
      } catch (error) {
        return session;
      }
    },
  },
};
