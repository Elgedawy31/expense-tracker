import { Stack } from "expo-router"

const layout = () => {
  return <Stack screenOptions={{headerShown:false}} >
          <Stack.Screen name='welcome' />
        </Stack>
}

export default layout