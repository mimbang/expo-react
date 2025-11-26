import { Stack } from "expo-router";


export default function MessageLayout() {
    return (
        <Stack >
            <Stack.Screen name="index"
                           options={{title:"Message"}}/>
            <Stack.Screen name="[id]"
                           options={{title:"details de la discussion"}}/>  
            <Stack.Screen name="MessageDetails"
                           options={{title:"details de la discussion",
                           headerShown:true}}/>
                           
        </Stack>
    )
}