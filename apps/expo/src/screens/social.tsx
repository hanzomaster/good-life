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

const groupData = [
  {
    name: "Chia sẻ nhạc hay",
    image: require("../assets/images/group/groupList/avatar.png"),
    number: "1651 thành viên",
  },
  {
    name: "Hội mê phượt",
    image: require("../assets/images/group/groupList/avatar1.png"),
    number: "1601 thành viên",
  },
  {
    name: "Kết bạn tâm sự",
    image: require("../assets/images/group/groupList/avatar2.png"),
    number: "1652 thành viên",
  },
  {
    name: "Mê du lịch",
    image: require("../assets/images/group/groupList/avatar3.png"),
    number: "161 thành viên",
  },
  {
    name: "Nấu ăn hạnh phúc",
    image: require("../assets/images/group/groupList/avatar4.png"),
    number: "151 thành viên",
  },
  {
    name: "Hội làm đẹp",
    image: require("../assets/images/group/groupList/avatar5.png"),
    number: "1655 thành viên",
  },
  {
    name: "Self-love",
    image: require("../assets/images/group/avatarTest.png"),
    number: "1651 thành viên",
  },
];
export const SocialScreen = (props: ScreenProps<"Social">) => {
  const [modalMyGroup, setModalMyGroup] = useState(false);
  const [modalOtherGroup, setModalOtherGroup] = useState(false);

  return (
    <SafeAreaView className="absolute inset-0 w-full bg-[#FFF4ED]">
      <View className="absolute inset-x-0 top-0">
        <Image
          className="relative top-0 max-w-full"
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
                    {groupData.map((item, index) => {
                      return (
                        <View className="mr-5 mb-5 h-[1/9] w-72" key={index}>
                          <TouchableOpacity
                            className="flex flex-row justify-start space-x-3"
                            onPress={() =>
                              props.navigation.navigate("GroupIntro")
                            }
                          >
                            <View className="relative h-20 w-20 overflow-hidden rounded-3xl bg-black ">
                              <Image
                                className="relative object-cover"
                                source={item.image}
                              />
                            </View>
                            <View className="flex flex-col items-start justify-center">
                              <Text
                                className="text-[#5A2D22]"
                                style={styles().textFontBold}
                              >
                                {item.name}
                              </Text>
                              <Text
                                className="text-sm text-[#9B9B9B]"
                                style={styles().textFont}
                              >
                                {item.number}
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
            horizontal
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
              <View className="mr-5 mb-5 h-[1/9] w-72">
                <TouchableOpacity className="flex flex-row justify-start space-x-3">
                  <View className="h-[74] w-[74] items-center justify-center overflow-hidden rounded-xl bg-slate-400 ">
                    <Text className="text-3xl">+</Text>
                  </View>
                  <View className="flex flex-col items-start justify-center">
                    <Text
                      className="text-[#5A2D22]"
                      style={styles().textFontBold}
                    >
                      Tạo nhóm mới
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              {groupData.map((item, index) => {
                return (
                  <View className="mr-5 mb-5 h-[1/9] w-72" key={index}>
                    <TouchableOpacity
                      className="flex flex-row justify-start space-x-3"
                      onPress={() => props.navigation.navigate("GroupPage")}
                    >
                      <View className="relative h-[72] w-[72] items-center justify-center overflow-hidden rounded-xl bg-black ">
                        <Image
                          className="relative object-cover "
                          source={item.image}
                        />
                      </View>
                      <View className="flex flex-col items-start justify-center">
                        <Text
                          className="text-[#5A2D22]"
                          style={styles().textFontBold}
                        >
                          {item.name}
                        </Text>
                        <Text
                          className="text-sm text-[#9B9B9B]"
                          style={styles().textFont}
                        >
                          {item.number}
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
                    {groupData.map((item, index) => {
                      return (
                        <View className="mr-5 mb-5 h-[1/9] w-72" key={index}>
                          <TouchableOpacity className="flex flex-row justify-start space-x-3">
                            <View className="relative h-[72] w-[72] items-center justify-center overflow-hidden rounded-xl bg-black ">
                              <Image
                                className="relative object-cover"
                                source={item.image}
                              />
                            </View>
                            <View className="flex flex-col items-start justify-center">
                              <Text
                                className="text-[#5A2D22]"
                                style={styles().textFontBold}
                              >
                                {item.name}
                              </Text>
                              <Text
                                className="text-sm text-[#9B9B9B]"
                                style={styles().textFont}
                              >
                                {item.number}
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
            horizontal
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
              {groupData.map((item, index) => {
                return (
                  <View className="mr-5 mb-5 h-[1/9] w-72" key={index}>
                    <TouchableOpacity
                      className="flex flex-row justify-start space-x-3"
                      onPress={() => props.navigation.navigate("GroupIntro")}
                    >
                      <View className="relative h-[72] w-[72] items-center justify-center overflow-hidden rounded-xl bg-black ">
                        <Image
                          className="relative object-cover"
                          source={item.image}
                        />
                      </View>
                      <View className="flex flex-col items-start justify-center">
                        <Text
                          className="text-[#5A2D22]"
                          style={styles().textFontBold}
                        >
                          {item.name}
                        </Text>
                        <Text
                          className="text-sm text-[#9B9B9B]"
                          style={styles().textFont}
                        >
                          {item.number}
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
