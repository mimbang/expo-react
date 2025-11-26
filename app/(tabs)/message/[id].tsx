import MessageComponents from "@/components/MessageComponents";
import { FakeMessages } from "@/data/FakeChat";
import { FakeConversation } from "@/data/FakeConversation";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { useEffect, useState } from "react";

import MessageInput from "@/components/MessageComponents/MessageInput";
import { FlatList, Text, View } from "react-native";
import styles from "@/styles/GlobalStyles";

export default function ChatScreen() {
  // recuperer les parametre envoyes avec localsearchparma
  const { id } = useLocalSearchParams();

  // importte le router et navgation pour la navigation
  const router = useRouter();
  const navigation = useNavigation();

  // chercher le message

  const [messages, setMessages] = useState(FakeMessages);
  const [input, setInput] = useState("");
  // verifier aquia send le message


  
  
  useEffect(() => {
    // cherchons lemessage en question/
    const message = FakeMessages.find(m => m.id === id);
    // Changer le titre de la page
    navigation.setOptions({
      title: message?.fullname, styles// nouveau nom dans le header
      
    });
  },);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={FakeConversation}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <MessageComponents item={item}/>
        }}
      />
      <MessageInput/>
      
    </View>
  );
}
