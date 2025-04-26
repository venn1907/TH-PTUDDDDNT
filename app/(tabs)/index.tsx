import { createStackNavigator } from "@react-navigation/stack";
import { PaperProvider } from "react-native-paper";
import CustomNavigationBar from "./LyThuyet/CustomNavigationBar";
import DetailsScreen from "./LyThuyet/DetailsScreen";
import Home from "./LyThuyet/HomeScreen";
import MyDrawer from "./LyThuyet/MyDrawer";
import Calculalator from "./ThucHanh/Lab1/Calculator";

const Stack = createStackNavigator();

export default function HomeScreen() {
  return (
    <PaperProvider>
      {/* <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          header: (props) => <CustomNavigationBar {...props} />,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator> */}
      <Calculalator />
    </PaperProvider>
  );
}
