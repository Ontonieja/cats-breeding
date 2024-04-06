import {
  getServerSession,
  type NextAuthOptions,
  type Session,
} from 'next-auth';

import GoogleProvider from 'next-auth/providers/google';

const { NEXTAUTH_SECRET, WHITELISTED_EMAILS } = process.env;

const emailWhitelist = ['smagokpnd@gmail.com', 'ontonieja@gmail.com'];

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || '',
      clientSecret: process.env.GOOGLE_SECRET || '',
    }),
  ],
  secret: NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        if (!emailWhitelist.includes(user.email || '')) {
          throw new Error('Invalid email');
        }
      }
      return token;
    },
    async session({ session, token, user }) {
      session.user = user;
      return session;
    },
  },
};

export const getServerAuthSession = () => getServerSession(authOptions);

export const checkSession = (session: Session | null) => {
  if (!session) {
    throw Error('Session does not exists');
  }
};
