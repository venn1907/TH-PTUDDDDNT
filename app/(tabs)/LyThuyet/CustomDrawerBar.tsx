import React, { useState } from "react";
import { Divider, Drawer } from "react-native-paper";

const CustomDrawerBar = ({ navigation }: any) => {
  const [active, setActive] = useState("");

  return (
    <Drawer.Section title="Admin">
      <Drawer.Item
        label="Home"
        icon="home"
        active={active === "Home"}
        onPress={() => {
          navigation.navigate("Home");
          setActive("Home");
        }}
      />
      <Drawer.Item
        label="Profile"
        icon="account"
        active={active === "Profile"}
        onPress={() => {
          navigation.navigate("Profile");
          setActive("Profile");
        }}
      />
      <Divider />
      <Drawer.Item
        label="Logout"
        icon="logout"
        onPress={() => {
          // Xử lý logic đăng xuất ở đây
          navigation.navigate("Login"); // Ví dụ: chuyển đến màn hình đăng nhập
        }}
      />
    </Drawer.Section>
  );
};

export default CustomDrawerBar;
