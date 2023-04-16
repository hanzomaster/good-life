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
import { styles } from "../root";
import { ScreenProps } from "../types/navigation";

export type Song = {
  id: number;
  name: string;
  image: any;
  time: number;
  singer: string;
  description: string;
  like: boolean;
  url: any;
};
type Suggest = {
  name: string;
  list: Array<Song>;
};
const suggestSongs = [
  {
    id: 0,
    name: "Tình sầu",
    image: require("../assets/images/music/Avatar.png"),
    time: 21,
    singer: "Bùi Lan Hương",
    description: "Rule meditation like lion",
    like: true,
    url: require("../assets/music/tinh-sau.mp3"),
  },
  {
    id: 1,
    name: "Matilda",
    image: require("../assets/images/music/Avatar.png"),
    time: 21,
    singer: "Harry Styles",
    description: "Rule meditation like lion",
    like: false,
    url: require("../assets/music/Matilda.mp3"),
  },
  {
    id: 2,
    name: "Giữa đại lộ Đông Tây",
    image: require("../assets/images/music/Avatar.png"),
    time: 21,
    singer: "Uyên Linh",
    description: "Rule meditation like lion",
    like: false,
    url: require("../assets/music/giua-dai-lo-Dong-Tay.mp3"),
  },
  {
    id: 3,
    name: "The way that I love you",
    image: require("../assets/images/music/Avatar.png"),
    time: 21,
    singer: "Passenger",
    description: "Rule meditation like lion",
    like: false,
    url: require("../assets/music/the-way-that-i-love-you.mp3"),
  },
  {
    id: 4,
    name: "Tháng Tư là lời nói dối của em",
    image: require("../assets/images/music/Avatar.png"),
    time: 21,
    singer: "Hà Anh Tuấn",
    description: "Rule meditation like lion",
    like: false,
    url: require("../assets/music/thang-tu-la-loi-noi-doi-cua-em.mp3"),
  },
  {
    id: 5,
    name: "Người hãy quên em đi",

    image: require("../assets/images/music/Avatar.png"),
    time: 21,
    singer: "Mỹ Tâm",
    description: "Rule meditation like lion",
    like: false,
    url: require("../assets/music/nguoi-hay-quen-em-di.mp3"),
  },
  {
    id: 6,
    name: "Stay",
    singer: "BLACKPINK",
    image: require("../assets/images/music/Avatar.png"),
    time: 21,
    description: "Rule meditation like lion",
    like: false,
    url: require("../assets/music/STAY.mp3"),
  },
];

const naturalSongs: Array<Song> = [
  {
    id: 2,
    name: "Giữa đại lộ Đông Tây",
    image: require("../assets/images/music/Avatar.png"),
    time: 21,
    singer: "Uyên Linh",
    description: "Rule meditation like lion",
    like: false,
    url: require("../assets/music/giua-dai-lo-Dong-Tay.mp3"),
  },
  {
    id: 0,
    name: "Tình sầu",
    image: require("../assets/images/music/Avatar.png"),
    time: 21,
    singer: "Bùi Lan Hương",
    description: "Rule meditation like lion",
    like: true,
    url: require("../assets/music/tinh-sau.mp3"),
  },
  {
    id: 3,
    name: "The way that I love you",
    image: require("../assets/images/music/Avatar.png"),
    time: 21,
    singer: "Passenger",
    description: "Rule meditation like lion",
    like: false,
    url: require("../assets/music/the-way-that-i-love-you.mp3"),
  },
  {
    id: 1,
    name: "Matilda",
    image: require("../assets/images/music/Avatar.png"),
    time: 21,
    singer: "Harry Styles",
    description: "Rule meditation like lion",
    like: false,
    url: require("../assets/music/Matilda.mp3"),
  },

  {
    id: 4,
    name: "Tháng Tư là lời nói dối của em",
    image: require("../assets/images/music/Avatar.png"),
    time: 21,
    singer: "Hà Anh Tuấn",
    description: "Rule meditation like lion",
    like: false,
    url: require("../assets/music/thang-tu-la-loi-noi-doi-cua-em.mp3"),
  },
  {
    id: 5,
    name: "Người hãy quên em đi",

    image: require("../assets/images/music/Avatar.png"),
    time: 21,
    singer: "Mỹ Tâm",
    description: "Rule meditation like lion",
    like: false,
    url: require("../assets/music/nguoi-hay-quen-em-di.mp3"),
  },
  {
    id: 6,
    name: "Stay",
    singer: "BLACKPINK",
    image: require("../assets/images/music/Avatar.png"),
    time: 21,
    description: "Rule meditation like lion",
    like: false,
    url: require("../assets/music/STAY.mp3"),
  },
];

const suggest: Array<Suggest> = [
  {
    name: "Gợi ý",
    list: suggestSongs,
  },
  {
    name: "Thiên nhiên",
    list: naturalSongs,
  },
  {
    name: "Tươi mới",
    list: [],
  },
  {
    name: "Thư giãn",
    list: [],
  },
  {
    name: "Tâm trí",
    list: [],
  },
  {
    name: "Healing",
    list: [],
  },
];

export const MusicScreen = (props: ScreenProps<"Music">) => {
  const [isActive, setIsActive] = useState("Gợi ý");
  const [list, setList] = useState<Array<Song>>(suggestSongs);

  useEffect(() => {
    const index = suggest.findIndex((item) => item.name === isActive);
    setList(suggest[index].list);
  }, [isActive]);

  const handleOpenMusic = () => {
    props.navigation.navigate("Music");
  };

  const [song, setSong] = useState<Audio.Sound>();
  const [selectedSong, setSelectedSong] = useState<Song>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [index, setIndex] = useState(0);

  const resumeSong = async () => {
    console.log("Resuming Sound");
    setIsPlaying(true);
    await song?.playAsync();
  };
  const playSong = async (index: number) => {
    await song?.unloadAsync();
    const { sound } = await Audio.Sound.createAsync(
      // NOTE - Tên nhạc không được có dấu nhé
      // require("../assets/music/Matilda.mp3"),
      // songs[0].url,
      list[index]?.url,
    );
    setSong(sound);
    console.log("Playing Sound");
    await sound.playAsync();
    setIsPlaying(true);
  };
  const pauseSong = async () => {
    console.log("Paused Sound");
    await song?.pauseAsync();
    setIsPlaying(false);
    console.log(isPlaying);
    console.log("hello");
  };
  console.log("isPlaying: " + isPlaying);

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
    console.log("Index: " + index);
    const isLastSong = index >= list.length - 1;
    if (isLastSong) {
      console.log("Last Sound");
      await song?.unloadAsync();
      setSelectedSong(list[0]);
      playSong(0);
      return;
    }
    console.log("Next Sound");
    console.log(list[index + 1]);
    setSelectedSong(list[index + 1]);
    playSong(index + 1);
  };
  const previousSong = (index: number) => {
    const isFirstSong = index === 0;
    if (isFirstSong) {
      return;
    }
    console.log("Previous Sound");
    console.log(list[index - 1]);
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

  return (
    <SafeAreaView className="absolute inset-0 content-end bg-[#FFF4ED]">
      <View className="absolute top-0 left-0">
        <Image
          source={require("../assets/images/mind/Group_36924.png")}
          className=""
        />
      </View>
      <View className="absolute inset-x-0 mt-16 items-center">
        <Text className=" text-2xl font-semibold text-white">Mind</Text>
      </View>
      <TouchableOpacity
        onPress={() => {}}
        className="absolute right-0 mt-20 mr-5"
      >
        <Image source={require("../assets/images/mind/Vector.png")} />
      </TouchableOpacity>

      <View className="absolute mt-40 h-full px-5">
        <View className="flex flex-row gap-10">
          <TouchableOpacity onPress={() => props.navigation.navigate("Mind")}>
            <Text
              className="mb-2 text-xl font-semibold text-[#9B9B9BE0]/80"
              style={styles().textFont}
            >
              Tâm trí
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <Text
              className="mb-2 text-xl font-semibold text-[#FF8669]"
              style={styles().textFont}
            >
              Âm nhạc
            </Text>

            <Image
              source={require("../assets/images/mind/Rectangle_1315.png")}
            />
          </TouchableOpacity>
        </View>

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
                      setSelectedSong(list[index]);
                      setIndex(index);
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
                      {/* {isPlaying && ( */}
                      {/* <View className=" absolute h-12 w-12 items-center justify-center rounded-full backdrop-blur-lg">
                        <Image
                          source={require("../assets/images/music/Group.png")}
                          className="absolute"
                        />
                      </View> */}

                      {/* )} */}
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
        <View className="absolute inset-x-0 bottom-16 flex flex-row items-center justify-between bg-[#232C15]">
          <TouchableOpacity
            className="flex flex-row items-center "
            onPress={() =>
              props.navigation.navigate("MusicPlayer", {
                song: selectedSong,
                list: list,
                isPlaying: isPlaying,
                index: index,
                setIsPlaying: setIsPlaying,
                resumeSong: resumeSong,
                pauseSong: pauseSong,

                nextSong: nextSong,
                previousSong: previousSong,
              })
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
              onPress={() => previousSong(selectedSong.id)}
            >
              <Image source={require("../assets/images/music/Vector.png")} />
            </TouchableOpacity>

            {isPlaying ? (
              <TouchableOpacity
                onPress={() => {
                  pauseSong();
                  // setIsPlaying(false);
                }}
              >
                <Image source={require("../assets/images/music/Group.png")} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={resumeSong}>
                <Image source={require("../assets/images/music/Pause.png")} />
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={() => nextSong(selectedSong.id)}>
              <Image source={require("../assets/images/music/Next.png")} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default MusicScreen;
