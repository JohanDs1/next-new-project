import React from "react";

function CharactersLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="p-4 mx-auto max-w-[1280px]">
      {children}
    </main>
  );
}

export default CharactersLayout;
