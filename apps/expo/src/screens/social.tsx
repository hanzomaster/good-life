import { useState } from "react";
import {
  Alert,
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../root";
import { ScreenProps } from "../types/navigation";

export const SocialScreen = (props: ScreenProps<"Social">) => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const [modalMyGroup, setModalMyGroup] = useState(false);
  const [modalOtherGroup, setModalOtherGroup] = useState(false);

  return (
    <SafeAreaView className="absolute inset-0 bg-[#FFF4ED]">
      <View className="absolute top-0">
        <Image
          className="top-0"
          source={require("../assets/images/group/groupList/top.png")}
        />
        <View className="absolute inset-x-4 mt-10 flex flex-row items-baseline justify-between">
          <Text
            className="text-2xl text-white"
            style={styles().textFontSemiBold}
          >
            The good life
          </Text>
          <TouchableOpacity>
            <Image
              source={require("../assets/images/group/groupList/noti.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View className=" relative inset-x-0 mx-4 mt-[30%] flex flex-col justify-between">
        <Text
          className="text-xl text-[#FF8669]"
          style={styles().textFontSemiBold}
        >
          Nhóm
        </Text>

        <Image
          className="h-auto object-cover"
          source={require("../assets/images/group/groupList/groupline.png")}
        />
      </View>

      <ScrollView>
        <View className="inset-x-0 mx-4 mt-2 flex flex-row items-baseline justify-between ">
          <Text
            className="text-base text-[#5A2D22]"
            style={styles().textFontBold}
          >
            Nhóm của tôi
          </Text>
          <TouchableOpacity
            onPress={() => setModalMyGroup(true)}
            className="mr-2"
          >
            <Image
              source={require("../assets/images/group/groupList/next.png")}
            />
          </TouchableOpacity>
        </View>

        <Modal
          className=" rounded-xl bg-white"
          animationType="slide"
          transparent={true}
          visible={modalMyGroup}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalMyGroup(!modalMyGroup);
          }}
        >
          <View className="bg-black/75">
            <View className="mt-[50%] h-full rounded-2xl bg-white">
              <View className="inset-x-0 items-end">
                <TouchableOpacity
                  className="mt-6 mr-6"
                  onPress={() => {
                    setModalMyGroup(false);
                  }}
                >
                  <Image
                    source={require("../assets/images/group/blackexit.png")}
                  />
                </TouchableOpacity>
              </View>

              <View className="mt-10 h-1/2 px-5">
                <ScrollView showsVerticalScrollIndicator={false}>
                  <View className="flex flex-col gap-3">
                    {data.map((item) => {
                      return (
                        <View className="mr-5 mb-5 h-[1/9] w-72" key={item}>
                          <TouchableOpacity className="flex flex-row justify-start space-x-3">
                            <View className="rounded-3xl">
                              <Image
                                source={require("../assets/images/group/groupList/avatar.png")}
                              />
                            </View>
                            <View className="flex flex-col items-start justify-center">
                              <Text
                                className="text-[#5A2D22]"
                                style={styles().textFontBold}
                              >
                                Chia sẻ nhạc hay
                              </Text>
                              <Text
                                className="text-sm text-[#9B9B9B]"
                                style={styles().textFont}
                              >
                                1651 thành viên
                              </Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                      );
                    })}
                  </View>
                </ScrollView>
              </View>
            </View>
          </View>
        </Modal>

        <View
          className=" mt-2"
          style={{
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <ScrollView
            className=""
            alwaysBounceHorizontal
            alwaysBounceVertical={false}
            automaticallyAdjustContentInsets={false}
            directionalLockEnabled
            showsHorizontalScrollIndicator={false}
          >
            <View
              className=" relative ml-5 flex h-72 flex-col flex-wrap "
              style={{ marginHorizontal: 12 / 2, marginVertical: 12 / 2 }}
            >
              {data.map((item) => {
                return (
                  <View className="mr-5 mb-5 h-[1/9] w-72" key={item}>
                    <TouchableOpacity className="flex flex-row justify-start space-x-3">
                      <View className="rounded-3xl">
                        <Image
                          source={require("../assets/images/group/groupList/avatar.png")}
                        />
                      </View>
                      <View className="flex flex-col items-start justify-center">
                        <Text
                          className="text-[#5A2D22]"
                          style={styles().textFontBold}
                        >
                          Chia sẻ nhạc hay
                        </Text>
                        <Text
                          className="text-sm text-[#9B9B9B]"
                          style={styles().textFont}
                        >
                          1651 thành viên
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>

        <View className="inset-x-0 mx-4 flex flex-row items-baseline justify-between ">
          <Text
            className="text-base text-[#5A2D22]"
            style={styles().textFontBold}
          >
            Nhóm khác
          </Text>
          <TouchableOpacity
            onPress={() => setModalOtherGroup(true)}
            className="mr-2"
          >
            <Image
              source={require("../assets/images/group/groupList/next.png")}
            />
          </TouchableOpacity>
        </View>

        <Modal
          className=" rounded-xl bg-white"
          animationType="slide"
          transparent={true}
          visible={modalOtherGroup}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalOtherGroup(!modalOtherGroup);
          }}
        >
          <View className="bg-black/75">
            <View className="mt-[50%] h-full rounded-2xl bg-white">
              <View className="inset-x-0 items-end">
                <TouchableOpacity
                  className="mt-6 mr-6"
                  onPress={() => {
                    setModalOtherGroup(false);
                  }}
                >
                  <Image
                    source={require("../assets/images/group/blackexit.png")}
                  />
                </TouchableOpacity>
              </View>

              <View className="mt-10 h-1/2 px-5">
                <ScrollView showsVerticalScrollIndicator={false}>
                  <View className="flex flex-col gap-3">
                    {data.map((item) => {
                      return (
                        <View className="mr-5 mb-5 h-[1/9] w-72" key={item}>
                          <TouchableOpacity className="flex flex-row justify-start space-x-3">
                            <View className="rounded-3xl">
                              <Image
                                source={require("../assets/images/group/groupList/avatar.png")}
                              />
                            </View>
                            <View className="flex flex-col items-start justify-center">
                              <Text
                                className="text-[#5A2D22]"
                                style={styles().textFontBold}
                              >
                                Chia sẻ nhạc hay
                              </Text>
                              <Text
                                className="text-sm text-[#9B9B9B]"
                                style={styles().textFont}
                              >
                                1651 thành viên
                              </Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                      );
                    })}
                  </View>
                </ScrollView>
              </View>
            </View>
          </View>
        </Modal>

        <View
          className=" mt-2"
          style={{
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <ScrollView
            className=""
            alwaysBounceHorizontal
            alwaysBounceVertical={false}
            automaticallyAdjustContentInsets={false}
            directionalLockEnabled
            showsHorizontalScrollIndicator={false}
          >
            <View
              className=" relative ml-5 flex h-72 flex-col flex-wrap "
              style={{ marginHorizontal: 12 / 2, marginVertical: 12 / 2 }}
            >
              {data.map((item) => {
                return (
                  <View className="mr-5 mb-5 h-[1/9] w-72" key={item}>
                    <TouchableOpacity className="flex flex-row justify-start space-x-3">
                      <View className="rounded-3xl">
                        <Image
                          source={require("../assets/images/group/groupList/avatar.png")}
                        />
                      </View>
                      <View className="flex flex-col items-start justify-center">
                        <Text
                          className="text-[#5A2D22]"
                          style={styles().textFontBold}
                        >
                          Chia sẻ nhạc hay
                        </Text>
                        <Text
                          className="text-sm text-[#9B9B9B]"
                          style={styles().textFont}
                        >
                          1651 thành viên
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
