import { Stack } from "expo-router";


export default function MessageLayout() {
    return (
        <Stack >
            
            <Stack.Screen name="index"
                           options={{title:"Business"}}/>
            <Stack.Screen name="[id]"
                           options={{title:"details de la discussion",
                            headerShown:true ,}}/>  
            <Stack.Screen name="DoctorDetails"
                           options={{title:"details de la discussion",
                           headerShown:true}}/>
                           
        </Stack>
    )
}