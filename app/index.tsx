import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';


export default function App() {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Text className="text-xl font-bold text-gray-800">Hello NativeWind!</Text>
      <Text className="text-red-500 mt-4">Tailwind CSS is working! 🎉</Text>
      <StatusBar style="auto" />
    </View>
  );
}