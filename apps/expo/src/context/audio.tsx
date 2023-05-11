import { createContext, ReactNode, useContext, useState } from "react";

export const AudioStatusContext = createContext({
  status: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  setStatus: (items: boolean) => {},
  index: 0,
  setIndex: (index: number) => {},
});

export const AudioStatusProvider = ({ children }: { children: ReactNode }) => {
  const [status, setStatus] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <AudioStatusContext.Provider value={{ status, setStatus, index, setIndex }}>
      {children}
    </AudioStatusContext.Provider>
  );
};

export const useAudioStatus = () => useContext(AudioStatusContext);
