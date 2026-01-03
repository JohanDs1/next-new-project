import Navigator from "@/components/Navigator/Navigator";
import { Routes } from "./models/routes.model";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Navigator pathnames={[Routes.home]} />
    </div>
  );
}
