import { ReactNode } from "react";

export function T({ en, tr }: { en: ReactNode; tr: ReactNode }) {
  return (
    <>
      <span data-lang="en">{en}</span>
      <span data-lang="tr">{tr}</span>
    </>
  );
}
