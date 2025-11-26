import FakeDoctor from "@/data/FakeDoctor"; // ✅ import par défaut
import DashStyle from "@/styles/DashStyle";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const router = useRouter();

const DoctorItem = () => {
  return (
    <View style={{ padding: 10 }}>
      {FakeDoctor.map((docteur, index) => (
        <TouchableOpacity
          key={index}
          style={
            DashStyle.DoctorsCard } onPress={() => router.push({
              pathname:'/(tabs)/App/[doctor]',
              params:{id:docteur.id ,}
            })} 
        >
          <Image
            source={docteur.img}
            style={DashStyle.DoctorImg}
          />
          <View style={DashStyle.DoctorInfo}>
            <Text style={DashStyle.DoctorName}>{docteur.fullname}</Text>
            <Text style={DashStyle.DoctorSpec} >{docteur.speciality}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default DoctorItem;

