const ExpoSettings = {
  expo: {
    name: "TurboTenant",
    version: "1.0.5",
    owner: "turbotenant-mobile-app",
    originalFullName: "@turboteam22/landlords-mobile-app",
    currentFullName: "@turboteam22/landlords-mobile-app",
    slug: "landlords-mobile-app",
    orientation: "portrait",
    icon: "./assets/adaptive-icon.png",
    userInterfaceStyle: "light",
    runtimeVersion: { policy: "nativeVersion" },
    jsEngine: "hermes",
    scheme: "turbotenant",
    facebookScheme: "e0a949e88b24e2bbae29d70adf6abedf",
    facebookAppId: "1305550190008477",
    facebookDisplayName: "TurboTenant",
    splash: {
      image: "./assets/foreground-icon.png",
      resizeMode: "contain",
      backgroundColor: "#033A6D",
    },
    updates: {
      fallbackToCacheTimeout: 1000,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: false,
      bundleIdentifier: "com.turbotenant.owner",
      buildNumber: "38",
      googleServicesFile: "./GoogleService-Info.plist",
      associatedDomains: ["applinks:turbo-tenant.app.link", "applinks:turbo-tenant-alternate.app.link"],
    },
    android: {
      package: "com.turbotenant.owner",
      versionCode: 38,
      googleServicesFile: "./google-services.json",
      adaptiveIcon: {
        foregroundImage: "./assets/foreground-icon.png",
        backgroundImage: "./assets/background-icon.png",
        backgroundColor: "#033A6D",
      },
      softwareKeyboardLayoutMode: "pan",
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    plugins: [
      "sentry-expo",
      "expo-image-picker",
      [
        "expo-tracking-transparency",
        {
          userTrackingPermission: "For a more personalized experience, allow TurboTenant to collect data.",
        },
      ],
      [
        "expo-build-properties",
        {
          ios: {
            useFrameworks: "static",
          },
        },
      ],
      "@react-native-firebase/app",
      "@react-native-firebase/perf",
      "@react-native-firebase/crashlytics",
      [
        "@config-plugins/react-native-branch",
        {
          apiKey: "key_live_dhZ1L5Btp4EqzBPOYlqPMeohsFapMIKR",
          iosAppDomain: "turbo-tenant.app.link",
        },
      ],
      [
        "react-native-fbsdk-next",
        {
          appID: "1305550190008477",
          clientToken: "e0a949e88b24e2bbae29d70adf6abedf",
          displayName: "TurboTenant",
          scheme: "fb1305550190008477",
          iosUserTrackingPermission: "This identifier will be used to deliver personalized ads to you",
        },
      ],
    ],
    packagerOpts: {
      config: "metro.config.js",
      sourceExts: ["js", "jsx", "scss", "sass"],
    },
    extra: {
      eas: {
        projectId: "13987563-1d3c-434e-95e8-56b0b61db31d",
      },
    },
  },
};

export default () => ExpoSettings;
