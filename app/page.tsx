import { Card, CardHeader } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto flex  flex-col justify-center text-white">
      <div className="flex justify-start w-full py-4 max-sm:pl-2">
        <Image
          src="/naruto/uzumaki.png"
          alt="Insignia Uzumaki"
          width={50}
          height={50}
        />
      </div>
      <div className="flex justify-center mx-auto">
        <Image src="/naruto/naruto.png" alt="Naruto" width={350} height={250} title="Imagen hecha por satoru0031bbq" />
      </div>
    </main>
  );
}
