import { Stack } from "expo-router";


export default function MessageLayout() {
    return (
        <Stack >
            <Stack.Screen name="index"
                           options={{title:"Parametre"}}/>
            <Stack.Screen name="[id]"
                           options={{title:"details duparametre"}}/>  
           
        </Stack>
    )
}