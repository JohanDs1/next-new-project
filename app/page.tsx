import Navigator from "@/components/Navigator/Navigator";
import { Routes } from "./models/routes.model";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black dark:text-white">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Bienvenido a tu camino ninja</h1>
        <h2>Que quieres ver?</h2>
        <Navigator pathnames={[Routes.characters, Routes.akatsukis]} />
      </main>
    </div>
  );
}
