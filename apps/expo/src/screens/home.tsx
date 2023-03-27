import React from "react";

import type { AppRouter } from "@acme/api";
import { useAuth } from "@clerk/clerk-expo";
import type { inferProcedureOutput } from "@trpc/server";
import {
  Button,
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
import { trpc } from "../utils/trpc";

const SignOut = () => {
  const { signOut } = useAuth();
  return (
    <View className="rounded-lg border-2 border-gray-500 p-4">
      <Button
        title="Sign Out"
        onPress={() => {
          signOut();
        }}
      />
    </View>
  );
};

const PostCard: React.FC<{
  post: inferProcedureOutput<AppRouter["post"]["all"]>[number];
}> = ({ post }) => {
  return (
    <View className="rounded-lg border-2 border-gray-500 p-4">
      <Text className="text-xl font-semibold text-[#cc66ff]">{post.title}</Text>
      <Text className="text-white">{post.content}</Text>
    </View>
  );
};

const CreatePost: React.FC = () => {
  const utils = trpc.useContext();
  const { mutate } = trpc.post.create.useMutation({
    async onSuccess() {
      await utils.post.all.invalidate();
    },
  });

  const [title, onChangeTitle] = React.useState("");
  const [content, onChangeContent] = React.useState("");
  const date = Date.now();
  return (
    <View className="flex flex-col border-t-2 border-gray-500 p-4">
      <TextInput
        className="mb-2 rounded border-2 border-gray-500 p-2 text-white"
        onChangeText={onChangeTitle}
        placeholder="Title"
        placeholderTextColor={"#ccc"}
      />
      <TextInput
        className="mb-2 rounded border-2 border-gray-500 p-2 text-white"
        onChangeText={onChangeContent}
        placeholder="Content"
        placeholderTextColor={"#ccc"}
      />
      <TouchableOpacity
        className="rounded bg-[#cc66ff] p-2"
        onPress={() => {
          mutate({
            title,
            content,
          });
        }}
      >
        <Text className="font-semibold text-white">Publish post</Text>
      </TouchableOpacity>
    </View>
  );
};

export const HomeScreen = (props: ScreenProps<"Home">) => {
  const postQuery = trpc.post.all.useQuery();
  const [showPost, setShowPost] = React.useState<string | null>(null);

  return (
    <SafeAreaView className="inset-0 h-full w-full overflow-y-scroll bg-[#FFF4ED]">
      <ScrollView>
        <View className="inset-x-0 mt-5 flex flex-row justify-between px-4">
          <Text
            className="text text-2xl text-[#5A2D22]"
            style={styles.textFont}
          >
            The good life
          </Text>
          <TouchableOpacity>
            <Image
              className=""
              source={require("../assets/images/home/noti.png")}
            />
          </TouchableOpacity>
        </View>
        <View className="inset-x-0 mt-9 flex h-1/3 flex-col items-center justify-between">
          <Image
            className=""
            source={require("../assets/images/home/center.png")}
          />
          <View className="inset-x-0 mt-10 items-center">
            <Text
              className="text-2xl text-[#5A2D22]"
              style={styles.textFontSemiBold}
            >
              Chào bạn
            </Text>
            <Text className="text-md text-[#5A2D22]" style={styles.textFont}>
              Hãy đồng hành cùng với TGL mỗi ngày nhé !
            </Text>
          </View>
        </View>
        <View className="relative bottom-0 right-0 left-0 -z-10 mt-10">
          <Image
            className="absolute"
            source={require("../assets/images/home/flowerCtr.png")}
          />
          <Image
            className=" absolute mt-32 h-fit"
            source={require("../assets/images/home/bottom.png")}
          />

          <View className="absolute mt-60">
            <Text
              className=" pl-4 text-lg text-white"
              style={styles.textFontSemiBold}
            >
              Thứ 2, ngày 1 tháng 12{" "}
            </Text>
            <TouchableOpacity className=" inset-x-0 mx-2 mt-10">
              <View className="inset-x-0 flex w-full flex-row space-x-3">
                <View className="box-content rounded-2xl bg-white object-fill">
                  <Image
                    className="m-2"
                    source={require("../assets/images/home/neutral.png")}
                  />
                </View>
                <View className="inset-0flex-col relative flex  w-full justify-between">
                  <Text className="text-[#DED5C6]" style={styles.textFont}>
                    DAILY CHECK IN
                  </Text>
                  <Text
                    className="text-[#FFFFFF]"
                    style={styles.textFontSemiBold}
                  >
                    Hôm nay bạn cảm thấy thế nào?
                  </Text>
                  <Text className="text-[#DED5C6]" style={styles.textFont}>
                    Tạm ổn &#8226; 2 ngày trước
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <View>
              <TouchableOpacity className=" inset-x-0 mx-2 mt-10">
                <View className="inset-x-0 flex w-full flex-row space-x-3">
                  <View className="box-content rounded-2xl bg-white object-fill">
                    <Image
                      className="m-2"
                      source={require("../assets/images/home/neutral.png")}
                    />
                  </View>
                  <View className="inset-0flex-col relative flex  w-full justify-between">
                    <Text className="text-[#DED5C6]" style={styles.textFont}>
                      DAILY CHECK IN
                    </Text>
                    <Text
                      className="text-[#FFFFFF]"
                      style={styles.textFontSemiBold}
                    >
                      Hôm nay bạn cảm thấy thế nào?
                    </Text>
                    <Text className="text-[#DED5C6]" style={styles.textFont}>
                      Tạm ổn &#8226; 2 ngày trước
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity className=" inset-x-0 mx-2 mt-10">
                <View className="inset-x-0 flex w-full flex-row space-x-3">
                  <View className="box-content rounded-2xl bg-white object-fill">
                    <Image
                      className="m-2"
                      source={require("../assets/images/home/neutral.png")}
                    />
                  </View>
                  <View className="inset-0flex-col relative flex  w-full justify-between">
                    <Text className="text-[#DED5C6]" style={styles.textFont}>
                      DAILY CHECK IN
                    </Text>
                    <Text
                      className="text-[#FFFFFF]"
                      style={styles.textFontSemiBold}
                    >
                      Hôm nay bạn cảm thấy thế nào?
                    </Text>
                    <Text className="text-[#DED5C6]" style={styles.textFont}>
                      Tạm ổn &#8226; 2 ngày trước
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
