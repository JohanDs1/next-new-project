import Navigator from "@/components/Navigator/Navigator";
import { Routes } from "../models/routes.model";

const Teams = () => {
  return (
    <div>
      <Navigator pathnames={[Routes.home, Routes.characters]} />
      Pagina donde apareceran los equipos
    </div>
  );
};
export default Teams;
