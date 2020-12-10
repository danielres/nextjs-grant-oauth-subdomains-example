import React, { ReactNode } from "react";

type ProtectedProps = {
  children: ReactNode;
  profile?: { name: string; email: string; picture: string };
};

export const Protected = ({ children, profile }: ProtectedProps) => {
  if (profile) return <>{children}</>;

  if (typeof window !== "undefined") {
    return (
      <div>
        <a href={`/connect/google?redirect=${location}`}>
          Continue with Google
        </a>
      </div>
    );
  }

  return <>"Loading..."</>;
};
