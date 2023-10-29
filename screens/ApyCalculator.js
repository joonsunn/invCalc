import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import TextView from "../components/TextView";
import TextInputCustom from "../components/TextInputCustom";

export default function ApyCalculator() {
    const [annualReturn, setAnualReturn] = useState("5");
    const [totalYears, setTotalYears] = useState("30");
    const [startingAmount, setStartingAmount] = useState("1000");
    const totalReturns =
        (Math.pow(annualReturn / 100 + 1, totalYears) - 1) * 100;

    const finalAmount = startingAmount * (1 + totalReturns / 100);

    return (
        <View style={styles.container}>
            {/* <Text>ApyCalculator</Text> */}
            <View style={{ flexDirection: "row" }}>
                <TextView>Starting amount: </TextView>
                <TextInputCustom
                    value={startingAmount}
                    onChangeText={(text) => setStartingAmount(text)}
                    maxLength={10}
                    inputMode="decimal"
                    width={100}
                ></TextInputCustom>
                <TextView></TextView>
            </View>
            <View style={{ flexDirection: "row" }}>
                <TextView>Annual return: </TextView>
                <TextInputCustom
                    value={annualReturn}
                    onChangeText={(text) => setAnualReturn(text)}
                    maxLength={5}
                    inputMode="decimal"
                ></TextInputCustom>
                <TextView>%</TextView>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <TextView textAlign="right">
                    Number of years to compound
                </TextView>
                <TextView> : </TextView>
                <TextInputCustom
                    value={totalYears}
                    onChangeText={(text) => setTotalYears(text)}
                    maxLength={3}
                    inputMode="decimal"
                ></TextInputCustom>
            </View>
            <View>
                <TextView>
                    Total returns: {`${totalReturns.toFixed(2)}%`}
                </TextView>
                <TextView>Final amount: {`${finalAmount.toFixed(2)}`}</TextView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        // padding: 24,
        gap: 24,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    textInput: {
        borderColor: "black",
        borderWidth: 1,
    },
});
