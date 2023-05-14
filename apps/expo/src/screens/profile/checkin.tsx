import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../root";

import React from "react";
import { ProfileScreenProps } from "../../types/navigation";

const day = [
  { name: "T2" },
  { name: "T3" },
  { name: "T4" },
  { name: "T5" },
  { name: "T6" },
  { name: "T7" },
  { name: "CN" },
];
const week1 = [
  {
    name: "01",
    status: require("../../assets/images/profile/checkin/no.png"),
  },
  { name: "02", status: require("../../assets/images/profile/checkin/no.png") },
  {
    name: "03",
    status: require("../../assets/images/profile/checkin/yes.png"),
  },
  { name: "04", status: require("../../assets/images/profile/checkin/no.png") },
  {
    name: "05",
    status: require("../../assets/images/profile/checkin/yes.png"),
  },
  {
    name: "06",
    status: require("../../assets/images/profile/checkin/yes.png"),
  },
  { name: "07", status: require("../../assets/images/profile/checkin/no.png") },
];

const week2 = [
  {
    name: "08",
    status: require("../../assets/images/profile/checkin/no.png"),
  },
  {
    name: "09",
    status: require("../../assets/images/profile/checkin/yes.png"),
  },
  {
    name: "10",
    status: require("../../assets/images/profile/checkin/no.png"),
  },
  {
    name: "11",
    status: require("../../assets/images/profile/checkin/yes.png"),
  },
  {
    name: "12",
    status: require("../../assets/images/profile/checkin/no.png"),
  },
  {
    name: "13",
    status: require("../../assets/images/profile/checkin/no.png"),
  },
  { name: "14", status: require("../../assets/images/profile/checkin/no.png") },
];

const week3 = [
  {
    name: "15",
    status: require("../../assets/images/profile/checkin/no.png"),
  },
  { name: "16", status: require("../../assets/images/profile/checkin/no.png") },
  {
    name: "17",
    status: require("../../assets/images/profile/checkin/no.png"),
  },
  { name: "18", status: require("../../assets/images/profile/checkin/no.png") },
  {
    name: "19",
    status: require("../../assets/images/profile/checkin/no.png"),
  },
  {
    name: "20",
    status: require("../../assets/images/profile/checkin/no.png"),
  },
  { name: "21", status: require("../../assets/images/profile/checkin/no.png") },
];
const week4 = [
  {
    name: "22",
    status: require("../../assets/images/profile/checkin/no.png"),
  },
  { name: "23", status: require("../../assets/images/profile/checkin/no.png") },
  {
    name: "24",
    status: require("../../assets/images/profile/checkin/no.png"),
  },
  { name: "25", status: require("../../assets/images/profile/checkin/no.png") },
  {
    name: "26",
    status: require("../../assets/images/profile/checkin/no.png"),
  },
  {
    name: "27",
    status: require("../../assets/images/profile/checkin/no.png"),
  },
  { name: "28", status: require("../../assets/images/profile/checkin/no.png") },
];

const week5 = [
  {
    name: "29",
    status: require("../../assets/images/profile/checkin/no.png"),
  },
  { name: "30", status: require("../../assets/images/profile/checkin/no.png") },
  {
    name: "31",
    status: require("../../assets/images/profile/checkin/no.png"),
  },
  { name: " ", status: "" },
  {
    name: " ",
    status: "",
  },
  {
    name: " ",
    status: "",
  },
  { name: " ", status: "" },
];

const comment = [
  {
    day: "Thứ 2",
    time: "7:20 am",
    comment:
      "Hôm nay mình cảm thấy rất vui sau khi ngồi thiền, mình ko bị đau đầu nữa và h cảm thấy hoàn toàn thư giãn và nhẹ nhàng",
  },
  {
    day: "Thứ 4",
    time: "9:30 am",
    comment:
      "Hôm nay mình cảm thấy rất vui sau khi ngồi thiền, mình ko bị đau đầu nữa và h cảm thấy hoàn toàn thư giãn và nhẹ nhàng",
  },
];

export const CheckIn = (props: ProfileScreenProps<"CheckIn">) => {
  return (
    <SafeAreaView className="absolute inset-0 content-end bg-[#FFF4ED]">
      <View className="absolute inset-x-0 top-0 left-0">
        <Image
          className="h-auto max-w-full object-cover"
          source={require("../../assets/images/profile/checkin/header.png")}
        />
        <View className="absolute top-10 flex flex-row p-1 align-baseline">
          <TouchableOpacity className="" onPress={() => props.navigation.pop()}>
            <Image
              className="ml-5"
              source={require("../../assets/images/profile/checkin/back.png")}
            />
          </TouchableOpacity>
          <Text
            className=" font-quicksand ml-8 text-2xl text-white "
            style={styles().textFontBold}
          >
            Check in
          </Text>
        </View>
      </View>

      <ScrollView className="relative mt-44">
        <View className="   ml-[5%] w-[90%]">
          <View className=" rounded-lg bg-white">
            <View className="mt-5" style={styles().itemsWrap}>
              <Text
                className=" font-quicksand text-lg text-[#5A2D22]"
                style={styles().textFontBold}
              >
                Tháng 5
              </Text>
            </View>

            <View>
              <View className="ml-2 mt-7 flex flex-row" style={{ flex: 1 }}>
                {day.map((item) => {
                  return (
                    <View style={{ flex: 1 }}>
                      <Text
                        className=" font-quicksand text-lg text-[#5A2D22] "
                        style={styles().textFontSemiBold}
                      >
                        {item.name}
                      </Text>
                    </View>
                  );
                })}
              </View>

              <View className="ml-2 flex flex-row" style={{ flex: 1 }}>
                {week1.map((item) => {
                  return (
                    <View className="mt-3 flex flex-col" style={{ flex: 1 }}>
                      <Image className="" source={item.status} />
                      <Text
                        className=" font-quicksand ml-2 text-sm text-[#5A2D22] "
                        style={styles().textFont}
                      >
                        {item.name}
                      </Text>
                    </View>
                  );
                })}
              </View>

              <View className="ml-2 flex flex-row" style={{ flex: 1 }}>
                {week2.map((item) => {
                  return (
                    <View className="mt-3 flex flex-col" style={{ flex: 1 }}>
                      <Image className="" source={item.status} />
                      <Text
                        className=" font-quicksand ml-2 text-sm text-[#5A2D22] "
                        style={styles().textFont}
                      >
                        {item.name}
                      </Text>
                    </View>
                  );
                })}
              </View>

              <View className="ml-2 flex flex-row" style={{ flex: 1 }}>
                {week3.map((item) => {
                  return (
                    <View className="mt-3 flex flex-col" style={{ flex: 1 }}>
                      <Image className="" source={item.status} />
                      <Text
                        className=" font-quicksand ml-2 text-sm text-[#5A2D22] "
                        style={styles().textFont}
                      >
                        {item.name}
                      </Text>
                    </View>
                  );
                })}
              </View>

              <View className="ml-2 flex flex-row" style={{ flex: 1 }}>
                {week4.map((item) => {
                  return (
                    <View className="mt-3 flex flex-col" style={{ flex: 1 }}>
                      <Image className="" source={item.status} />
                      <Text
                        className=" font-quicksand ml-2 text-sm text-[#5A2D22] "
                        style={styles().textFont}
                      >
                        {item.name}
                      </Text>
                    </View>
                  );
                })}
              </View>

              <View className="mb-5 ml-2 flex flex-row" style={{ flex: 1 }}>
                {week5.map((item) => {
                  return (
                    <View className="mt-3 flex flex-col" style={{ flex: 1 }}>
                      <Image className="" source={item.status} />
                      <Text
                        className=" font-quicksand ml-2 text-sm text-[#5A2D22] "
                        style={styles().textFont}
                      >
                        {item.name}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </View>
          </View>

          <View className=" mt-0">
            {comment.map((item) => {
              return (
                <View className=" mt-10 rounded-lg bg-white">
                  <View className="mt-5 ml-[5%] flex flex-row">
                    <Text
                      className=" font-quicksand ml-2 text-sm text-[#5A2D22] "
                      style={styles().textFontSemiBold}
                    >
                      {item.day} ,
                    </Text>
                    <Text
                      className=" font-quicksand ml-2 text-sm text-[#5A2D22] "
                      style={styles().textFontSemiBold}
                    >
                      {item.time}
                    </Text>
                  </View>

                  <View className="mt-1 ml-[5%] w-[90%]">
                    <Text
                      className=" font-quicksand mb-5 ml-2 text-sm text-[#5A2D22] "
                      style={styles().textFont}
                    >
                      {item.comment}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
