import { useState } from "react";
import { Navigate, Route, Routes } from "react-router";
import Planet from "./components/Planet";
import { PLANET } from "./enum";
import Container from "./shared/Container";

function App() {
  const [planet, setPlanet] = useState<PLANET>(PLANET.mercury);

  return (
    <Routes>
      <Route element={<Container />}>
        <Route path="/:name" element={<Planet />} />
        <Route path="*" element={<Navigate to="/mercury" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
