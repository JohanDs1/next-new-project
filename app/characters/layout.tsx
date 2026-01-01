import React from "react";

function CharactersLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="my-8 mx-auto flex justify-center items-center">
      <div className="flex flex-wrap gap-4">{children}</div>
    </main>
  );
}

export default CharactersLayout;
