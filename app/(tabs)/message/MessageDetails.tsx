import React from 'react'
import { Image, Text, View } from 'react-native'

const MessageDetails = () => {
  return (
    <View>
      <Text>MessageDetails</Text>
      <Image screenReaderFocusable={true} source={require("@/assets/images/Perso/gojo.jpg")} />
    </View>
  )
}

export default MessageDetails