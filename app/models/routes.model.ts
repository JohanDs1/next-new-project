export const Routes = {
  home: {
    pathname: "/",
    name: "Home",
  },
  characters: {
    pathname: "/characters",
    name: "Characters",
  },
  teams: {
    pathname: "/teams",
    name: "Teams",
  },
};

export interface Route {
  pathname: string;
  name: string;
}
