import Card from "@/components/Card/Card";
import { getCharacters } from "./services";
import Navigator from "@/components/Navigator/Navigator";
import { Routes } from "../models/routes.model";

async function fetchCharacters() {
  return await getCharacters();
}

const Characters = async () => {
  const { characters } = await fetchCharacters();

  return (
    <>
      <Navigator pathnames={[Routes.teams, Routes.home]} />
      {characters.map((character) => {
        return <Card data={character} key={character.id} />;
      })}
    </>
  );
};
export default Characters;
