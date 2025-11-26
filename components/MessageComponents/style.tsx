import { StyleSheet } from 'react-native'



 const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        margin:5,
        padding:10,
        borderRadius:5,
        maxWidth:"80%",

    },
    InputContainer:{
        // padding:5,
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"#eee",
    },
    send:{
        backgroundColor:"#0b75f0ff",
        padding:10,
        paddingHorizontal:15,
        paddingVertical:15,
        alignItems:"center",
        color:"#ffff"


    },
    input:{
        flex:1,
        backgroundColor:"#ffff",
        padding:5,
        // borderRadius:50,
        // marginRight:5,
    },
    
})

export default styles