import { Route } from "@/app/models/routes.model";
import Link from "next/link";

interface Props {
  pathnames: Route[];
}

const Navigator = ({ pathnames }: Props) => {
  return (
    <div className="flex gap-4">
      {pathnames.map((route, i) => (
        <Link key={i} href={route.pathname} className="hover:underline">{route.name}</Link>
      ))}
    </div>
  );
};
export default Navigator;
