import { Padding } from '@/constants/Color'
import { StyleSheet } from 'react-native'


const MessStyle = StyleSheet.create({
    root:{
        paddingVertical:Padding.vertical,
        paddingHorizontal:Padding.horizontal,
    },
    container:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:15,
        paddingVertical:Padding.vertical,
        paddingHorizontal:Padding.horizontal,
        elevation:5,     
           backgroundColor:"#fff",
        // elevation:5,


    },
    MessageImg:{
        width:50,
        height:50,
        borderRadius:50/2,
        marginRight:15,

    },
    MessageInfo:{
        flexDirection:"column",

    },
    DateName :{
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:5,


    },
    Name:{
        fontWeight:"bold",
        color:"green",
        
    },

})


export default  MessStyle
