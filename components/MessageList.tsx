import MessStyle from "@/styles/MessageStyle";
import dayjs from 'dayjs';
import { useRouter } from "expo-router";
import "dayjs/locale/fr"; // Import de la langue française
import relativeTime from 'dayjs/plugin/relativeTime';
import React from "react";
import { Image, Text, TouchableOpacity, View, } from "react-native";


dayjs.extend(relativeTime);
dayjs.locale("fr");

type Message = {
  id: string;
  fullname: string;
  last_message: string;
  date: string;
  img:any;
  type?: string; 
  // onPress = () => void // optionnel
};

type Props = {
  item: Message;
  onPress: () => void;

};

const MessageList = ({ item,onPress  }: Props) => {
  const router = useRouter();
  return (
    
   <TouchableOpacity style={MessStyle.container} onPress={onPress}>
    
    <Image source={item.img} style={MessStyle.MessageImg}/>
     <View style={MessStyle.MessageInfo}>
      {/* <Text>MessageList</Text> */}
      <View style ={MessStyle.DateName}>
         <Text style={MessStyle.Name}>{item.fullname}</Text>
         <Text style={MessStyle.DateName}>{dayjs(item.date).fromNow(true)}</Text>
      </View>
      <Text style={MessStyle.MessageInfo}>{item.last_message}</Text>

  
    </View>

   </TouchableOpacity>
  );
};

export default MessageList;
