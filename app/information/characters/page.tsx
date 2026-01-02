import Card from "@/components/Card/Card";
import { getCharacters } from "./services";
import Navigator from "@/components/Navigator/Navigator";
import { Routes } from "@/app/models/routes.model";

async function fetchCharacters() {
  return await getCharacters();
}

const Characters = async () => {
  const { characters } = await fetchCharacters();

  return (
    <>
      <Navigator pathnames={[Routes.home, Routes.akatsukis]} />
      <div className="flex flex-wrap gap-4">
        {characters.map((character) => {
          return <Card data={character} key={character.id} />;
        })}
      </div>
    </>
  );
};
export default Characters;
