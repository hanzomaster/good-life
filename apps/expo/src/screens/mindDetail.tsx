import { ResizeMode, Video } from "expo-av";
import React, { useRef, useState } from "react";
import {
  Alert,
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { default as ReactModal } from "react-native-modal";
import { SafeAreaView } from "react-native-safe-area-context";
import { comments, mindList, sharingOptions } from "../assets/data/mind";
import { styles } from "../root";
import { ScreenProps } from "../types/navigation";

export const MindDetailScreen = (props: ScreenProps<"MindDetail">) => {
  const video = useRef(null);
  const [status, setStatus] = useState({});
  const [showVid, setShowVid] = useState(false);
  const mind = props.route.params.mind;
  const [modalVisible, setModalVisible] = useState(false);
  const [modalComment, setModalComment] = useState(false);
  const [modalSuggest, setModalSuggest] = useState(false);

  return (
    <SafeAreaView className="absolute inset-0 content-end bg-[#FFF4ED]">
      <Text>Mind Detail</Text>
      <Image
        source={require("../assets/images/mindDetail/Group_36894.png")}
        className="absolute inset-x-0 top-0"
      />
      <TouchableOpacity onPress={() => props.navigation.navigate("Mind")}>
        <Image
          source={require("../assets/images/mindDetail/Group_36629.png")}
          className="absolute top-4 left-4"
        />
      </TouchableOpacity>
      <View className="absolute inset-x-0 top-80 h-3/5 px-6">
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Text
              className="text-lg text-[#5A2D22]"
              style={styles().textFontSemiBold}
            >
              {mind.name}
            </Text>
            <View className="ml-1 mt-2 flex flex-row items-center gap-2">
              <Image
                source={require("../assets/images/mindDetail/Vector.png")}
              />
              <Text
                className="text-base text-[#b2b2b2]"
                style={styles().textFontSemiBold}
              >
                {mind.heart}
              </Text>
              <Image
                source={require("../assets/images/mindDetail/Ellipse_208.png")}
              />
              <Text
                className="font-base text-[#b2b2b2]"
                style={styles().textFontSemiBold}
              >
                {mind.date}
              </Text>
              <Image
                source={require("../assets/images/mindDetail/Ellipse_208.png")}
              />
              <Text
                className="font-base text-[#b2b2b2]"
                style={styles().textFontSemiBold}
              >
                {`${mind.time} phút`}
              </Text>
            </View>
            <TouchableOpacity
              className="mt-5 rounded-lg bg-[#7A9861] py-2"
              onPress={() => setShowVid(true)}
            >
              <ReactModal
                isVisible={showVid}
                backdropOpacity={1}
                style={{
                  alignItems: undefined,
                  justifyContent: undefined,
                  margin: 0,
                  backgroundColor: "#000",
                }}
                statusBarTranslucent={true}
                onBackdropPress={() => setShowVid(!showVid)}
                supportedOrientations={["portrait", "landscape"]}
              >
                <View className="flex-1 items-center justify-center">
                  <Video
                    ref={video}
                    style={{ width: useWindowDimensions().width, height: 300 }}
                    source={require("../assets/videos/1.mp4")}
                    useNativeControls
                    resizeMode={ResizeMode.CONTAIN}
                    onPlaybackStatusUpdate={setStatus}
                  />
                </View>
              </ReactModal>

              <View className="m-auto flex flex-row items-center">
                <Image
                  source={require("../assets/images/mindDetail/Frame.png")}
                />
                <Text
                  className="text-lg text-white"
                  style={styles().textFontBold}
                >
                  Phát
                </Text>
              </View>
            </TouchableOpacity>

            <View className="mt-5 flex flex-row justify-around">
              <TouchableOpacity className="flex h-20 w-20 flex-col items-center justify-center rounded-lg bg-white p-2">
                <Image
                  source={require("../assets/images/mindDetail/Heart.png")}
                />
                <Text
                  className="text-xs text-[#97776D]"
                  style={styles().textFontSemiBold}
                >
                  Yêu thích
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex h-20 w-20 flex-col items-center justify-center rounded-lg bg-white p-2">
                <Image
                  source={require("../assets/images/mindDetail/Chat.png")}
                />
                <Text
                  className="text-xs text-[#97776D]"
                  style={styles().textFontSemiBold}
                >
                  Bình luận
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex h-20 w-20 flex-col items-center justify-center rounded-lg bg-white p-2">
                <Image
                  source={require("../assets/images/mindDetail/bookmark.png")}
                />
                <Text
                  className="text-xs text-[#97776D]"
                  style={styles().textFontSemiBold}
                >
                  Lưu
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setModalVisible(true)}
                className="flex h-20 w-20 flex-col items-center justify-center rounded-lg bg-white p-2"
              >
                <Image
                  source={require("../assets/images/mindDetail/Share.png")}
                />
                <Text
                  className="text-xs text-[#97776D]"
                  style={styles().textFontSemiBold}
                >
                  Chia sẻ
                </Text>
              </TouchableOpacity>

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
                          source={require("../assets/images/group/blackexit.png")}
                        />
                      </TouchableOpacity>
                    </View>

                    <View className="px-3">
                      <View className="" style={styles().itemsWrap}>
                        {sharingOptions.map((option) => (
                          <TouchableOpacity
                            style={styles(4).singleItem}
                            key={option.name}
                          >
                            <Image source={option.image} />
                            <Text
                              className="text-xs text-[#5A2D22]"
                              style={styles().textFont}
                            >
                              {option.name}
                            </Text>
                          </TouchableOpacity>
                        ))}
                      </View>
                    </View>
                  </View>
                </View>
              </Modal>
            </View>

            <Text
              className="mt-5 text-sm text-[#5A2D22]"
              style={styles().textFont}
            >
              {mind.description}
            </Text>
            <View className="mt-5">
              <View className="flex flex-row justify-between">
                <Text
                  className="text-base text-[#5A2D22]"
                  style={styles().textFontSemiBold}
                >
                  Bình luận
                </Text>
                <TouchableOpacity>
                  <Text
                    onPress={() => setModalComment(true)}
                    className="text-sm text-[#FF835C]"
                    style={styles().textFontSemiBold}
                  >
                    Xem thêm
                  </Text>
                </TouchableOpacity>
              </View>
              <Modal
                className=" rounded-xl bg-white"
                animationType="slide"
                transparent={true}
                visible={modalComment}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  setModalComment(!modalComment);
                }}
              >
                <View className="bg-black/75">
                  <View className="mt-[50%] h-full rounded-2xl bg-white">
                    <View className="inset-x-0 items-end">
                      <TouchableOpacity
                        className="mt-6 mr-6"
                        onPress={() => {
                          setModalComment(false);
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
                          {comments.map((comment, index) => (
                            <View
                              key={index}
                              className=" rounded-md bg-[#FFF4ED] p-2"
                            >
                              <View className="flex flex-row items-center gap-2 ">
                                <Image
                                  source={comment.avatar}
                                  className="h-10 w-10 rounded-full"
                                />
                                <View>
                                  <Text
                                    className="text-sm text-[#5a2d22]"
                                    style={styles().textFontSemiBold}
                                  >
                                    {comment.username}
                                  </Text>
                                  <Text
                                    className="text-sm text-[#3C3C43]"
                                    style={styles().textFont}
                                  >
                                    2 giờ trước
                                  </Text>
                                </View>
                              </View>
                              <Text
                                className="mt-2 text-sm text-[#5a2d22]"
                                style={styles().textFont}
                              >
                                {comment.content}
                              </Text>
                            </View>
                          ))}
                        </View>
                      </ScrollView>
                    </View>
                  </View>
                </View>
              </Modal>
              <View className="mt-5 h-28">
                <ScrollView
                  horizontal={true}
                  className=""
                  showsHorizontalScrollIndicator={false}
                >
                  <View className="flex flex-row gap-3">
                    {comments.map((comment, index) => (
                      <View
                        key={index}
                        className="w-80 rounded-md bg-white p-2"
                      >
                        <View className="flex flex-row items-center gap-2 ">
                          <Image
                            source={comment.avatar}
                            className="h-10 w-10 rounded-full"
                          />
                          <View>
                            <Text
                              className="text-sm text-[#5a2d22]"
                              style={styles().textFontSemiBold}
                            >
                              {comment.username}
                            </Text>
                            <Text
                              className="text-sm text-[#3C3C43]"
                              style={styles().textFont}
                            >
                              2 giờ trước
                            </Text>
                          </View>
                        </View>
                        <Text
                          className="mt-2 text-sm text-[#5a2d22]"
                          style={styles().textFont}
                        >
                          {comment.content}
                        </Text>
                      </View>
                    ))}
                  </View>
                </ScrollView>
              </View>
            </View>
            <View className="mt-5 flex flex-row justify-between">
              <Text
                className="text-base text-[#5A2D22]"
                style={styles().textFontSemiBold}
              >
                Liên quan
              </Text>
              <TouchableOpacity onPress={() => setModalSuggest(true)}>
                <Text
                  className="text-sm text-[#FF835C]"
                  style={styles().textFontSemiBold}
                >
                  Xem thêm
                </Text>
              </TouchableOpacity>
            </View>

            <Modal
              className=" rounded-xl bg-white"
              animationType="slide"
              transparent={true}
              visible={modalSuggest}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalSuggest(!modalSuggest);
              }}
            >
              <View className="bg-black/75">
                <View className="mt-[50%] h-full rounded-2xl bg-white">
                  <View className="inset-x-0 items-end">
                    <TouchableOpacity
                      className="mt-6 mr-6"
                      onPress={() => {
                        setModalSuggest(false);
                      }}
                    >
                      <Image
                        source={require("../assets/images/group/blackexit.png")}
                      />
                    </TouchableOpacity>
                  </View>

                  <View className="mt-10 h-1/2 px-5">
                    <ScrollView showsVerticalScrollIndicator={false}>
                      <View className="flex flex-col">
                        {mindList.map((item, index) => (
                          <View
                            key={index}
                            className="mb-5 flex flex-row items-center justify-between rounded-lg p-3 "
                          >
                            <TouchableOpacity
                              className="flex flex-row items-center gap-10"
                              onPress={() => {}}
                            >
                              <View className="relative">
                                <View>
                                  <Image
                                    source={item.image}
                                    className=" h-12 w-12 rounded-full "
                                  />
                                </View>
                              </View>

                              <View>
                                <Text
                                  className="text-sm text-[#5A2D22]"
                                  style={styles().textFontSemiBold}
                                >
                                  {item.name}
                                </Text>
                                <View className="flex flex-row items-center gap-2">
                                  <Image
                                    source={require("../assets/images/mind/Heart.png")}
                                  />
                                  <Text
                                    className="text-xs text-[#B2B2B2]"
                                    style={styles().textFont}
                                  >{`${item.heart}`}</Text>
                                  <Image
                                    source={require("../assets/images/mind/Ellipse_206.png")}
                                  />
                                  <Text
                                    className="text-xs text-[#B2B2B2]"
                                    style={styles().textFont}
                                  >
                                    {item.date}
                                  </Text>
                                  <Image
                                    source={require("../assets/images/mind/Ellipse_206.png")}
                                  />
                                  <Text
                                    className="text-xs text-[#B2B2B2]"
                                    style={styles().textFont}
                                  >
                                    {`${item.time} phút`}
                                  </Text>
                                </View>
                              </View>
                            </TouchableOpacity>
                          </View>
                        ))}
                      </View>
                    </ScrollView>
                  </View>
                </View>
              </View>
            </Modal>

            <View className="mt-5 h-52">
              <ScrollView
                horizontal={true}
                className=""
                showsHorizontalScrollIndicator={false}
              >
                <View className="flex flex-row gap-3">
                  {mindList.map((item) => (
                    <View key={item.id}>
                      <TouchableOpacity
                        onPress={() =>
                          props.navigation.navigate("MindDetail", {
                            mind: item,
                          })
                        }
                      >
                        <View className="">
                          <Image
                            source={item.image}
                            className="h-40 w-40 rounded-lg object-cover"
                          />
                          <View className="absolute bottom-2 left-2 right-6 flex flex-row items-center justify-between">
                            <Text className="text-xs text-white">{`${item.time} phút`}</Text>
                            <Image
                              source={require("../assets/images/mind/Group_36586.png")}
                              className=""
                            />
                          </View>
                        </View>
                        <View className="mt-2">
                          <Text
                            className="text-[#5A2D22]"
                            style={styles().textFontBold}
                          >
                            {item.name}
                          </Text>
                          <View className="flex flex-row items-center gap-2">
                            <Image
                              source={require("../assets/images/mind/Heart.png")}
                            />
                            <Text
                              className="text-xs text-[#B2B2B2]"
                              style={styles().textFont}
                            >{`${item.heart}`}</Text>
                            <Image
                              source={require("../assets/images/mind/Ellipse_206.png")}
                            />
                            <Text
                              className="text-xs text-[#B2B2B2]"
                              style={styles().textFont}
                            >
                              {item.date}
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>
              </ScrollView>
            </View>
          </View>
          <View className="h-5 w-full"></View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
