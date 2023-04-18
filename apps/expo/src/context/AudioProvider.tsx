import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Audio } from "expo-av";
import { Song, suggestSongs } from "../screens/music";
interface AudioState {
  sound: Audio.Sound | null;
  isPlaying: boolean;
  position: number;
  duration: number;
  songIndex: number;
  playlist: Array<Song>;
}

type AudioContextType = {
  audioState: AudioState;
  setAudioState: (value: AudioState) => void;
  handlePlay: (songIndex: number) => Promise<void>;
  handlePause: () => Promise<void>;
  handleNext: () => Promise<void>;
  handlePrevious: () => Promise<void>;
  handleSeek: (value: number) => Promise<void>;
};

const AudioContext = createContext({} as AudioContextType);

const AudioProvider = ({ children }: { children: ReactNode }) => {
  const [audioState, setAudioState] = useState<AudioState>({
    sound: null,
    isPlaying: false,
    position: 0,
    duration: 0,
    songIndex: 0,
    playlist: suggestSongs,
  });

  useEffect(() => {
    if (audioState.sound !== null) {
      const updatePosition = async () => {
        const status = await audioState.sound?.getStatusAsync();
        setAudioState((prevState) => ({
          ...prevState,
          position: status?.positionMillis,
        }));
      };

      const intervalId = setInterval(updatePosition, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [audioState.sound]);

  const handlePlay = async (songIndex: number) => {
    const { uri } = audioState.playlist[songIndex];

    if (audioState.sound !== null && audioState.sound.uri === uri) {
      if (audioState.isPlaying) {
        await audioState.sound.pauseAsync();
        setAudioState((prevState) => ({ ...prevState, isPlaying: false }));
      } else {
        await audioState.sound.playAsync();
        setAudioState((prevState) => ({ ...prevState, isPlaying: true }));
      }
    } else {
      const soundObject = new Audio.Sound();
      await soundObject.loadAsync({ uri });
      await soundObject.playAsync();
      setAudioState({
        sound: soundObject,
        isPlaying: true,
        position: 0,
        duration: soundObject.getDurationAsync().then((value) => value),
        songIndex: songIndex,
        playlist: audioState.playlist,
      });
    }
  };

  const handleNext = async () => {
    const { playlist, songIndex } = audioState;

    if (songIndex + 1 < playlist.length) {
      await handlePlay(songIndex + 1);
    }
  };

  const handlePrevious = async () => {
    const { songIndex } = audioState;

    if (songIndex - 1 >= 0) {
      await handlePlay(songIndex - 1);
    }
  };

  const handleSeek = async (value: number) => {
    if (audioState.sound !== null) {
      await audioState.sound.setPositionAsync(value);
      setAudioState((prevState) => ({ ...prevState, position: value }));
    }
  };

  const handlePause = async () => {
    if (audioState.sound !== null) {
      await audioState.sound.pauseAsync();
      setAudioState((prevState) => ({ ...prevState, isPlaying: false }));
    }
  };

  return (
    <AudioContext.Provider
      value={{
        audioState,
        setAudioState,
        handlePlay,
        handlePause,
        handleNext,
        handlePrevious,
        handleSeek,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export default AudioProvider;

export const useAudio = () => {
  const {
    audioState,
    setAudioState,
    handlePlay,
    handlePause,
    handleNext,
    handlePrevious,
    handleSeek,
  } = useContext(AudioContext);

  return {
    audioState,
    setAudioState,
    handlePlay,
    handlePause,
    handleSeek,
    handleNext,
    handlePrevious,
  };
};
