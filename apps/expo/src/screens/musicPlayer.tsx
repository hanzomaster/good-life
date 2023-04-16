import { SafeAreaView } from "react-native-safe-area-context";
import { ScreenProps } from "../types/navigation";
import React, { useState } from "react";
import { Text, Image, View, Touchable, TouchableOpacity } from "react-native";
import Slider from "@react-native-community/slider";
import { styles } from "../root";

export const MusicPlayerScreen = (props: ScreenProps<"MusicPlayer">) => {
  console.log(props.route.params?.index);
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
        onPress={() => props.navigation.navigate("Music")}
        className="absolute left-8 top-24"
      >
        <Image source={require("../assets/images/musicPlayer/Back.png")} />
      </TouchableOpacity>
      <View className="absolute bottom-72 flex w-full flex-row items-center justify-between px-6">
        <Text
          className="text-base text-white"
          style={styles().textFontSemiBold}
        >
          Lion mind
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
      <View className="absolute bottom-48 flex w-full flex-row items-center justify-between px-6">
        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />
      </View>
      <View className="absolute bottom-24 flex w-full flex-row items-center justify-center">
        <View className=" flex flex-row gap-14">
          <TouchableOpacity>
            <Image
              source={require("../assets/images/musicPlayer/Previous.png")}
              className="mx-auto"
            />
          </TouchableOpacity>
          {props.route.params?.isPlaying ? (
            <TouchableOpacity
              onPress={() => {
                props.route.params?.pauseSong();
                props.route.params?.setIsPlaying(false);
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
                props.route.params?.setIsPlaying(true);
              }}
            >
              <Image
                source={require("../assets/images/music/Pause.png")}
                className="mx-auto"
              />
            </TouchableOpacity>
          )}

          <TouchableOpacity>
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
