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
      <div className="grid grid-cols-4 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
        {akatsuki.map((aka) => {
          return <Card data={aka} key={aka.id} />;
        })}
      </div>
    </>
  );
};
export default Characters;
