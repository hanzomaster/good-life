import { useEffect, useState } from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { Audio, InterruptionModeAndroid, InterruptionModeIOS } from "expo-av";
import { Button } from "react-native";
import { ScreenProps } from "../types/navigation";
import { styles } from "../root";

export const MusicScreen = (props: ScreenProps<"Music">) => {
  const [isPressed, setIsPressed] = useState(false);

  const suggest = [
    {
      name: "Gợi ý",
    },
    {
      name: "Thiên nhiên",
    },
    {
      name: "Tươi mới",
    },
    {
      name: "Thư giãn",
    },
    {
      name: "Tâm trí",
    },
    {
      name: "Healing",
    },
  ];

  const lists = [
    {
      id: 1,
      name: "Nhạc thư thái",
      image: require("../assets/images/music/Avatar.png"),
      time: 21,
      description: "Rule meditation like lion",
      like: true,
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    {
      id: 2,
      name: "Thiền về tình yêu",
      image: require("../assets/images/music/Avatar.png"),
      time: 21,
      description: "Rule meditation like lion",
      like: false,
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    {
      id: 3,
      name: "Thiền về tình yêu",
      image: require("../assets/images/music/Avatar.png"),
      time: 21,
      description: "Rule meditation like lion",
      like: false,
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    {
      id: 4,
      name: "Thiền về tình yêu",
      image: require("../assets/images/music/Avatar.png"),
      time: 21,
      description: "Rule meditation like lion",
      like: false,
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    {
      id: 5,
      name: "Thiền về tình yêu",
      image: require("../assets/images/music/Avatar.png"),
      time: 21,
      description: "Rule meditation like lion",
      like: false,
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    {
      id: 6,
      name: "Thiền về tình yêu",
      image: require("../assets/images/music/Avatar.png"),
      time: 21,
      description: "Rule meditation like lion",
      like: false,
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    {
      id: 7,
      name: "Thiền về tình yêu",
      image: require("../assets/images/music/Avatar.png"),
      time: 21,
      description: "Rule meditation like lion",
      like: false,
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
  ];
  const [isActive, setIsActive] = useState("Gợi ý");

  const handleOpenMusic = () => {
    props.navigation.navigate("Music");
  };

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
  const [isPlaying, setIsPlaying] = useState(true);

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
    // <SafeAreaView className="absolute inset-0 content-end bg-[#FFF4ED]">
    //   <View className="absolute top-0 left-0">
    //     <Image
    //       source={require("../assets/images/mind/Group_36924.png")}
    //       className=""
    //     />
    //   </View>
    //   <View className="absolute inset-x-0 mt-16 items-center">
    //     <Text className=" text-2xl font-semibold text-white">Mind</Text>
    //   </View>
    //   <TouchableOpacity
    //     onPress={() => {}}
    //     className="absolute right-0 mt-20 mr-5"
    //   >
    //     <Image source={require("../assets/images/mind/Vector.png")} />
    //   </TouchableOpacity>

    //   <View className="absolute mt-40 h-full px-5">
    //     <View className="flex flex-row gap-10">
    //       <TouchableOpacity onPress={() => props.navigation.navigate("Mind")}>
    //         <Text
    //           className="mb-2 text-xl font-semibold text-[#9B9B9BE0]/80"
    //           style={styles().textFont}
    //         >
    //           Tâm trí
    //         </Text>
    //       </TouchableOpacity>

    //       <TouchableOpacity onPress={() => {}}>
    //         <Text
    //           className="mb-2 text-xl font-semibold text-[#FF8669]"
    //           style={styles().textFont}
    //         >
    //           Âm nhạc
    //         </Text>

    //         <Image
    //           source={require("../assets/images/mind/Rectangle_1315.png")}
    //         />
    //       </TouchableOpacity>
    //     </View>

    //     <View className="mt-5">
    //       <View
    //         className="flex w-full flex-row items-center border-2  border-[#FF835C33]/20 bg-[#FFF4ED] px-3 py-1"
    //         style={{
    //           borderRadius: 10,
    //         }}
    //       >
    //         <Image source={require("../assets/images/mind/Icon.png")} />
    //         <TextInput
    //           placeholder="Tìm kiếm"
    //           className="w-11/12 px-2 py-1 text-sm text-[#9B9B9B]"
    //         />
    //       </View>
    //     </View>

    //     <View className="mt-8 h-12">
    //       <ScrollView
    //         horizontal={true}
    //         className=""
    //         showsHorizontalScrollIndicator={false}
    //       >
    //         <View className="flex flex-row gap-3">
    //           {suggest.map((item) => (
    //             <TouchableOpacity
    //               key={item.name}
    //               onPress={() => setIsActive(item.name)}
    //               className={`${
    //                 isActive === item.name ? "bg-[#7A9861]" : "bg-white "
    //               }
    //         flex flex-row items-center rounded-lg px-4 text-sm font-semibold`}
    //             >
    //               <Text
    //                 className={`${
    //                   isActive === item.name ? "text-white" : "text-[#9b9b9b]"
    //                 }`}
    //                 style={styles().textFont}
    //               >
    //                 {item.name}
    //               </Text>
    //             </TouchableOpacity>
    //           ))}
    //         </View>
    //       </ScrollView>
    //     </View>

    //     <View className="mt-8 h-96">
    //       <ScrollView showsVerticalScrollIndicator={false}>
    //         <View className="flex w-full flex-col">
    //           {lists.map((item) => (
    //             <View
    //               className="mb-5 flex flex-row items-center justify-between "
    //               key={item.id}
    //             >
    //               <TouchableOpacity className="flex flex-row items-center gap-10">
    //                 <Image
    //                   source={item.image}
    //                   className="h-12 w-12 rounded-full"
    //                 />
    //                 <View>
    //                   <Text
    //                     className="text-sm text-[#5A2D22]"
    //                     style={styles().textFontSemiBold}
    //                   >
    //                     {item.name}
    //                   </Text>
    //                   <Text
    //                     className="text-sm text-[#9B9B9B]"
    //                     style={styles().textFont}
    //                   >
    //                     {item.description}
    //                   </Text>
    //                 </View>
    //               </TouchableOpacity>

    //               <TouchableOpacity className="mr-2">
    //                 {item.like ? (
    //                   <Image
    //                     source={require("../assets/images/music/Heart_2.png")}
    //                   />
    //                 ) : (
    //                   <Image
    //                     source={require("../assets/images/music/Heart_1.png")}
    //                   />
    //                 )}
    //               </TouchableOpacity>
    //             </View>
    //           ))}
    //         </View>
    //       </ScrollView>
    //     </View>
    //   </View>

    //   <View className="absolute inset-x-0 bottom-16 flex flex-row items-center justify-between bg-[#232C15]">
    //     <TouchableOpacity className="flex flex-row items-center ">
    //       <Image source={require("../assets/images/music/Avatar.png")} />
    //       <View className="ml-5">
    //         <Text
    //           className="text-sm text-white"
    //           style={styles().textFontSemiBold}
    //         >
    //           Lion mind
    //         </Text>
    //         <Text className="text-sm text-[#9b9b9b]" style={styles().textFont}>
    //           Rule meditation like lion
    //         </Text>
    //       </View>
    //     </TouchableOpacity>
    //     <View className="mr-8 flex flex-row items-center gap-10">
    //       <TouchableOpacity className="">
    //         <Image source={require("../assets/images/music/Vector.png")} />
    //       </TouchableOpacity>
    //       <TouchableOpacity className="">
    //         {isPlaying ? (
    //           <Image source={require("../assets/images/music/Group.png")} />
    //         ) : (
    //           <Image source={require("../assets/images/music/Pause.png")} />
    //         )}
    //       </TouchableOpacity>
    //     </View>
    //   </View>
    // </SafeAreaView>
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
