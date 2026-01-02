import Card from "@/components/Card/Card";
import Navigator from "@/components/Navigator/Navigator";
import { Routes } from "@/app/models/routes.model";
import { getAkatsukis } from "../characters/services";

async function fetchCharacters() {
  return await getAkatsukis();
}

const Characters = async () => {
  const { akatsuki } = await fetchCharacters();

  return (
    <>
      <Navigator pathnames={[Routes.home, Routes.characters]} />
      <div className="flex flex-wrap gap-4">
        {akatsuki.map((aka) => {
          return <Card data={aka} key={aka.id} />;
        })}
      </div>
    </>
  );
};
export default Characters;
