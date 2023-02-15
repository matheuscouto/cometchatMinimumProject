import { View } from "react-native";
import { CometChat } from "@cometchat-pro/react-native-chat";
import CometChatScreen from "./src/screens/CometChatScreen";
import { CometChatMessages } from "./src/CometChatWorkspace/src";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// COMETCHAT APP ID HERE
const appID = "-";
const region = "us";
const appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build();

CometChat.init(appID, appSetting).then(
  () => {
    console.log("Initialization completed successfully");
    // You can now call login function.
  },
  (error) => {
    console.log("Initialization failed with error:", error);
    // Check the reason for error and take appropriate action.
  },
);

const Stack = createNativeStackNavigator();

const navigatorOptions = {
  screenOptions: {
    headerShown: false,
  },
};

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="CometChat" {...navigatorOptions}>
          <Stack.Screen name="CometChat" component={CometChatScreen} />
          <Stack.Screen name="CometChatMessages" component={CometChatMessages} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
