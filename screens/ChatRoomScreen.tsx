import { useRoute } from "@react-navigation/native";
import React from "react";
import { Text, View, FlatList, ImageBackground } from "react-native";
import ChatMessage from "../components/ChatMessage";
import chatRoomData from "../data/Chats";
import BG from '../assets/images/BG.png';
import InputBox from "../components/InputBox";

const ChatRoomScreen = () => {
  const route = useRoute();

  return (
    <ImageBackground style={{width: '100%', height: '100%'}} source={BG}>
      <FlatList
        data={chatRoomData.messages}
        renderItem={({ item }) => <ChatMessage message={item} />}
        inverted // Orientation bottom to top with current data in the bottom
      />
      <InputBox />
    </ImageBackground>
  );
};

export default ChatRoomScreen;
