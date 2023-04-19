export type Song = {
  id: number;
  name: string;
  image: any;
  time: number;
  singer: string;
  description: string;
  like: boolean;
  uri: any;
};
export type Playlist = {
  name: string;
  list: Array<Song>;
};
export const suggestSongs = [
  {
    id: 0,
    name: "Tình sầu",
    image: require("../images/music/Avatar.png"),
    time: 21,
    singer: "Bùi Lan Hương",
    description: "Rule meditation like lion",
    like: true,
    uri: require("./tinh-sau.mp3"),
  },
  {
    id: 1,
    name: "Matilda",
    image: require("../images/music/Avatar.png"),
    time: 21,
    singer: "Harry Styles",
    description: "Rule meditation like lion",
    like: false,
    uri: require("./Matilda.mp3"),
  },
  {
    id: 2,
    name: "Giữa đại lộ Đông Tây",
    image: require("../images/music/Avatar.png"),
    time: 21,
    singer: "Uyên Linh",
    description: "Rule meditation like lion",
    like: false,
    uri: require("./giua-dai-lo-Dong-Tay.mp3"),
  },
  {
    id: 3,
    name: "The way that I love you",
    image: require("../images/music/Avatar.png"),
    time: 21,
    singer: "Passenger",
    description: "Rule meditation like lion",
    like: false,
    uri: require("./the-way-that-i-love-you.mp3"),
  },
  {
    id: 4,
    name: "Tháng Tư là lời nói dối của em",
    image: require("../images/music/Avatar.png"),
    time: 21,
    singer: "Hà Anh Tuấn",
    description: "Rule meditation like lion",
    like: false,
    uri: require("./thang-tu-la-loi-noi-doi-cua-em.mp3"),
  },
  {
    id: 5,
    name: "Người hãy quên em đi",

    image: require("../images/music/Avatar.png"),
    time: 21,
    singer: "Mỹ Tâm",
    description: "Rule meditation like lion",
    like: false,
    uri: require("./nguoi-hay-quen-em-di.mp3"),
  },
  {
    id: 6,
    name: "Stay",
    singer: "BLACKPINK",
    image: require("../images/music/Avatar.png"),
    time: 21,
    description: "Rule meditation like lion",
    like: false,
    uri: require("./STAY.mp3"),
  },
];

const naturalSongs: Array<Song> = [
  {
    id: 2,
    name: "Giữa đại lộ Đông Tây",
    image: require("../images/music/Avatar.png"),
    time: 21,
    singer: "Uyên Linh",
    description: "Rule meditation like lion",
    like: false,
    uri: require("./giua-dai-lo-Dong-Tay.mp3"),
  },
  {
    id: 0,
    name: "Tình sầu",
    image: require("../images/music/Avatar.png"),
    time: 21,
    singer: "Bùi Lan Hương",
    description: "Rule meditation like lion",
    like: true,
    uri: require("./tinh-sau.mp3"),
  },
  {
    id: 3,
    name: "The way that I love you",
    image: require("../images/music/Avatar.png"),
    time: 21,
    singer: "Passenger",
    description: "Rule meditation like lion",
    like: false,
    uri: require("./the-way-that-i-love-you.mp3"),
  },
  {
    id: 1,
    name: "Matilda",
    image: require("../images/music/Avatar.png"),
    time: 21,
    singer: "Harry Styles",
    description: "Rule meditation like lion",
    like: false,
    uri: require("./Matilda.mp3"),
  },

  {
    id: 4,
    name: "Tháng Tư là lời nói dối của em",
    image: require("../images/music/Avatar.png"),
    time: 21,
    singer: "Hà Anh Tuấn",
    description: "Rule meditation like lion",
    like: false,
    uri: require("./thang-tu-la-loi-noi-doi-cua-em.mp3"),
  },
  {
    id: 5,
    name: "Người hãy quên em đi",

    image: require("../images/music/Avatar.png"),
    time: 21,
    singer: "Mỹ Tâm",
    description: "Rule meditation like lion",
    like: false,
    uri: require("./nguoi-hay-quen-em-di.mp3"),
  },
  {
    id: 6,
    name: "Stay",
    singer: "BLACKPINK",
    image: require("../images/music/Avatar.png"),
    time: 21,
    description: "Rule meditation like lion",
    like: false,
    uri: "../assetsm",
  },
];

export const suggest: Array<Playlist> = [
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
