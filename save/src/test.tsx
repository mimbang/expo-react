import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { useEffect, useState } from "react";

import { FlatList, Text, View } from "react-native";

export default function ChatScreen() {
  // recuperer les parametre envoyes avec localsearchparma
  const { id } = useLocalSearchParams();

  // importte le router et navgation pour la navigation
  const router = useRouter();
  const navigation = useNavigation();
  const [messages, setMessages] = useState([
    { id: "1", text: "Salut 👋", sender: "them" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { id: Date.now().toString(), text: input, sender: "me" }]);
    setInput("");
  };
  
  useEffect(() => {
    // Changer le titre de la page
    navigation.setOptions({
      title: id, // nouveau nom dans le header
    });
  },);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              alignSelf: item.sender === "me" ? "flex-end" : "flex-start",
              backgroundColor: item.sender === "me" ? "#DCF8C6" : "#EEE",
              borderRadius: 8,
              padding: 8,
              marginVertical: 4,
              maxWidth: "75%",
            }}
          >
            <Text>{item.text}</Text>
          </View>
        )}
      />
      <View>
        <Text>hello</Text>
      </View>

    </View>
  );
}
