import { MaterialIcons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Contacts from "./screens/Contacts";
import Profile from "./screens/Profile";
import colors from "./utility/colors";
import Favorites from "./screens/Favorites";
import Options from "./screens/Options";
import User from "./screens/User";
import { createDrawerNavigator } from "@react-navigation/drawer";

const getDrawerItemIcon =
  (icon: any) =>
  ({ tintColor }: any) =>
    <MaterialIcons name={icon} size={22} style={{ color: tintColor }} />;

const Stack = createNativeStackNavigator();
const ContactsScreens = () => {
  return (
    <Stack.Navigator
      initialRouteName="Contacts"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: "tomato" },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Contacts"
        component={Contacts}
        options={{ title: "Contacts" }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={({ route }) => {
          const { contact }: any = route.params;
          const { name } = contact;
          return {
            title: name.split(" ")[0],
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: colors.blue,
            },
          };
        }}
      />
    </Stack.Navigator>
  );
};

const FavoritesScreens = () => {
  return (
    <Stack.Navigator initialRouteName="Favorites">
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{ title: "Favorites" }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ title: "Profile" }}
      />
    </Stack.Navigator>
  );
};

const UserScreens = () => {
  return (
    <Stack.Navigator initialRouteName="User">
      <Stack.Screen
        name="User"
        component={User}
        options={({ navigation }) => ({
          headerTitle: "Me",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: colors.blue,
          },
          headerRight: () => (
            <MaterialIcons
              name="settings"
              size={24}
              style={{ color: "white", marginRight: 10 }}
              onPress={() => navigation.navigate("Options")}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Options"
        component={Options}
        options={{ title: "Options" }}
      />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="ContactsScreens">
      <Drawer.Screen
        name="ContactsScreens"
        component={ContactsScreens}
        options={{
          drawerIcon: getDrawerItemIcon("list"),
        }}
      />
      <Drawer.Screen
        name="FavoritesScreens"
        component={FavoritesScreens}
        options={{
          drawerIcon: getDrawerItemIcon("star"),
        }}
      />
      <Drawer.Screen
        name="UserScreens"
        component={UserScreens}
        options={{
          drawerIcon: getDrawerItemIcon("person"),
        }}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
