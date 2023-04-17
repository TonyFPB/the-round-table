import { createContext, useContext, useState } from "react";

const ChangePlayerContext = createContext();
export function ChangePlayerProvider({ children }) {
  const [changePlayer, setChangePlayer] = useState([]);
  const [isChanged, setIsChanged] = useState(false);

  return (
    <ChangePlayerContext.Provider value={{
      changePlayer,
      setChangePlayer,
      isChanged,
      setIsChanged
    }}>
      {children}
    </ChangePlayerContext.Provider>
  )
}

export const useChangePlayerContext = () => useContext(ChangePlayerContext);