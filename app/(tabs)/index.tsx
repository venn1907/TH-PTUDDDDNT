import { createStackNavigator } from "@react-navigation/stack";
import Lab1 from "./ThucHanh/Lab1/lab1";
import Project1 from "./ThucHanh/Lab1/Project1";
import Project2 from "./ThucHanh/Lab1/Project2";
import Project3 from "./ThucHanh/Lab1/Project3";
import Project4 from "./ThucHanh/Lab1/Project4";
import Project5 from "./ThucHanh/Lab1/Project5";
import Project6 from "./ThucHanh/Lab1/Project6";
import Project7 from "./ThucHanh/Lab1/Project7";
import Project8 from "./ThucHanh/Lab1/Project8";

const Stack = createStackNavigator();

export default function HomeScreen() {
  return (
    <Stack.Navigator
      initialRouteName="Lab1"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Lab1" component={Lab1} />
      <Stack.Screen name="Project1" component={Project1} />
      <Stack.Screen name="Project2" component={Project2} />
      <Stack.Screen name="Project3" component={Project3} />
      <Stack.Screen name="Project4" component={Project4} />
      <Stack.Screen name="Project5" component={Project5} />
      <Stack.Screen name="Project6" component={Project6} />
      <Stack.Screen name="Project7" component={Project7} />
      <Stack.Screen name="Project8" component={Project8} />
    </Stack.Navigator>
  );
}
