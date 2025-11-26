import { Color, Padding } from '@/constants/Color'
import { StyleSheet } from 'react-native'

const DashStyle = StyleSheet.create({
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

    // style de la flatlist
    ScrollarList:{
        paddingHorizontal:Padding.horizontal,
        paddingVertical:Padding.vertical,
        // backgroundColor:"red",


    },
    ScrollarListItem:{
        flexDirection:"column",
        backgroundColor:"white",
        paddingVertical:10,
        marginBottom:15,
        elevation:5,
        margin:10,
        padding:15,
        // width:200,
        borderWidth:.75,

    },
    MainText:{
        fontWeight:"medium",
        fontSize:21,

    },
    subtext:{
        marginTop:3,
        fontSize:14,
    },
    title:{
        paddingHorizontal:Padding.horizontal,
        paddingVertical:Padding.vertical,
    },
    titleBold:{
        fontWeight:"bold",

    },
    item:{
        marginRight:15,
        flexDirection:"row",
        backgroundColor:"white",
        paddingHorizontal:Padding.horizontal,
        paddingVertical:Padding.vertical,
        alignItems:"center",
        borderRadius:5,



    },
    itemImg:{
         width: 40, height: 40 ,margin:5, 
    },title_space_between:{
        paddingHorizontal:Padding.horizontal,
        paddingVertical:Padding.vertical,
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:15,

    },
    link:{
        textDecorationColor:Color.main,
        color:Color.main,

    },
    DoctorsContainer:{
        paddingHorizontal:Padding.horizontal,
        paddingVertical:Padding.vertical,

    },
    DoctorsCard:{
        flex:1,
        backgroundColor :"white",
        flexDirection:"row",
        elevation:5,
        padding:10,
        paddingHorizontal:Padding.horizontal,
        paddingVertical:Padding.vertical,
        marginBottom:5,
        borderRadius:5,

    },
    DoctorImg:{
        width:80,
        height:80,
        borderRadius:80/2,
        marginBottom:15,
        borderWidth:1,
        marginRight:15,


        // { width: 60, height: 60, borderRadius: 30, marginRight: 12 }

    },
    DoctorName:{
        fontWeight:"bold",
        fontSize:16,
        marginBottom:15,


    },
    DoctorSpec:{
        backgroundColor:Color.main,
        padding:8,
        borderRadius:15,
        fontSize:14,
        color:"white",
        paddingHorizontal:Padding.horizontal,

    },
    DoctorInfo:{
        flexDirection:"column"
    },



})

export default  DashStyle
