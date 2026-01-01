import { Character } from "@/app/characters/models";
import Image from "next/image";

interface Props {
  data: Character;
}

const Card = ({ data }: Props) => {
  const { personal, name, images } = data;
  const { clan, birthdate } = personal;

  const clanText = Array.isArray(clan) ? clan.join(", ") : clan;

  return (
    <div className="border rounded-md ring-1 ring-blue-800 shadow-md">
      <Image
        src={images?.[0]}
        alt={name}
        width={300}
        height={300}
        className="rounded-t-md"
      />
      <div className="p-4 max-w-full">
        <p>Name: {name}</p>
        <p>Clan: {clanText ?? "Sin Clan"}</p>
        <p>Birthday: {birthdate}</p>
      </div>
    </div>
  );
};
export default Card;
