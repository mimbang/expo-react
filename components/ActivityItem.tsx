import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react';
import DashStyle   from "@/styles/DashStyle";
import HospitalSvg from "@/assets/images/Svg/medicine_h.svg";


const ActivityItem = ({item}) => {
  return  (
                  <TouchableOpacity style={DashStyle.ScrollarListItem} >
                    <HospitalSvg width={50} height={50}/>
                    <Text > {item.id}</Text>
                    <Text style={DashStyle.MainText}> {item.maintext}</Text>
                    <Text  style={DashStyle.subtext}> {item.subtext}</Text>
                  </TouchableOpacity>
                )
}

export default ActivityItem

