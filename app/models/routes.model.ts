export const Routes = {
  home: {
    pathname: "/",
    name: "Inicio",
  },
  characters: {
    pathname: "/information/characters",
    name: "Personajes",
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
