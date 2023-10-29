import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import TextView from "../components/TextView";
import TextInputCustom from "../components/TextInputCustom";

export default function AprCalculator() {
    const [returnInput, setReturnInput] = useState("30");
    const [yearsInput, setYearsInput] = useState("5");
    const Apr = (Math.pow(returnInput / 100 + 1, 1 / yearsInput) - 1) * 100;

    return (
        <View style={styles.container}>
            {/* <Text>AprCalculator</Text> */}
            <View className="top">
                <View style={{ flexDirection: "row" }}>
                    {/* <Text>Total returns in %: </Text> */}
                    <TextView>Total returns: </TextView>
                    {/* <TextInput style={styles.textInput} value={returnInput} onChangeText={(text) => setReturnInput(text)} maxLength={5} inputMode='decimal'></TextInput> */}
                    <TextInputCustom
                        value={returnInput}
                        onChangeText={(text) => setReturnInput(text)}
                        maxLength={5}
                        inputMode="decimal"
                    ></TextInputCustom>
                    <TextView>%</TextView>
                </View>

                {/* <Text>Input return is: {returnInput+'%'}</Text> */}
            </View>
            <View className="mid">
                <View style={{ flexDirection: "row" }}>
                    {/* <Text>Number of years: </Text> */}
                    <TextView>Number of years: </TextView>
                    {/* <TextInput style={styles.textInput} value={yearsInput} onChangeText={(text) => setYearsInput(text)} maxLength={5} inputMode='decimal'></TextInput> */}
                    <TextInputCustom
                        value={yearsInput}
                        onChangeText={(text) => setYearsInput(text)}
                        maxLength={5}
                        inputMode="decimal"
                    ></TextInputCustom>
                </View>

                {/* <Text>Input years is: {yearsInput+ ' years'}</Text> */}
            </View>
            <View
                className="bottom"
                style={{
                    flexDirection: "row",
                    maxWidth: "80%",
                    gap: 6,
                    // alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <TextView textAlign="right">Annualised Returns:</TextView>
                <TextView>{`${Apr.toFixed(2)}%`}</TextView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        padding: 24,
        gap: 32,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    textInput: {
        borderColor: "black",
        borderWidth: 1,
        width: "3%",
    },
});
