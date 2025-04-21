import { Text, TouchableOpacity, View } from "react-native";

const Project2 = () => {
  return (
    <View
      style={{
        marginTop: 100,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity onPress={() => alert("Hello!")}>
        <Text>Button 1</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Project2;
