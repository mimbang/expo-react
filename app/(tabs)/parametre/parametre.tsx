import SettingItem from '@/components/SettingsItem'
import React from 'react'
import { FlatList, Image, ScrollView, Text, View } from 'react-native'
import { FakeSettings } from '../../../data/FakeSettings'
import { styles } from './style'

const Settings = () => {
  return (
    <ScrollView style={styles.container}>
      
      {/* debut du header */}
      <View style={styles.header}>
        <Image  source={require("@/assets/images/Perso/gojo.jpg")} 
                 style={styles.image}/>
         <View style={styles.userInfo}>
{/* debut des info du header */}
        <Text style={styles.userName}>Mimbamg</Text>
        <Text style={styles.userEmail}>mimbang@gmail.com</Text>
        <Text>1234567890</Text>
{/* fin des infos du header */}
      </View>         
      </View>
     {/* fin du header */}

     <FlatList data={FakeSettings} keyExtractor={item=>String(item.id)} 
               showsVerticalScrollIndicator={false} 
               renderItem={({item}) =>{
                return <SettingItem item={item}/>
                

               }} />
    </ScrollView>
  )
}

export default Settings