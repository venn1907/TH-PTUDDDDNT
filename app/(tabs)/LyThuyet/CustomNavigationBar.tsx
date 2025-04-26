import React from "react";
import { Appbar, Menu } from "react-native-paper";
import { getHeaderTitle } from "@react-navigation/elements";

const CustomNavigationBar = ({ navigation, route, options, back }: any) => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
      {back ? null : (
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Appbar.Action icon="dots-vertical" onPress={openMenu} />}
        >
          <Menu.Item
            onPress={() => {
              console.log("Option 1 was pressed");
              closeMenu();
            }}
            title="Home"
          />
          <Menu.Item
            onPress={() => {
              navigation.navigate("Details");
              closeMenu();
            }}
            title="Detail"
          />
          <Menu.Item
            onPress={() => {
              console.log("Option 3 was pressed");
              closeMenu();
            }}
            title="Option 3"
            disabled
          />
        </Menu>
      )}
    </Appbar.Header>
  );
};

export default CustomNavigationBar;
