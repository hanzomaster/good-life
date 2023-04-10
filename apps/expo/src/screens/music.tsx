import { AntDesign } from "@expo/vector-icons";
import { Audio, InterruptionModeAndroid, InterruptionModeIOS } from "expo-av";
import { useEffect, useState } from "react";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MusicScreen = () => {
  const [song, setSong] = useState<Audio.Sound>();

  const playSong = async () => {
    const { sound } = await Audio.Sound.createAsync(
      // NOTE - Tên nhạc không được có dấu nhé
      require("../assets/music/Matilda.mp3"),
    );
    setSong(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  };

  const resumeSong = async () => {
    console.log("Resuming Sound");
    await song?.playAsync();
  };

  const pauseSong = async () => {
    console.log("Paused Sound");
    await song?.pauseAsync();
  };

  const changeSong = async () => {
    console.log("Changing Sound");
    await song?.unloadAsync();
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/music/tinh-sau.mp3"),
    );
    setSong(sound);
    await sound.playAsync();
  };

  useEffect(() => {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      staysActiveInBackground: true,
      interruptionModeIOS: InterruptionModeIOS.DuckOthers,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: InterruptionModeAndroid.DuckOthers,
      playThroughEarpieceAndroid: false,
    });
  }, []);

  useEffect(() => {
    return song
      ? () => {
          console.log("Unloading Sound");
          song.unloadAsync();
        }
      : undefined;
  }, [song]);

  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Button title="Play" onPress={playSong} />
      <Button title="Pause" onPress={pauseSong} />
      <Button title="Resume" onPress={resumeSong} />
      <Button title="Change Song" onPress={changeSong} />
      <AntDesign name="stepforward" size={24} color="black" />
    </SafeAreaView>
  );
};

export default MusicScreen;
