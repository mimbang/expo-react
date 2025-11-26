
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';
import { Color } from '@/constants/Color';




dayjs.extend(relativeTime);
dayjs.locale("fr");

const MessageComponents = ({item}) => {
    const IsMine = () =>{
    return item.user.id === 1;
  }
  return (
    <View style={[styles.container,
    {backgroundColor:IsMine() ? Color.main :"white",
      alignSelf:IsMine() ? "flex-end": "flex-start"
    }]}>
      <Text style={{
        color:IsMine() ? "white" : "blue" ,fontSize:18,
    }}>{item.message}</Text>
      <Text>{dayjs(item.createAt).fromNow(true)}</Text>
    </View>
  )
}

export default MessageComponents