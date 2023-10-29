import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const TextInputCustom = ({
    value,
    onChangeText,
    maxLength,
    inputMode,
    width = 48,
}) => {
    return (
        <TextInput
            style={styles.container}
            value={value}
            onChangeText={onChangeText}
            maxLength={maxLength}
            inputMode={inputMode}
            width={width}
        ></TextInput>
    );
};

const styles = StyleSheet.create({
    container: {
        fontSize: 24,
        borderColor: "black",
        borderWidth: 1,
        // width: 64,
        paddingHorizontal: 5,
    },
});

export default TextInputCustom;
