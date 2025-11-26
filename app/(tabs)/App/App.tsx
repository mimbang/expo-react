import ActivityItem from '@/components/ActivityItem';
import DoctorItem from '@/components/DoctorItem';
import SymptomList from '@/components/SymptomList';
import { FakeActivities } from '@/data/FakeActivities';
import { FakeSymptom } from "@/data/FakeSymptom";
import DashStyle from '@/styles/DashStyle';
import React from 'react';
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
// import FakeSymptom 


const App = () => {
  return (
   <ScrollView>
    {/* debut du header */}
    <View style={DashStyle.header}>
        <Text style={DashStyle.UserName}>john do </Text>
        <Image source={require("@/assets/images/gojo2.jpg")}
                              style={DashStyle.userImg}/>
    </View>
    {/* fin du header */}

    {/* liste des activtes */}
    <FlatList style={DashStyle.ScrollarList}
     data={FakeActivities} 
     keyExtractor={(item) => item.id.toString()}
     horizontal={true}
     showsHorizontalScrollIndicator={false}
      renderItem={({ item }) =>
      <ActivityItem item={item}/>
      // (
      //   <TouchableOpacity style={DashStyle.ScrollarListItem} >
      //               <Text > {item.id}</Text>
      //               <Text style={DashStyle.MainText}> {item.maintext}</Text>
      //               <Text  style={DashStyle.subtext}>{item.subtext}</Text>
      //             </TouchableOpacity>
                
      // )
      }
            />
       

    {/* fins des activites */}
    <View style={DashStyle.title}>
      <Text style={DashStyle.titleBold}> QUEL SYMPTOME AVEC VOUS </Text>

      <Text>LISTE DES SYMPTOMES</Text>
    </View>


      <FlatList style={DashStyle.ScrollarList}
     data={FakeSymptom} 
     keyExtractor={(item) => item.id.toString()}
     horizontal={true}
     showsHorizontalScrollIndicator={false}
      renderItem={({ item }) =>
      <SymptomList item={item}/>
      
      } />

      {/* fin liste des smptomes  */}

      {/* liste des docteurs */}
      <View style={DashStyle.title_space_between}>
        <Text style={DashStyle.titleBold}>
          NOS DOCTEURS 
        </Text>
        <TouchableOpacity>
        <Text style={DashStyle.link}>Afficher tout</Text>

        </TouchableOpacity>
      </View>

      <View style={DashStyle.DoctorsContainer}>
        <DoctorItem/>

      </View>


   </ScrollView>
  )
}

export default App