// import HospitalSvg from "@/assets/images/Svg/medicine_h.svg";
// import DashStyle from "@/styles/DashStyle";
// import React from 'react';
// import { Text, TouchableOpacity } from 'react-native';



// const SymptomList = (item) => {
//    return  (
//                   <TouchableOpacity style={DashStyle.ScrollarListItem} >
//                     <HospitalSvg width={50} height={50}/>
//                     <Text> {JSON.stringify(item)}</Text>
//                     <Text > {item.id}</Text>
//                     {/* <Text> {item.img}</Text> */}
//                     {/* <Text  > {item.label}</Text> */}
//                   </TouchableOpacity>
//                 )
// }



// export default SymptomList


import DashStyle from "@/styles/DashStyle";
import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';


const SymptomList = ({item}) => {
    // const ImgSource = require(`../../assets/images/${item.img}`);
    const ImgSource2 = require(`@/assets/images/JJK S3.jpg`)
  return  (
                  <TouchableOpacity style={DashStyle.item} >
                    {/* <HospitalSvg width={50} height={50}/> */}
                    <Image
                          source={item.img}
                          style={DashStyle.itemImg}/>
                    <Text > {item.id}</Text>
                    {/* <Text style={DashStyle.MainText}> {item.img}</Text> */}
                    <Text  > {item.label}</Text>
                  </TouchableOpacity>
                )
}

export default SymptomList

