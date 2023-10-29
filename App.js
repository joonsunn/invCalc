import "react-native-gesture-handler";
import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import AprCalculator from "./screens/AprCalculator";
import ApyCalculator from "./screens/ApyCalculator";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

export default function App() {
    const dimensions = useWindowDimensions();
    const isLargeScreen = dimensions.width >= 768;

    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Annualised Returns Calculator"
                screenOptions={{
                    drawerType: isLargeScreen ? "permanent" : "back",
                    // drawerStyle: isLargeScreen ? null : { width: '30%' },
                    overlayColor: "transparent",
                }}
            >
                <Drawer.Screen
                    name="Annualised Returns Calculator"
                    component={AprCalculator}
                ></Drawer.Screen>
                <Drawer.Screen
                    name="Compounding Returns Calculator"
                    component={ApyCalculator}
                ></Drawer.Screen>
            </Drawer.Navigator>
        </NavigationContainer>
        // <View style={styles.container}>
        // </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 12,
    },
});

registerRootComponent(App);
