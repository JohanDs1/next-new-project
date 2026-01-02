export const Routes = {
  home: {
    pathname: "/",
    name: "Home",
  },
  characters: {
    pathname: "/information/characters",
    name: "Characters",
  },
  akatsukis: {
    pathname: "/information/akatsukis",
    name: "Akatsukis",
  },
};

export interface Route {
  pathname: string;
  name: string;
}
