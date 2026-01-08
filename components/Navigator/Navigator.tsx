import { narutoFont } from "@/app/fonts";
import { Route } from "@/app/models/routes.model";
import Link from "next/link";

interface Props {
  pathnames: Route[];
}

const Navigator = ({ pathnames }: Props) => {
  return (
    <div className="flex gap-4 my-2">
      {pathnames.map((route, i) => (
        <Link key={i} href={route.pathname} className={`hover:underline ${narutoFont.className} antialiased hover:text-orange-400`}>{route.name}</Link>
      ))}
    </div>
  );
};
export default Navigator;
