import { View, Text, Pressable } from "react-native";
import { CometChat } from "@cometchat-pro/react-native-chat";

import { CometChatUI } from "../../CometChatWorkspace";
import { useState } from "react";

// COMETCHAT AUTH KEY HERE
const authKey = "-----";

const CometChatScreen = () => {

  const [loading, setLoading] = useState(false);
  const [logged, setLogged] = useState();

  const login = (uid) => () => {
    setLoading(true);
    CometChat.login(uid, authKey).then(
      (user) => {
        console.log("Login Successful:", { user });
        setLoading(false);
        setLogged(user);
      },
      (error) => {
        console.log("Login failed with exception:", { error });
      },
    );
  };
  if (loading)
    return (
      <View style={{ flex: 1, alignSelf: "stretch", alignItems: "center", justifyContent: "center", backgroundColor: "white" }}>
        <Text>Logging.....</Text>
      </View>
    );

  if (!logged)
    return (
      <View style={{ flex: 1, alignSelf: "stretch", alignItems: "center", justifyContent: "center", backgroundColor: "white" }}>
        <Pressable onPress={login("SUPERHERO1")}>
          <Text>Log in!</Text>
        </Pressable>
        <Pressable onPress={login("SUPERHERO2")}>
          <Text>Log in 2!</Text>
        </Pressable>
      </View>
    );

  return (
    <View style={{ flex: 1 }}>
      <CometChatUI />
    </View>
  );
};

export default CometChatScreen;
