import { Audio, InterruptionModeAndroid, InterruptionModeIOS } from "expo-av";
import { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Song, suggest, suggestSongs } from "../assets/music/music";
import { useAudioStatus } from "../context/audio";
import { styles } from "../root";

export const MusicScreen = ({ navigateFn }: any) => {
  const [isActive, setIsActive] = useState("Gợi ý");
  const [song, setSong] = useState<Audio.Sound>();
  const [selectedSong, setSelectedSong] = useState<Song>();
  const audioStatus = useAudioStatus();
  // const [index, setIndex] = useState(0);
  const [list, setList] = useState<Array<Song>>(suggestSongs);

  useEffect(() => {
    const index = suggest.findIndex((item) => item.name === isActive);
    setList(suggest[index]?.list ?? []);
  }, [isActive]);

  const resumeSong = async () => {
    console.log("Resuming Sound");
    audioStatus.setStatus(true);
    await song?.playAsync();
    song?.getStatusAsync().then((status) => {
      console.log(status.durationMillis);
    });
  };
  const playSong = async (index: number) => {
    const { sound } = await Audio.Sound.createAsync(
      // NOTE - Tên nhạc không được có dấu nhé
      // require("../assets/music/Matilda.mp3"),
      // songs[0].uri,
      list[index]?.uri,
    );
    setSong(sound);
    console.log("Playing Sound");
    sound.playAsync();
    audioStatus.setStatus(true);
    audioStatus.setIndex(index);
  };
  const pauseSong = async () => {
    console.log("Paused Sound");
    await song?.pauseAsync();
    audioStatus.setStatus(false);
  };

  // const changeSong = async () => {
  //   console.log("Changing Sound");
  //   await song?.unloadAsync();
  //   const { sound } = await Audio.Sound.createAsync(
  //     require("../assets/music/tinh-sau.mp3"),
  //   );
  //   setSong(sound);
  //   await sound.playAsync();
  // };

  const nextSong = async (index: number) => {
    const isLastSong = index >= list.length - 1;
    if (isLastSong) {
      console.log("Last Sound");
      setSelectedSong(list[0]);
      playSong(0);
      return;
    }
    console.log("Next Sound");
    setSelectedSong(list[index + 1]);
    playSong(index + 1);
  };
  const previousSong = (index: number) => {
    const isFirstSong = index === 0;
    if (isFirstSong) {
      pauseSong();
      return;
    }
    console.log("Previous Sound");
    setSelectedSong(list[index - 1]);
    playSong(index - 1);
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

  console.log(audioStatus.status);
  return (
    <SafeAreaView className="absolute inset-0 content-end bg-[#FFF4ED]">
      <View className="absolute h-full px-5">
        <View className="mt-5">
          <View
            className="flex w-full flex-row items-center border-2  border-[#FF835C33]/20 bg-[#FFF4ED] px-3 py-1"
            style={{
              borderRadius: 10,
            }}
          >
            <Image source={require("../assets/images/mind/Icon.png")} />
            <TextInput
              placeholder="Tìm kiếm"
              className="w-11/12 px-2 py-1 text-sm text-[#9B9B9B]"
            />
          </View>
        </View>

        <View className="mt-8 h-12">
          <ScrollView
            horizontal={true}
            className=""
            showsHorizontalScrollIndicator={false}
          >
            <View className="flex flex-row gap-3">
              {suggest.map((item) => (
                <TouchableOpacity
                  key={item.name}
                  onPress={() => setIsActive(item.name)}
                  className={`${
                    isActive === item.name ? "bg-[#7A9861]" : "bg-white "
                  }
            flex flex-row items-center rounded-lg px-4 text-sm font-semibold`}
                >
                  <Text
                    className={`${
                      isActive === item.name ? "text-white" : "text-[#9b9b9b]"
                    }`}
                    style={styles().textFont}
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>

        <View className="mt-8 h-80">
          <ScrollView showsVerticalScrollIndicator={false}>
            <View className="flex w-full flex-col">
              {list.map((song, index) => (
                <View
                  key={song.id}
                  className="mb-5 flex flex-row items-center justify-between "
                >
                  <TouchableOpacity
                    className="flex flex-row items-center gap-10"
                    onPress={() => {
                      setSelectedSong(song);
                      // setIndex(index);
                      audioStatus.setIndex(index);
                      audioStatus.setStatus(true);
                      playSong(index);
                    }}
                  >
                    <View className="relative">
                      <View>
                        <Image
                          source={song.image}
                          className=" h-12 w-12 rounded-full "
                        />
                      </View>
                    </View>

                    <View>
                      <Text
                        className="text-sm text-[#5A2D22]"
                        style={styles().textFontSemiBold}
                      >
                        {song.name}
                      </Text>
                      <Text
                        className="text-sm text-[#9B9B9B]"
                        style={styles().textFont}
                      >
                        {song.description}
                      </Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity className="mr-2">
                    {song.like ? (
                      <Image
                        source={require("../assets/images/music/Heart_2.png")}
                      />
                    ) : (
                      <Image
                        source={require("../assets/images/music/Heart_1.png")}
                      />
                    )}
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
      {selectedSong && (
        <View className="absolute inset-x-0 bottom-28 flex flex-row items-center justify-between bg-[#232C15]">
          <TouchableOpacity
            className="flex flex-row items-center "
            onPress={() =>
              navigateFn(
                suggestSongs,
                resumeSong,
                pauseSong,
                nextSong,
                previousSong,
              )
            }
          >
            <Image source={require("../assets/images/music/Avatar.png")} />
            <View className="ml-2">
              <Text
                className="text-sm text-white"
                style={styles().textFontSemiBold}
              >
                {selectedSong.name}
              </Text>
              <Text
                className="text-sm text-[#9b9b9b]"
                style={styles().textFont}
              >
                {selectedSong.singer}
              </Text>
            </View>
          </TouchableOpacity>
          <View className="mr-8 flex flex-row items-center gap-8">
            <TouchableOpacity
              className=""
              onPress={() => previousSong(audioStatus.index)}
            >
              <Image source={require("../assets/images/music/Vector.png")} />
            </TouchableOpacity>

            {audioStatus.status ? (
              <TouchableOpacity
                onPress={() => {
                  pauseSong();
                  audioStatus.setStatus(false);
                }}
              >
                <Image source={require("../assets/images/music/Group.png")} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  resumeSong();
                  audioStatus.setStatus(true);
                }}
              >
                <Image source={require("../assets/images/music/Pause.png")} />
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={() => nextSong(audioStatus.index)}>
              <Image source={require("../assets/images/music/Next.png")} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default MusicScreen;
