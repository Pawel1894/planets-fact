import { createContext, useState } from "react";
import { PLANET } from "./enum";
import Header from "./shared/Header";

export const PlanetContext = createContext({
  planet: PLANET.mercury,
  setPlanet: (planet: PLANET) => {},
});

function App() {
  const [planet, setPlanet] = useState<PLANET>(PLANET.mercury);

  return (
    <PlanetContext.Provider
      value={{
        planet: planet,
        setPlanet,
      }}
    >
      <Header />
      <main></main>
    </PlanetContext.Provider>
  );
}

export default App;
