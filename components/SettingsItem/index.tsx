import { Color } from '@/constants/Color';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { Text, TouchableOpacity,  } from 'react-native';
import { styles } from './style';

const SettingItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>{item.libelle}</Text>
      {/* <MaterialIcons name='arrow-right' size={30} color={"blue"}/> */}
      <MaterialIcons size={50} name='arrow-right' color={Color.main}/>

    </TouchableOpacity>
  )
}

export default SettingItem