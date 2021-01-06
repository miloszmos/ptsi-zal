import React, { useState } from "react";

export const heoresContext = React.createContext();

const HeroesProvider = ({ children }) => {
  const [heroes, setHeroes] = useState([
    { id: 11, name: "Dr Nice" },
    { id: 12, name: "Narco" },
    { id: 13, name: "Bombasto" },
    { id: 14, name: "Celeritas" },
    { id: 15, name: "Magneta" },
    { id: 16, name: "RubberMan" },
    { id: 17, name: "Dynama" },
    { id: 18, name: "Dr IQ" },
    { id: 19, name: "Magma" },
    { id: 20, name: "Tornado" },
  ]);

  return (
    <heoresContext.Provider value={{ heroes, setHeroes }}>
      {children}
    </heoresContext.Provider>
  );
};

export const dupa = "dupa";

export default HeroesProvider;
