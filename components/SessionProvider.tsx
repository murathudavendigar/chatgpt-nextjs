"use client";

import { Session } from "next-auth";
import { SessionProvider as Provider } from "next-auth/react";

export const SessionProvider = () => {
  return <Provider>{children}</Provider>;
};
