import React from "react";
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  Image,
} from "react-native";
import PropTypes from "prop-types";
import colors from "../utility/colors";

const ContactListItem = ({
  name,
  avatar,
  phone,
  favorite = false,
  onPress,
}: {
  name: string;
  avatar: string;
  phone: string;
  favorite?: boolean;
  onPress: () => void;
}) => {
  return (
    <TouchableHighlight
      style={styles.container}
      onPress={onPress}
      underlayColor={colors.grey}
    >
      <View style={styles.contactInfo}>
        <Image style={styles.avatar} source={{ uri: avatar }} />
        <View style={styles.details}>
          <Text style={styles.title}>
            {name}
            {favorite && <Text style={{ color: "gold" }}> ★</Text>}
          </Text>
          <Text style={styles.subtitle}>{phone}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default ContactListItem;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
  },
  contactInfo: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 24,
    borderBottomColor: colors.grey,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  avatar: {
    borderRadius: 22,
    width: 44,
    height: 44,
  },
  details: {
    justifyContent: "center",
    flex: 1,
    marginLeft: 20,
  },
  title: {
    color: colors.black,
    fontWeight: "bold",
    fontSize: 16,
  },
  subtitle: {
    color: colors.blue,
    fontSize: 15,
    marginTop: 4,
  },
});
