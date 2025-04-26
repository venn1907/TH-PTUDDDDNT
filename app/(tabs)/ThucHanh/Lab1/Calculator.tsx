import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Vibration,
  View,
} from "react-native";
import { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";

const Calculalator = () => {
  // darkMode
  const [darkMode, setDarkMode] = useState(false);
  const bgColor = darkMode ? "#414853" : "#ededed";
  const bgNumber = darkMode ? "#303946" : "#fff";
  const bgColorResult = darkMode ? "#282f3b" : "#f5f5f5";
  const bgColorThemeButton = darkMode ? "#7b8084" : "#e5e5e5";
  const textColortHistory = darkMode ? "#b5b7bb" : "#7c7c7c";
  const colorIcon = darkMode ? "white" : "black";

  const [lastNumber, setLastNumber] = useState("");
  const [currentNumber, setCurrentNumber] = useState("0");

  const handleInput = (buttonPressed: any) => {
    Vibration.vibrate(35);
    console.log(buttonPressed);
    if (
      buttonPressed === "+" ||
      buttonPressed === "-" ||
      buttonPressed === "x" ||
      buttonPressed === "/"
    ) {
      setCurrentNumber(currentNumber + " " + buttonPressed + " ");
      return;
    }

    switch (buttonPressed) {
      case "DEL":
        setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1));
        return;
      case "C":
        setLastNumber("");
        setCurrentNumber("0");
        return;
      case "=":
        setLastNumber(currentNumber + " = ");
        calculator();
        return;
      case ".":
        if (currentNumber.includes(".")) return;
        setCurrentNumber(currentNumber + ".");
        return;
    }

    const isNumber =
      !isNaN(parseFloat(buttonPressed)) && isFinite(buttonPressed);
    if (isNumber) {
      setCurrentNumber(
        currentNumber === "0" ? buttonPressed : currentNumber + buttonPressed
      );
      return;
    }
  };

  const calculator = () => {
    const splitNumbers = currentNumber.split(" ");
    const firstNumber = parseFloat(splitNumbers[0]);
    const lastNumber = parseFloat(splitNumbers[2]);
    const operator = splitNumbers[1];

    if (operator) {
      switch (operator) {
        case "+":
          setCurrentNumber((firstNumber + lastNumber).toString());
          return;
        case "-":
          setCurrentNumber((firstNumber - lastNumber).toString());
          return;
        case "x":
          setCurrentNumber((firstNumber * lastNumber).toString());
          return;
        case "/":
          setCurrentNumber((firstNumber / lastNumber).toString());
          return;
      }
    }
  };

  // Buttons
  const buttonsLeft = [
    ["C", "DEL"],
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    [".", 0, "="],
  ];

  const buttonsRight = ["/", "x", "-", "+"];

  // Render GUI
  return (
    <View style={myStyles.container}>
      {/* Thiết kế giao diện view containerResult */}
      <View
        style={[myStyles.containerResult, { backgroundColor: bgColorResult }]}
      >
        <TouchableOpacity
          style={[
            myStyles.themeButton,
            { backgroundColor: bgColorThemeButton },
          ]}
          onPress={() => setDarkMode(!darkMode)}
        >
          <Entypo
            name={darkMode ? "moon" : "light-up"}
            size={24}
            style={{ color: colorIcon }}
          />
        </TouchableOpacity>
        <Text style={[myStyles.historyText, { color: textColortHistory }]}>
          {lastNumber}
        </Text>
        <Text style={myStyles.resultText}>{currentNumber}</Text>
      </View>

      {/* Thiết kế giao diện view containerButton */}
      <View style={myStyles.containerButton}>
        {/* Thiết kế giao diện view containerButtonLeft */}
        <View style={myStyles.containerButtonLeft}>
          {buttonsLeft.map((row, index) => (
            <View key={index} style={myStyles.containerRow}>
              {row.map((item, buttonIndex) => (
                <TouchableOpacity
                  key={buttonIndex}
                  style={[
                    myStyles.button,
                    buttonIndex === 0 && { backgroundColor: "#f4a261" },
                    buttonIndex === 1 &&
                      index === 0 && { backgroundColor: "#f4a261" },
                  ]}
                  onPress={() => handleInput(item)}
                >
                  <Text style={[myStyles.buttonText, { color: "#000" }]}>
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>

        {/* Thiết kế giao diện view containerButtonRight */}
        <View style={myStyles.containerButtonRight}>
          {buttonsRight.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={myStyles.button}
              onPress={() => handleInput(item)}
            >
              <Text style={[myStyles.buttonText, { color: "#fff" }]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const myStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerResult: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "flex-end",
    paddingHorizontal: 20,
  },
  containerButton: {
    flex: 2,
    flexDirection: "row",
  },
  containerButtonLeft: {
    flex: 3,
  },
  containerButtonRight: {
    flex: 1,
    backgroundColor: "#00b9d6",
  },
  themeButton: {
    position: "absolute",
    top: 20,
    left: 20,
    borderRadius: 90,
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  historyText: {
    fontSize: 20,
    marginRight: 10,
    textAlign: "right",
  },
  resultText: {
    color: "#00b9d6",
    fontSize: 35,
    marginRight: 15,
    textAlign: "right",
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  containerRow: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent", // Để thấy màu nền của button
  },
});

export default Calculalator;
