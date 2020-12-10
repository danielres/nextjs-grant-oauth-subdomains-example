import React, { ReactNode, useEffect, useState } from "react";

type ProtectedProps = {
  children: ReactNode;
  profile?: { name: string; email: string; picture: string };
};

export const Protected = ({ children, profile }: ProtectedProps) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    // "useEffect" is only executed browser-side.
    // We need this because "location" exists only browser-side.
    setIsBrowser(true);
  }, []);

  if (profile) return <>{children}</>;

  if (isBrowser) {
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
