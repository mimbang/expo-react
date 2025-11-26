import FakeDoctor from '@/data/FakeDoctor';
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';



const doctor = () => {
     const { id ,uri } = useLocalSearchParams();
     const navigation = useNavigation();
     const router = useRouter();

      // cherchons le docteur en question/
         const DoctorInfo = FakeDoctor.find(d => d.id === Number(id));
      useEffect(() => {
        
         // Changer le titre de la page
         navigation.setOptions({
           title:DoctorInfo?.fullname, // nouveau nom dans le header
         });
      console.log(DoctorInfo?.speciality)

       },);
     
  return (
    <View>
      <Text>doctor</Text>
      <Text>{DoctorInfo?.speciality}</Text>
      {/* <Image source={DoctorInfo?.img.uri} /> */}
    </View>
  )
}

export default doctor