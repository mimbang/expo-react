import { StyleSheet } from 'react-native';
import { Padding } from '@/constants/Color';



const styles = StyleSheet.create({
    // header 
   
     header:{
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            paddingHorizontal:Padding.horizontal,
            paddingVertical:Padding.vertical,
            backgroundColor:"white",
    
        },
        userImg:{
            height:50,
            width:50,
            borderRadius:50/2,
            backgroundColor:"white",
    
            
    
        },
        UserName:{
            fontSize:16,
    
        },
})

export default styles
