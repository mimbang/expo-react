import MessageList from '@/components/MessageList';
import { FakeMessages } from '@/data/FakeChat';
import styles from '@/styles/GlobalStyles';
import MessStyle from '@/styles/MessageStyle';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Image, ScrollView, Text, View } from 'react-native';

const router = useRouter();

const message = ({navigation} : any) => {
  return (
     <ScrollView>
       {/* debut du header */}
       <View style={styles.header}>
           <Text style={styles.UserName}>john do </Text>
           <Image source={require("@/assets/images/gojo2.jpg")}
                                 style={styles.userImg}/>
       </View>
       {/* fin du header */}
       <FlatList  data={FakeMessages} 
       style={MessStyle.root} showsHorizontalScrollIndicator={false} 
       showsVerticalScrollIndicator={false}
                 keyExtractor={item => item.id}
                 renderItem={ ({item}) =>{
                  return (
                    <MessageList item={item} 
                    onPress={() =>router.push({
                        pathname: '/(tabs)/message/[id]',

                        params: { id: item.id ,},
                      }) }/>
                    
                  )
                  
                 }}/>
   


   </ScrollView>
  )
}

export default message