import { Text, View } from "react-native";

const Project1 = () => {
  return (
    <View
      style={{
        marginTop: 100,
        backgroundColor: "aqua",
        width: 100,
        height: 100,
      }}
    >
      <View
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Hello world!</Text>
      </View>
    </View>
  );
};

export default Project1;
