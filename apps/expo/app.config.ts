import { ConfigContext, ExpoConfig } from "@expo/config";

const CLERK_PUBLISHABLE_KEY =
  "pk_test_ZWxlY3RyaWMtaGlwcG8tMTcuY2xlcmsuYWNjb3VudHMuZGV2JA";

const defineConfig = (_ctx: ConfigContext): ExpoConfig => ({
  name: "The good life",
  slug: "t3-mobile",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/landing.png",
    resizeMode: "contain",
    backgroundColor: "#fff4ed",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "your.bundle.identifier",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/icon.png",
      backgroundColor: "#2e026d",
    },
    package: "com.yourcompany.yourappname",
    versionCode: 1,
  },
  extra: {
    eas: {
      projectId: "deede13a-003f-4311-8e86-cf8c8b4866fe",
    },
    CLERK_PUBLISHABLE_KEY,
  },
  plugins: ["./expo-plugins/with-modify-gradle.js"],
});

export default defineConfig;
