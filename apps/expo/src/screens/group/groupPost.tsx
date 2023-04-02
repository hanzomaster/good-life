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
import { styles } from "../../root";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const data = [1, 2, 3, 4, 5];

export const GroupPost = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView className="absolute inset-0 bg-[#FFF4ED]">
      <View className="relative top-0 -mt-14 h-1/2">
        <Image
          className=" top-0"
          source={require("../../assets/images/group/top.png")}
        />
      </View>

      <TouchableOpacity className="absolute mt-12 ml-5 h-10 w-10 items-center justify-center rounded-xl bg-[#000]/25">
        <Image source={require("../../assets/images/group/arrowleft.png")} />
      </TouchableOpacity>

      <View className="absolute inset-x-0 mt-24 items-center">
        <Image
          className=" h-24 w-24 object-cover"
          source={require("../../assets/images/group/avatarTest.png")}
        />
        <Text
          className="mt-4 text-center text-xl text-white"
          style={styles().textFontSemiBold}
        >
          Self-love
        </Text>
        <Text
          className="mt-1 text-center text-base text-white"
          style={styles().textFont}
        >
          Nhóm kín &#8226; 111 thành viên
        </Text>
        <View className="mt-2 flex w-3/5 flex-row justify-around space-x-1 ">
          {data.map((item) => {
            if (item === 5) {
              return (
                <>
                  <View
                    key={item}
                    className="h-9 w-9 items-center justify-center rounded-full bg-slate-50"
                  >
                    <Text>5+</Text>
                  </View>
                </>
              );
            } else
              return (
                <>
                  <View
                    key={item}
                    className="box-content h-9 w-9 items-center justify-center rounded-full bg-slate-50"
                  >
                    <Image
                      className="relative max-h-full max-w-full rounded-full"
                      source={require("../../assets/images/group/avatarTest.png")}
                    />
                  </View>
                </>
              );
          })}
        </View>
      </View>
      <View className="relative inset-x-0 mt-14 items-center">
        <View className="h-36 w-5/6 p-1">
          <Text
            className="mb-3 text-[#9B9B9B]"
            style={styles().textFontSemiBold}
          >
            Mô tả
          </Text>
          <ScrollView
            className="relative h-auto w-full"
            showsVerticalScrollIndicator={false}
          >
            <Text
              className="relative w-full flex-wrap text-justify text-[#5A2D22]"
              style={styles().textFont}
            >
              Self-love lập ra giúp mọi người trao đổi với nhau, cùng nhau học
              cách yêu thương bản thân mình, tìm được những người bạn mới, giúp
              cho cuộc sống nhiều màu sắc hơn. Self-love lập ra giúp mọi người
              trao đổi với nhau, cùng nhau học cách yêu thương bản thân mình,
              tìm được những người bạn mới, giúp cho cuộc sống nhiều màu sắc
              hơn. Self-love lập ra giúp mọi người trao đổi với nhau, cùng nhau
              học cách yêu thương bản thân mình, tìm được những người bạn mới,
              giúp cho cuộc sống nhiều màu sắc hơn.
            </Text>
          </ScrollView>
        </View>
      </View>

      <View className="inset-x-0 mt-20 items-center ">
        <TouchableOpacity
          className="z-10 h-14 w-1/2 items-center justify-center rounded-full bg-[#7A9861] text-lg "
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Text className="text-lg text-white">Tham gia nhóm</Text>
        </TouchableOpacity>
      </View>
      <Modal
        className=" rounded-xl bg-white"
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View className="bg-black/75">
          <View className="mt-[50%] h-full rounded-2xl bg-white">
            <View className="inset-x-0 items-end">
              <TouchableOpacity
                className="mt-6 mr-6"
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                <Image
                  source={require("../../assets/images/group/blackexit.png")}
                />
              </TouchableOpacity>
            </View>

            <View className="inset-x-0 mt-[20%] items-center">
              <Image
                source={require("../../assets/images/group/modalicon.png")}
              />
            </View>
            <View className="inset-x-0 items-center">
              <Text
                className="mt-4 w-3/5 flex-wrap space-y-1 text-center text-lg text-[#5A2D22]"
                style={styles().textFontSemiBold}
              >
                Chào mừng bạn đã là thành viên mới của nhóm ^^
              </Text>
            </View>
            <View className="inset-x-0 mt-[15%] items-center">
              <TouchableOpacity className=" h-14 w-2/3 items-center justify-center rounded-full bg-[#7A9861]">
                <View className="flex flex-row items-center justify-between space-x-4">
                  <Text
                    className="ml-3 text-lg text-white"
                    style={styles().textFontSemiBold}
                  >
                    Khám phá thôi nào
                  </Text>

                  <Image
                    source={require("../../assets/images/emotion/arrow.png")}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};
