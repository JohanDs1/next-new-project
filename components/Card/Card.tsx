"use client";

import { blurredImage } from "@/app/constants";
import { Character } from "@/app/information/characters/models";
import { getAkatsukiByID } from "@/app/information/characters/services";
import Image from "next/image";

interface Props {
  data: Character;
}

const Card = ({ data }: Props) => {
  const { personal, name, images, id } = data;
  const { clan, birthdate } = personal;

  const clanText = Array.isArray(clan) ? clan.join(", ") : clan;

  const handleClick = async (id: number) => {
    const akatsuki = await getAkatsukiByID(id);
    console.log(akatsuki);
  };

  return (
    <div
      className="border rounded-md ring-1 ring-blue-800 shadow-md"
      onClick={() => handleClick(id)}
    >
      <Image
        src={images?.[0]}
        alt={name}
        width={300}
        height={300}
        className="rounded-t-md w-auto h-auto object-contain"
        blurDataURL={blurredImage}
        placeholder="blur"
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
