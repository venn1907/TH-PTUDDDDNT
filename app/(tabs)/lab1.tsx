import { Text, TouchableOpacity, View } from "react-native";

const Lab1 = ({ navigation }: { navigation?: any }) => {
  const projects = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <View
      style={{ marginTop: 100, alignItems: "center", justifyContent: "center" }}
    >
      {projects.map((element) => (
        <TouchableOpacity
          key={element}
          style={{ marginBottom: 10 }}
          onPress={() => {
            navigation.navigate(`Project${element}`);
          }}
        >
          <Text>Project {element}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Lab1;
