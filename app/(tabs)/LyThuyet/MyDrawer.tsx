import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerBar from "./CustomDrawerBar";
import Profile from "./Profile";
import HomeScreen from "./HomeScreen";

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerBar {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
