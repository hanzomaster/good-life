const tracks = [
  {
    url: require("./Date 2.mp3"), // Load media from the network
    title: "Avaritia",
    artist: "deadmau5",
    album: "while(1<2)",
    genre: "Progressive House, Electro House",
    date: "2014-05-20T07:00:00+00:00", // RFC 3339
    artwork: "http://example.com/cover.png", // Load artwork from the network
    duration: 402, // Duration in seconds
  },
  {
    url: require("./STAY.mp3"), // Load media from the app bundle
    title: "Coelacanth I",
    artist: "deadmau5",
    artwork: require("./cover.jpg"), // Load artwork from the app bundle
    duration: 166,
  },
];

export default tracks;
