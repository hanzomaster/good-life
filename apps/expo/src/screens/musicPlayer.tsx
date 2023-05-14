import Slider from "@react-native-community/slider";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAudioStatus } from "../context/audio";
import { styles } from "../root";
import { ScreenProps } from "../types/navigation";

export const MusicPlayerScreen = (props: ScreenProps<"MusicPlayer">) => {
  const audio = useAudioStatus();

  return (
    <SafeAreaView className="absolute inset-0 content-end">
      <View className="absolute inset-0">
        <Image
          source={require("../assets/images/musicPlayer/3.png")}
          className="h-full w-full object-cover"
        />
      </View>
      <View className="absolute inset-0">
        <Image source={require("../assets/images/musicPlayer/bground.png")} />
      </View>
      {/* <Text>Music Player</Text> */}
      <TouchableOpacity
        onPress={() => props.navigation.pop()}
        className="absolute left-8 top-24"
      >
        <Image source={require("../assets/images/musicPlayer/Back.png")} />
      </TouchableOpacity>
      <View className="absolute bottom-72 flex w-full flex-row items-center justify-between px-6">
        <Text
          className="text-base text-white"
          style={styles().textFontSemiBold}
        >
          {props.route.params?.list[audio.index].name}
        </Text>
        <View className="flex flex-row gap-5">
          <TouchableOpacity>
            <Image source={require("../assets/images/musicPlayer/Heart.png")} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../assets/images/musicPlayer/Resume.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View className="absolute bottom-52 flex w-full flex-row items-center justify-between px-6">
        <Slider
          style={{ width: 380, height: 40 }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />
      </View>
      <View className="absolute bottom-24 flex w-full flex-row items-center justify-center">
        <View className=" flex flex-row gap-14">
          <TouchableOpacity
            onPress={() => props.route.params?.previousSong(audio.index)}
          >
            <Image
              source={require("../assets/images/musicPlayer/Previous.png")}
              className="mx-auto"
            />
          </TouchableOpacity>
          {audio.status ? (
            <TouchableOpacity
              onPress={() => {
                props.route.params?.pauseSong();
              }}
            >
              <Image
                source={require("../assets/images/musicPlayer/Play.png")}
                className="mx-auto"
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                props.route.params?.resumeSong();
              }}
            >
              <Image
                source={require("../assets/images/musicPlayer/Pause.png")}
                className="mx-auto"
              />
            </TouchableOpacity>
          )}

          <TouchableOpacity
            onPress={() => props.route.params?.nextSong(audio.index)}
          >
            <Image
              source={require("../assets/images/musicPlayer/Next.png")}
              className="mx-auto"
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
