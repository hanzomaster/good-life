import { createContext, ReactNode, useContext, useState } from "react";

export const AudioStatusContext = createContext({
  status: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  setStatus: (items: boolean) => {},
});

export const AudioStatusProvider = ({ children }: { children: ReactNode }) => {
  const [status, setStatus] = useState(false);

  return (
    <AudioStatusContext.Provider value={{ status, setStatus }}>
      {children}
    </AudioStatusContext.Provider>
  );
};

export const useAudioStatus = () => useContext(AudioStatusContext);
