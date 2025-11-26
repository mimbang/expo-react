import { Padding } from '@/constants/Color'
import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:Padding.horizontal,
        paddingVertical:Padding.vertical,


    },
    header:{
        backgroundColor:"#ffff",
        elevation:5,
        flex:1,
        flexDirection:"row",
        padding:10,
        alignItems:"center",


    },
    image:{
        width:80,
        height:80,
        borderRadius:80/2,

    },
    userInfo:{
        marginLeft:15,
    },
    userName:{
        fontWeight:"bold",
        marginBottom:5,
    },
    userEmail:{
        marginBottom:5,

    },

})


